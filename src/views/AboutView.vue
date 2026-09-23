<template>
  <div class="space-y-20 py-12 pb-20">

    <!-- Header Banner -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 pt-10">
      <h1 class="text-4xl sm:text-6xl font-extrabold text-navy-900 tracking-tight">
        {{ t(siteCopyState.about.title) }}
      </h1>
      <p class="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
        {{ t(companyState.tagline) }}
      </p>
    </section>

    <!-- Company Story Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-[3rem] p-8 sm:p-12 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7 space-y-6">
          <div class="inline-flex items-center gap-2 text-sky-600 font-bold text-sm">
            <Sparkles class="w-4 h-4" />
            <span>{{ t(siteCopyState.about.storyTitle) }}</span>
          </div>
          <h2 class="text-3xl font-extrabold text-navy-900 leading-snug">
            {{ t(companyState.name) }}
          </h2>
          <p class="text-slate-600 text-base sm:text-lg leading-relaxed">
            {{ t(companyState.aboutStory) }}
          </p>

          <div class="pt-6 border-t border-slate-100">
            <div>
              <div class="text-xs text-slate-500 font-bold uppercase tracking-wider">{{ t(siteCopyState.about.establishedLabel) }}</div>
              <div class="text-2xl font-extrabold text-navy-900 mt-1">{{ companyState.establishedYear }}</div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 relative">
          <div class="relative rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
            <img
              src="/images/software-team.webp"
              :alt="t(siteCopyState.about.teamImageAlt)"
              loading="lazy"
              class="w-full h-96 object-cover"
            />
            <span class="absolute bottom-3 end-3 rounded-full bg-navy-900/80 px-3 py-1 text-xs text-white">{{ t(siteCopyState.about.imageCaption) }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision Cards (Inline titles) -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div class="bg-white p-10 rounded-3xl border border-slate-200 space-y-4 shadow-sm group hover:border-sky-300 transition-colors">
          <h3 class="text-2xl font-bold text-navy-900 flex items-center gap-3">
            <Target class="w-8 h-8 text-sky-500 group-hover:scale-110 transition-transform" />
            <span>{{ t(siteCopyState.about.missionTitle) }}</span>
          </h3>
          <p class="text-slate-600 text-base leading-relaxed pl-11 rtl:pr-11 rtl:pl-0">
            {{ t(companyState.mission) }}
          </p>
        </div>

        <div class="bg-white p-10 rounded-3xl border border-slate-200 space-y-4 shadow-sm group hover:border-sky-300 transition-colors">
          <h3 class="text-2xl font-bold text-navy-900 flex items-center gap-3">
            <Eye class="w-8 h-8 text-sky-500 group-hover:scale-110 transition-transform" />
            <span>{{ t(siteCopyState.about.visionTitle) }}</span>
          </h3>
          <p class="text-slate-600 text-base leading-relaxed pl-11 rtl:pr-11 rtl:pl-0">
            {{ t(companyState.vision) }}
          </p>
        </div>

      </div>
    </section>

    <!-- Animated Statistics Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div class="text-center space-y-3">
        <h2 class="text-3xl font-extrabold text-navy-900">
          {{ t(siteCopyState.about.statsTitle) }}
        </h2>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          v-for="stat in companyState.stats"
          :key="stat.id"
          :stat="stat"
        />
      </div>
    </section>

    <!-- Contact Banner CTA -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="rounded-3xl p-10 sm:p-16 bg-navy-900 text-center space-y-6 shadow-xl relative overflow-hidden">
        <div class="absolute w-[400px] h-[400px] bg-sky-500/20 rounded-full blur-[80px] -bottom-20 -left-20"></div>

        <h2 class="text-3xl font-extrabold text-white relative z-10">
          {{ t(siteCopyState.home.ctaTitle) }}
        </h2>
        <p class="text-sky-100 max-w-xl mx-auto text-base relative z-10">
          {{ t(siteCopyState.home.ctaSubtitle) }}
        </p>
        <div class="pt-4 relative z-10">
          <router-link
            to="/contact"
            class="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-sky-500 text-white shadow-lg shadow-sky-500/30 hover:-translate-y-1 active:translate-y-0 transition-transform"
          >
            <span>{{ t(siteCopyState.buttons.contactUs) }}</span>
            <ArrowRight v-if="!isRtl" class="w-5 h-5" />
            <ArrowLeft v-else class="w-5 h-5" />
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { Sparkles, Target, Eye, ArrowRight, ArrowLeft } from 'lucide-vue-next';
import { useI18n } from '@/composables/useI18n';
import { siteCopyState, companyState } from '@/services/dataService';
import StatCard from '@/components/ui/StatCard.vue';

const { isRtl, t } = useI18n();
</script>
