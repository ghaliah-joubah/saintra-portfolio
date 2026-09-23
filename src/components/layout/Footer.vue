<template>
  <footer class="bg-navy-900 border-t border-navy-800 text-slate-400 pt-16 pb-8 relative overflow-hidden mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-navy-800">

        <!-- Company Info -->
        <div class="lg:col-span-2 space-y-4">
          <router-link to="/" class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-sky-500/20">
              {{ currentLang === 'ar' ? 'س' : 'S' }}
            </div>
            <div class="flex flex-col">
              <span class="font-bold text-xl tracking-wider text-white">{{ t(companyState.shortName) }}</span>
              <span class="text-[10px] text-slate-400">{{ t(companyState.name) }}</span>
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
              <svg class="w-4 h-4 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.2 1.7 6L.2 24l6.4-1.7a11.8 11.8 0 0 0 5.5 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.3-6.2-3.5-8.4ZM12.1 21.7a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.8 9.8 0 1 1 8.3 4.6Zm5.4-7.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.2-.7l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.8 1.2 3.1 1.4 3.3c.2.2 2.4 3.7 5.9 5.2.8.3 1.4.5 1.9.6.8.1 1.5.1 2.1 0 .6-.1 1.8-.8 2.1-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.6-.4Z"/></svg>
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
              :aria-label="currentLang === 'ar' ? 'لينكدإن' : 'LinkedIn'"
            >
              <Linkedin class="w-4 h-4" />
            </a>
            <a
              v-if="companyState.socials.github"
              :href="companyState.socials.github"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-lg bg-navy-800 border border-navy-700 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-500/50 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
              :aria-label="currentLang === 'ar' ? 'غيت هب' : 'GitHub'"
            >
              <Github class="w-4 h-4" />
            </a>
            <a
              v-if="companyState.socials.x"
              :href="companyState.socials.x"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-lg bg-navy-800 border border-navy-700 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-500/50 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
              :aria-label="currentLang === 'ar' ? 'إكس' : 'X'"
            >
              <Twitter class="w-4 h-4" />
            </a>
            <a
              v-if="companyState.socials.facebook"
              :href="companyState.socials.facebook"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-lg bg-navy-800 border border-navy-700 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-500/50 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
              :aria-label="currentLang === 'ar' ? 'فيسبوك' : 'Facebook'"
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

</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Linkedin, Github, Twitter, Facebook, MapPin, Mail, Globe } from 'lucide-vue-next';
import { useI18n } from '@/composables/useI18n';
import { siteCopyState, companyState } from '@/services/dataService';

const { currentLang, toggleLanguage, t } = useI18n();

const navLinks = computed(() => [
  { path: '/', label: t(siteCopyState.nav.home) },
  { path: '/about', label: t(siteCopyState.nav.about) },
  { path: '/services', label: t(siteCopyState.nav.services) },
  { path: '/projects', label: t(siteCopyState.nav.projects) },
  { path: '/contact', label: t(siteCopyState.nav.contact) }
]);

</script>
