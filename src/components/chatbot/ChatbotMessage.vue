<template>
  <div class="chatbot-message-row" :class="message.role === 'user' ? 'chatbot-message-row--user' : 'chatbot-message-row--assistant'">
    <div
      class="chatbot-message"
      :class="message.role === 'user' ? 'chatbot-message--user' : 'chatbot-message--assistant'"
      :dir="message.language === 'ar' ? 'rtl' : 'ltr'"
    >
      {{ message.content }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ChatbotMessage } from '@/types/chatbot';

defineProps<{ message: ChatbotMessage }>();
</script>
