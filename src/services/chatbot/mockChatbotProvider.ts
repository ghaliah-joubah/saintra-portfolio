import mockData from '@/data/chatbotMockData.json';
import type {
  ChatbotLanguage,
  ChatbotMatchType,
  ChatbotMockDataset,
  ChatbotMockItem,
  ChatbotProvider,
  ChatbotRequestContext,
  ChatbotResponse
} from '@/types/chatbot';

const dataset = mockData as ChatbotMockDataset;

function normalize(value: string): string {
  return value
    .toLocaleLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f\u064b-\u065f\u0670]/g, '')
    .replace(/[أإآ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ؤ/g, 'و')
    .replace(/ئ/g, 'ي')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function detectLanguage(message: string, fallback: ChatbotLanguage): ChatbotLanguage {
  if (/[\u0600-\u06ff]/.test(message)) return 'ar';
  if (/[a-z]/i.test(message)) return 'en';
  return fallback;
}

function includesPhrase(value: string, phrase: string): boolean {
  return value === phrase || value.includes(` ${phrase} `) || value.startsWith(`${phrase} `) || value.endsWith(` ${phrase}`);
}

type RankedMatch = { item: ChatbotMockItem; score: number; matchType: ChatbotMatchType };

function rankItem(item: ChatbotMockItem, query: string, language: ChatbotLanguage): RankedMatch | null {
  const question = normalize(item.question[language]);
  const aliases = item.aliases[language].map(normalize).filter(Boolean);
  const keywords = item.keywords[language].map(normalize).filter(Boolean);
  if (query === question || aliases.includes(query)) return { item, score: 1000, matchType: 'exact' };

  const phrases = [question, ...aliases];
  const phraseStrength = phrases.reduce((best, phrase) => {
    if (includesPhrase(query, phrase)) return Math.max(best, 900 + phrase.split(' ').length);
    if (query.split(' ').length >= 2 && includesPhrase(phrase, query)) return Math.max(best, 850 + query.split(' ').length);
    return best;
  }, 0);
  if (phraseStrength) return { item, score: phraseStrength, matchType: 'phrase' };

  const queryTokens = new Set(query.split(' ').filter(Boolean));
  const keywordMatches = keywords.filter((keyword) => queryTokens.has(keyword));
  if (keywordMatches.length >= 2) return { item, score: 700 + keywordMatches.length, matchType: 'keywords' };
  return null;
}

function responseFor(item: ChatbotMockItem, language: ChatbotLanguage, matchType: ChatbotMatchType): ChatbotResponse {
  return { text: item.answer[language], language, matchType, sourceId: item.id };
}

function fallbackResponse(language: ChatbotLanguage, type: 'unknown' | 'ambiguous'): ChatbotResponse {
  return {
    text: dataset.fallback[type][language],
    language,
    matchType: type === 'ambiguous' ? 'ambiguous' : 'fallback'
  };
}

async function waitForPrototypeDelay() {
  await new Promise((resolve) => setTimeout(resolve, dataset.responseDelayMs));
}

export const mockChatbotProvider: ChatbotProvider = {
  async sendMessage(message: string, context: ChatbotRequestContext): Promise<ChatbotResponse> {
    const language = detectLanguage(message, context.siteLanguage);
    const query = normalize(message);
    await waitForPrototypeDelay();

    const ranked = dataset.items
      .map((item) => rankItem(item, query, language))
      .filter((match): match is RankedMatch => Boolean(match))
      .sort((a, b) => b.score - a.score);

    if (ranked.length) {
      if (ranked[1] && ranked[0].score === ranked[1].score) return fallbackResponse(language, 'ambiguous');
      return responseFor(ranked[0].item, language, ranked[0].matchType);
    }

    const queryTokens = new Set(query.split(' ').filter(Boolean));
    const singleKeywordMatches = dataset.items.filter((item) =>
      item.keywords[language].map(normalize).some((keyword) => queryTokens.has(keyword))
    );
    if (singleKeywordMatches.length === 1) return responseFor(singleKeywordMatches[0], language, 'keyword');
    if (singleKeywordMatches.length > 1) return fallbackResponse(language, 'ambiguous');
    return fallbackResponse(language, 'unknown');
  }
};
