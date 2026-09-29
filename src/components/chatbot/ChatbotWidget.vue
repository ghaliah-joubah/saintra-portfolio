<template>
  <div class="chatbot-widget">
    <transition name="chatbot-window">
      <section
        v-if="isOpen"
        id="saintra-chatbot-window"
        class="chatbot-window"
        role="dialog"
        aria-modal="false"
        :aria-label="t(siteCopyState.chatbot.title)"
        @keydown.esc.prevent="close"
      >
        <header class="chatbot-header">
          <div class="min-w-0">
            <h2 class="truncate text-base font-bold">{{ t(siteCopyState.chatbot.title) }}</h2>
            <p class="truncate text-xs opacity-80">{{ t(siteCopyState.chatbot.subtitle) }}</p>
          </div>
          <button type="button" class="chatbot-icon-button" :aria-label="t(siteCopyState.chatbot.close)" @click="close">
            <X class="h-5 w-5" />
          </button>
        </header>

        <div ref="messageListRef" class="chatbot-messages" role="log" aria-live="polite" aria-relevant="additions">
          <ChatbotMessage v-for="message in messages" :key="message.id" :message="message" />
          <div v-if="isLoading" class="chatbot-message-row chatbot-message-row--assistant">
            <div class="chatbot-message chatbot-message--assistant inline-flex items-center gap-2" role="status">
              <LoaderCircle class="h-4 w-4 animate-spin" />
              <span>{{ t(siteCopyState.chatbot.typing) }}</span>
            </div>
          </div>
          <p v-if="hasError" class="chatbot-error" role="alert">{{ t(siteCopyState.chatbot.error) }}</p>
        </div>

        <form class="chatbot-input-row" @submit.prevent="submit">
          <label for="chatbot-message-input" class="sr-only">{{ t(siteCopyState.chatbot.placeholder) }}</label>
          <textarea
            id="chatbot-message-input"
            ref="inputRef"
            v-model="draft"
            rows="1"
            maxlength="500"
            class="chatbot-input"
            :placeholder="t(siteCopyState.chatbot.placeholder)"
            :disabled="isLoading"
            @keydown.enter.exact.prevent="submit"
          ></textarea>
          <button
            type="submit"
            class="chatbot-send"
            :disabled="!draft.trim() || isLoading"
            :aria-label="t(siteCopyState.chatbot.send)"
          >
            <Send class="h-5 w-5" />
          </button>
        </form>
      </section>
    </transition>

    <button
      ref="launcherRef"
      type="button"
      class="chatbot-launcher"
      :aria-expanded="isOpen"
      aria-controls="saintra-chatbot-window"
      :aria-label="t(siteCopyState.chatbot.open)"
      @click="open"
    >
      <MessageCircle class="h-5 w-5" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref, watch } from 'vue';
import { LoaderCircle, MessageCircle, Send, X } from 'lucide-vue-next';
import ChatbotMessage from '@/components/chatbot/ChatbotMessage.vue';
import { useChatbot } from '@/composables/useChatbot';
import { useI18n } from '@/composables/useI18n';
import { siteCopyState } from '@/services/dataService';

const { currentLang, t } = useI18n();
const { isOpen, isLoading, hasError, messages, openConversation, closeConversation, sendMessage } = useChatbot();
const draft = ref('');
const inputRef = ref<HTMLTextAreaElement | null>(null);
const launcherRef = ref<HTMLButtonElement | null>(null);
const messageListRef = ref<HTMLElement | null>(null);

async function scrollToLatest() {
  await nextTick();
  const list = messageListRef.value;
  if (list) list.scrollTop = list.scrollHeight;
}

async function open() {
  openConversation(t(siteCopyState.chatbot.greeting), currentLang.value);
  await nextTick();
  inputRef.value?.focus();
  await scrollToLatest();
}

async function close() {
  closeConversation();
  await nextTick();
  launcherRef.value?.focus();
}

async function submit() {
  const message = draft.value.trim();
  if (!message || isLoading.value) return;
  draft.value = '';
  await scrollToLatest();
  await sendMessage(message, currentLang.value);
  await scrollToLatest();
  inputRef.value?.focus();
}

watch([() => messages.value.length, isLoading], scrollToLatest);
</script>
