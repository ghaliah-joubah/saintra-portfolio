export type ChatbotLanguage = 'ar' | 'en';
export type ChatbotMessageRole = 'user' | 'assistant';
export type ChatbotMatchType = 'exact' | 'phrase' | 'keywords' | 'keyword' | 'ambiguous' | 'fallback';

export interface ChatbotMessage {
  id: string;
  role: ChatbotMessageRole;
  content: string;
  language: ChatbotLanguage;
}

export interface ChatbotRequestContext {
  siteLanguage: ChatbotLanguage;
}

export interface ChatbotResponse {
  text: string;
  language: ChatbotLanguage;
  matchType: ChatbotMatchType;
  sourceId?: string;
}

export interface ChatbotProvider {
  sendMessage(message: string, context: ChatbotRequestContext): Promise<ChatbotResponse>;
}

export interface ChatbotMockItem {
  id: string;
  question: Record<ChatbotLanguage, string>;
  answer: Record<ChatbotLanguage, string>;
  aliases: Record<ChatbotLanguage, string[]>;
  keywords: Record<ChatbotLanguage, string[]>;
}

export interface ChatbotMockDataset {
  responseDelayMs: number;
  fallback: {
    unknown: Record<ChatbotLanguage, string>;
    ambiguous: Record<ChatbotLanguage, string>;
  };
  items: ChatbotMockItem[];
}
