import type { ChatbotProvider, ChatbotRequestContext, ChatbotResponse } from '@/types/chatbot';
import { mockChatbotProvider } from '@/services/chatbot/mockChatbotProvider';

let activeProvider: ChatbotProvider = mockChatbotProvider;

export function configureChatbotProvider(provider: ChatbotProvider) {
  activeProvider = provider;
}

export function sendChatbotMessage(message: string, context: ChatbotRequestContext): Promise<ChatbotResponse> {
  return activeProvider.sendMessage(message, context);
}
