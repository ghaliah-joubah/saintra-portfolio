<template>
  <footer class="bg-navy-900 border-t border-navy-800 text-slate-400 pt-16 pb-8 relative overflow-hidden mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-navy-800">

        <!-- Company Info -->
        <div class="lg:col-span-2 space-y-4">
          <router-link to="/" class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-sky-500/20">
              S
            </div>
            <div class="flex flex-col">
              <span class="font-bold text-xl tracking-wider text-white">{{ t(companyState.shortName) }}</span>
              <span class="text-[10px] text-slate-400">سيقما تكنولوجي</span>
            </div>
          </router-link>

          <p class="text-sm leading-relaxed text-slate-300 max-w-sm">
            {{ t(companyState.aboutStory) }}
          </p>
        </div>

        <!-- Quick Links -->
        <div class="space-y-4">
          <h3 class="text-white font-semibold text-base">{{ t(siteCopyState.footer.quickLinks) }}</h3>
          <ul class="space-y-2.5 text-sm">
            <li v-for="link in navLinks" :key="link.path">
              <router-link :to="link.path" class="hover:text-sky-400 transition-colors">
                {{ link.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Info & Social -->
        <div class="space-y-4">
          <h3 class="text-white font-semibold text-base">{{ t(siteCopyState.footer.contactInfo) }}</h3>

          <div class="space-y-3 text-sm text-slate-300">
            <div class="flex items-start gap-2.5">
              <MapPin class="w-4 h-4 text-sky-400 shrink-0 mt-1" />
              <span>{{ t(companyState.contact.address) }}</span>
            </div>
            <div v-if="companyState.contact.email" class="flex items-center gap-2.5">
              <Mail class="w-4 h-4 text-sky-400 shrink-0" />
              <a :href="`mailto:${companyState.contact.email}`" class="hover:text-sky-400 transition-colors">
                {{ companyState.contact.email }}
              </a>
            </div>
            <div v-if="companyState.contact.whatsapp" class="flex items-center gap-2.5">
              <MessageCircle class="w-4 h-4 text-emerald-400 shrink-0" />
              <a :href="`https://wa.me/${companyState.contact.whatsapp.replace(/[^0-9]/g, '')}`" target="_blank" rel="noopener noreferrer" class="hover:text-emerald-400 transition-colors dir-ltr">
                {{ companyState.contact.whatsapp }}
              </a>
            </div>
          </div>

          <!-- Social Links Moved Here -->
          <div class="flex items-center gap-3 pt-4">
            <a
              v-if="companyState.socials.linkedin"
              :href="companyState.socials.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-lg bg-navy-800 border border-navy-700 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-500/50 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label="LinkedIn"
            >
              <Linkedin class="w-4 h-4" />
            </a>
            <a
              v-if="companyState.socials.github"
              :href="companyState.socials.github"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-lg bg-navy-800 border border-navy-700 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-500/50 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label="GitHub"
            >
              <Github class="w-4 h-4" />
            </a>
            <a
              v-if="companyState.socials.x"
              :href="companyState.socials.x"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-lg bg-navy-800 border border-navy-700 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-500/50 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label="X (Twitter)"
            >
              <Twitter class="w-4 h-4" />
            </a>
            <a
              v-if="companyState.socials.facebook"
              :href="companyState.socials.facebook"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-lg bg-navy-800 border border-navy-700 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-500/50 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label="Facebook"
            >
              <Facebook class="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <p>{{ t(siteCopyState.footer.rights) }}</p>

        <div class="flex items-center gap-4">
          <!-- Footer Language Switcher -->
          <button
            @click="toggleLanguage"
            class="flex items-center gap-1.5 font-bold hover:text-sky-400 transition-colors focus:outline-none"
            :aria-label="siteCopyState.common.languageSwitch[currentLang === 'ar' ? 'en' : 'ar']"
          >
            <Globe class="w-4 h-4" />
            <span>{{ currentLang === 'ar' ? 'EN' : 'AR' }}</span>
          </button>
        </div>
      </div>
    </div>
  </footer>

  <!-- Global Floating Back To Top Button -->
  <button
    @click="scrollToTop"
    class="fixed bottom-6 z-40 p-3 rounded-full bg-navy-900 text-white shadow-xl hover:bg-sky-600 hover:-translate-y-1 transition-all focus:outline-none focus:ring-2 focus:ring-sky-500"
    :class="[
      isRtl ? 'left-6' : 'right-6',
      showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
    ]"
    aria-label="Back to top"
  >
    <ArrowUp class="w-5 h-5" />
  </button>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { Linkedin, Github, Twitter, Facebook, MapPin, Mail, MessageCircle, Globe, ArrowUp } from 'lucide-vue-next';
import { useI18n } from '@/composables/useI18n';
import { siteCopyState, companyState } from '@/services/dataService';

const { currentLang, toggleLanguage, t, isRtl } = useI18n();

const navLinks = computed(() => [
  { path: '/', label: t(siteCopyState.nav.home) },
  { path: '/about', label: t(siteCopyState.nav.about) },
  { path: '/services', label: t(siteCopyState.nav.services) },
  { path: '/projects', label: t(siteCopyState.nav.projects) },
  { path: '/contact', label: t(siteCopyState.nav.contact) }
]);

const showBackToTop = ref(false);

function handleScroll() {
  showBackToTop.value = window.scrollY > 300;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
