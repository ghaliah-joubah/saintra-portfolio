<template>
  <header class="sticky top-0 z-50 glass-card border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg p-1">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
          S
        </div>
        <div class="flex flex-col">
          <span class="font-bold text-xl tracking-wider text-white group-hover:text-sky-400 transition-colors">SAINTRA</span>
          <span class="text-[10px] text-slate-400 font-normal">سيقما تكنولوجي</span>
        </div>
      </router-link>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80" aria-label="Main Navigation">
        <router-link
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
          :class="$route.path === link.path ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'"
        >
          {{ link.label }}
        </router-link>
      </nav>

      <!-- Right Controls: Language Switch & CTA -->
      <div class="hidden md:flex items-center gap-3">
        <!-- Language Switcher -->
        <button
          @click="toggleLanguage"
          class="flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-sky-400 hover:border-sky-500/50 transition-all focus:outline-none focus:ring-2 focus:ring-sky-500"
          :aria-label="siteCopy.common.languageSwitch[currentLang === 'ar' ? 'en' : 'ar']"
        >
          <Globe class="w-4 h-4 text-sky-400" />
          <span>{{ currentLang === 'ar' ? 'English' : 'العربية' }}</span>
        </button>

        <router-link
          to="/contact"
          class="px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          {{ t(siteCopy.buttons.contactUs) }}
        </router-link>
      </div>

      <!-- Mobile Menu Button -->
      <div class="flex items-center gap-2 md:hidden">
        <button
          @click="toggleLanguage"
          class="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          {{ currentLang === 'ar' ? 'EN' : 'AR' }}
        </button>

        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
          :aria-expanded="isMobileMenuOpen"
          aria-label="Toggle mobile menu"
        >
          <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6 text-sky-400" />
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="isMobileMenuOpen" class="md:hidden glass-card border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
        <router-link
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          @click="isMobileMenuOpen = false"
          class="block px-4 py-3 rounded-xl text-base font-medium transition-colors"
          :class="$route.path === link.path ? 'bg-sky-500/20 text-sky-400 font-bold border border-sky-500/30' : 'text-slate-300 hover:bg-slate-900'"
        >
          {{ link.label }}
        </router-link>

        <div class="pt-4 border-t border-slate-800/80 flex flex-col gap-3">
          <button
            @click="toggleLanguage(); isMobileMenuOpen = false"
            class="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-semibold"
          >
            <Globe class="w-5 h-5 text-sky-400" />
            <span>{{ currentLang === 'ar' ? 'English' : 'العربية' }}</span>
          </button>

          <router-link
            to="/contact"
            @click="isMobileMenuOpen = false"
            class="w-full text-center py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold"
          >
            {{ t(siteCopy.buttons.contactUs) }}
          </router-link>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Globe, Menu, X } from 'lucide-vue-next';
import { useI18n } from '@/composables/useI18n';
import { siteCopy } from '@/data/siteCopy';

const { currentLang, toggleLanguage, t } = useI18n();
const isMobileMenuOpen = ref(false);

const navLinks = computed(() => [
  { path: '/', label: t(siteCopy.nav.home) },
  { path: '/about', label: t(siteCopy.nav.about) },
  { path: '/services', label: t(siteCopy.nav.services) },
  { path: '/projects', label: t(siteCopy.nav.projects) },
  { path: '/contact', label: t(siteCopy.nav.contact) }
]);
</script>
