<template>
  <div class="min-h-screen flex flex-col bg-slate-50 text-navy-900">
    <Navbar v-if="!isAdminRoute" />
    <main class="flex-1">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer v-if="!isAdminRoute" />
    <BackToTop v-if="!isAdminRoute" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '@/components/layout/Navbar.vue';
import Footer from '@/components/layout/Footer.vue';
import BackToTop from '@/components/layout/BackToTop.vue';

const route = useRoute();

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
