import { ref } from 'vue';
import { sendChatbotMessage } from '@/services/chatbot/chatbotService';
import type { ChatbotLanguage, ChatbotMessage } from '@/types/chatbot';

let messageSequence = 0;

function createMessage(role: ChatbotMessage['role'], content: string, language: ChatbotLanguage): ChatbotMessage {
  messageSequence += 1;
  return { id: `chatbot-message-${messageSequence}`, role, content, language };
}

export function useChatbot() {
  const isOpen = ref(false);
  const isLoading = ref(false);
  const hasError = ref(false);
  const messages = ref<ChatbotMessage[]>([]);

  function openConversation(greeting: string, siteLanguage: ChatbotLanguage) {
    isOpen.value = true;
    if (!messages.value.length) messages.value.push(createMessage('assistant', greeting, siteLanguage));
  }

  function closeConversation() {
    isOpen.value = false;
  }

  async function sendMessage(rawMessage: string, siteLanguage: ChatbotLanguage): Promise<boolean> {
    const message = rawMessage.trim();
    if (!message || isLoading.value) return false;

    const userLanguage: ChatbotLanguage = /[\u0600-\u06ff]/.test(message) ? 'ar' : /[a-z]/i.test(message) ? 'en' : siteLanguage;
    messages.value.push(createMessage('user', message, userLanguage));
    hasError.value = false;
    isLoading.value = true;
    try {
      const response = await sendChatbotMessage(message, { siteLanguage });
      messages.value.push(createMessage('assistant', response.text, response.language));
      return true;
    } catch (error) {
      console.error('Chatbot provider failed', error);
      hasError.value = true;
      return false;
    } finally {
      isLoading.value = false;
    }
  }

  return { isOpen, isLoading, hasError, messages, openConversation, closeConversation, sendMessage };
}
