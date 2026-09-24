<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="contact-cta section-radius bg-navy-900 text-center relative overflow-hidden shadow-xl">
      <div class="absolute inset-0 opacity-[0.07] bg-[url('/brand/pattern.png')] bg-[length:380px_380px] pointer-events-none" aria-hidden="true"></div>
      <div class="absolute w-[400px] h-[400px] bg-sky-500/20 rounded-full blur-[80px] -bottom-20 -left-20 pointer-events-none"></div>
      <div class="contact-cta-content relative z-10">
        <h2 class="contact-cta-heading font-extrabold text-white max-w-3xl mx-auto">{{ t(siteCopyState.home.ctaTitle) }}</h2>
        <p class="text-sky-100 text-base sm:text-lg max-w-2xl mx-auto">{{ t(siteCopyState.home.ctaSubtitle) }}</p>
        <router-link to="/contact" class="contact-cta-button inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-xl font-bold bg-sky-500 text-white shadow-lg shadow-sky-500/30 hover:-translate-y-1 active:translate-y-0 transition-transform">
          <span>{{ t(siteCopyState.buttons.contactUs) }}</span>
          <ArrowRight v-if="!isRtl" class="w-5 h-5 shrink-0" />
          <ArrowLeft v-else class="w-5 h-5 shrink-0" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, ArrowLeft } from 'lucide-vue-next';
import { useI18n } from '@/composables/useI18n';
import { siteCopyState } from '@/services/dataService';
const { isRtl, t } = useI18n();
</script>
