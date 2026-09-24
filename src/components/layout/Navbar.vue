<template>
  <header
    class="fixed top-0 inset-x-0 z-50 transition-[background-color,box-shadow,border-color,backdrop-filter] duration-500 ease-out"
    :class="[
      isScrolled || !isHome || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80' : 'bg-transparent border-b border-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

      <!-- Logo -->
      <router-link to="/" class="flex items-center min-w-0 group focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg p-1">
        <BrandLogo class="transition-transform duration-300 group-hover:scale-[1.03]" />
      </router-link>

      <!-- Desktop Nav -->
      <nav class="desktop-navigation items-center gap-6" :aria-label="t(siteCopyState.common.mainNavigation)">
        <router-link
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="text-sm font-semibold transition-colors duration-200 focus:outline-none py-2 relative group"
          :class="$route.path === link.path ? 'text-sky-500' : 'text-navy-900 hover:text-sky-500'"
        >
          {{ link.label }}
          <span
            class="absolute bottom-0 left-0 w-full h-0.5 bg-brand-coral transition-transform duration-300 origin-left"
            :class="$route.path === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'"
          ></span>
        </router-link>
      </nav>

      <!-- Right Controls: Language Switch & CTA -->
      <div class="desktop-controls items-center gap-4">
        <!-- Language Switcher -->
        <button
          @click="toggleLanguage"
          class="flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-sky-500 transition-colors focus:outline-none"
          :aria-label="siteCopyState.common.languageSwitch[currentLang === 'ar' ? 'en' : 'ar']"
        >
          <Globe class="w-4 h-4" />
          <span>{{ currentLang === 'ar' ? 'EN' : 'AR' }}</span>
        </button>

        <router-link
          to="/contact"
          class="px-5 py-2.5 rounded-xl text-sm font-bold bg-sky-500 text-white shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          {{ t(siteCopyState.buttons.contactUs) }}
        </router-link>
      </div>

      <!-- Mobile Menu Button -->
      <div class="mobile-controls items-center gap-2 shrink-0">
        <button
          @click="toggleLanguage"
          class="nav-language-inline items-center gap-1.5 min-h-11 px-2 text-navy-900 font-bold text-sm focus:outline-none"
          :aria-label="siteCopyState.common.languageSwitch[currentLang === 'ar' ? 'en' : 'ar']"
        >
          <Globe class="w-4 h-4" />
          <span>{{ currentLang === 'ar' ? 'EN' : 'AR' }}</span>
        </button>

        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="p-2 min-h-11 min-w-11 flex items-center justify-center text-navy-900 hover:text-sky-500 focus:outline-none"
          :aria-expanded="isMobileMenuOpen"
          :aria-label="t(siteCopyState.common.mobileMenu)"
        >
          <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
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
      <div v-if="isMobileMenuOpen" class="mobile-drawer bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 absolute top-full w-full shadow-lg">
        <router-link
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          @click="isMobileMenuOpen = false"
          class="block px-4 py-3 rounded-xl text-base font-bold transition-colors"
          :class="$route.path === link.path ? 'bg-sky-50 text-sky-500 border border-sky-100' : 'text-navy-900 hover:bg-slate-50'"
        >
          {{ link.label }}
        </router-link>

        <div class="pt-4 border-t border-slate-100 flex flex-col gap-3">
          <button
            type="button"
            class="drawer-language items-center gap-2 min-h-11 px-4 font-bold text-navy-900"
            :aria-label="siteCopyState.common.languageSwitch[currentLang === 'ar' ? 'en' : 'ar']"
            @click="switchDrawerLanguage"
          >
            <Globe class="w-4 h-4" />
            <span>{{ currentLang === 'ar' ? 'EN' : 'AR' }}</span>
          </button>
          <router-link
            to="/contact"
            @click="isMobileMenuOpen = false"
            class="w-full text-center py-3 rounded-xl bg-sky-500 text-white font-bold"
          >
            {{ t(siteCopyState.buttons.contactUs) }}
          </router-link>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { Globe, Menu, X } from 'lucide-vue-next';
import { useRoute } from 'vue-router';
import { useI18n } from '@/composables/useI18n';
import { siteCopyState } from '@/services/dataService';
import BrandLogo from '@/components/ui/BrandLogo.vue';

const { currentLang, toggleLanguage, t } = useI18n();
const route = useRoute();
const isHome = computed(() => route.path === '/');
const isMobileMenuOpen = ref(false);
const isScrolled = ref(false);

function switchDrawerLanguage() {
  toggleLanguage();
  isMobileMenuOpen.value = false;
}

const navLinks = computed(() => [
  { path: '/', label: t(siteCopyState.nav.home) },
  { path: '/about', label: t(siteCopyState.nav.about) },
  { path: '/services', label: t(siteCopyState.nav.services) },
  { path: '/projects', label: t(siteCopyState.nav.projects) },
  { path: '/contact', label: t(siteCopyState.nav.contact) }
]);

function handleScroll() {
  isScrolled.value = window.scrollY > 50;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
