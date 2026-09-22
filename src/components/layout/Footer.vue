<template>
  <footer class="bg-slate-950 border-t border-slate-800/80 text-slate-400 pt-16 pb-8 relative overflow-hidden">
    <!-- Subtle Background Glow -->
    <div class="hero-glow bg-sky-600/10 w-96 h-96 -bottom-48 -left-48"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">

        <!-- Company Info & Tagline -->
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

          <!-- Social Links -->
          <div class="flex items-center gap-3 pt-2">
            <a
              v-if="companyState.socials.linkedin"
              :href="companyState.socials.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-500/50 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label="LinkedIn"
            >
              <Linkedin class="w-4 h-4" />
            </a>
            <a
              v-if="companyState.socials.github"
              :href="companyState.socials.github"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-500/50 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label="GitHub"
            >
              <Github class="w-4 h-4" />
            </a>
            <a
              v-if="companyState.socials.x"
              :href="companyState.socials.x"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-500/50 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label="X (Twitter)"
            >
              <Twitter class="w-4 h-4" />
            </a>
            <a
              v-if="companyState.socials.facebook"
              :href="companyState.socials.facebook"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-500/50 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label="Facebook"
            >
              <Facebook class="w-4 h-4" />
            </a>
          </div>
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

        <!-- Services Links -->
        <div class="space-y-4">
          <h3 class="text-white font-semibold text-base">{{ t(siteCopyState.footer.services) }}</h3>
          <ul class="space-y-2.5 text-sm">
            <li v-for="service in servicesState.slice(0, 5)" :key="service.id">
              <router-link :to="`/services/${service.id}`" class="hover:text-sky-400 transition-colors line-clamp-1">
                {{ t(service.title) }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Info & Controls -->
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
          </div>

          <!-- Footer Language Switcher -->
          <div class="pt-2">
            <button
              @click="toggleLanguage"
              class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-sky-400 hover:border-sky-500/50 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <Globe class="w-3.5 h-3.5 text-sky-400" />
              <span>{{ currentLang === 'ar' ? 'English (RTL/LTR)' : 'العربية (RTL/LTR)' }}</span>
            </button>
          </div>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <p>{{ t(siteCopyState.footer.rights) }}</p>

        <!-- Back to Top -->
        <button
          @click="scrollToTop"
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          <ArrowUp class="w-3.5 h-3.5 text-sky-400" />
          <span>{{ t(siteCopyState.common.backToTop) }}</span>
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Linkedin, Github, Twitter, Facebook, MapPin, Mail, Globe, ArrowUp } from 'lucide-vue-next';
import { useI18n } from '@/composables/useI18n';
import { siteCopyState, companyState, servicesState } from '@/services/dataService';

const { currentLang, toggleLanguage, t } = useI18n();

const navLinks = computed(() => [
  { path: '/', label: t(siteCopyState.nav.home) },
  { path: '/about', label: t(siteCopyState.nav.about) },
  { path: '/services', label: t(siteCopyState.nav.services) },
  { path: '/projects', label: t(siteCopyState.nav.projects) },
  { path: '/contact', label: t(siteCopyState.nav.contact) }
]);

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>
