<template>
  <div
    class="min-h-screen flex flex-col bg-slate-50 text-navy-900"
    :class="{ 'portfolio-shell': !isAdminRoute }"
    :data-theme="isAdminRoute ? undefined : currentTheme"
  >
    <Navbar v-if="!isAdminRoute" />
    <main class="flex-1">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer v-if="!isAdminRoute" />
    <ChatbotWidget v-if="!isAdminRoute" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '@/components/layout/Navbar.vue';
import Footer from '@/components/layout/Footer.vue';
import ChatbotWidget from '@/components/chatbot/ChatbotWidget.vue';
import { useTheme } from '@/composables/useTheme';

const route = useRoute();
const { currentTheme, initializeTheme } = useTheme();
initializeTheme();

const isAdminRoute = computed(() => {
  return route.path.startsWith('/admin');
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
