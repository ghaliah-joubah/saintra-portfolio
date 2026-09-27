<template>
  <div class="space-y-20 pt-28 pb-20">

    <!-- Header Banner -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
      <h1 class="text-4xl sm:text-6xl font-extrabold text-navy-900 tracking-tight">
        {{ t(siteCopyState.about.title) }}
      </h1>
      <p class="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
        {{ t(companyState.tagline) }}
      </p>
    </section>

    <!-- Company Story Section -->
    <section id="story" class="scroll-mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white section-radius p-5 sm:p-8 lg:p-12 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-12 items-center">
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

          <div class="pt-6 border-t border-slate-100 grid grid-cols-2 gap-0 min-w-0">
            <div class="min-w-0 pe-2 sm:pe-5">
              <div class="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-normal sm:tracking-wider break-words">{{ t(siteCopyState.about.establishedLabel) }}</div>
              <div class="text-xl sm:text-2xl font-extrabold text-navy-900 mt-1">{{ companyState.establishedYear }}</div>
            </div>
            <div class="min-w-0 border-s border-slate-100 ps-3 sm:ps-6">
              <div class="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-normal sm:tracking-wider break-words">{{ t(siteCopyState.contactPage.addressLabel) }}</div>
              <div class="text-xl sm:text-2xl font-extrabold text-navy-900 mt-1">{{ t(companyState.headquarters) }}</div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 relative">
          <div class="relative section-radius-inner overflow-hidden border border-slate-200 shadow-lg">
            <img
              src="/images/software-team.webp"
              :alt="t(siteCopyState.about.teamImageAlt)"
              loading="lazy"
              class="w-full aspect-[16/10] lg:aspect-auto lg:h-96 object-cover object-center"
            />
            <span class="absolute bottom-3 end-3 rounded-full bg-navy-900/80 px-3 py-1 text-xs text-white">{{ t(siteCopyState.about.imageCaption) }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision Cards (Inline titles) -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mission-grid">

        <div id="mission" class="scroll-mt-28 bg-white p-6 lg:p-10 section-radius-inner border border-slate-200 space-y-4 shadow-sm group hover:border-sky-300 transition-colors h-full">
          <h3 class="text-2xl font-bold text-navy-900 flex items-center gap-3">
            <Target class="w-8 h-8 text-sky-500 group-hover:scale-110 transition-transform" />
            <span>{{ t(siteCopyState.about.missionTitle) }}</span>
          </h3>
          <p class="text-slate-600 text-base leading-relaxed pl-11 rtl:pr-11 rtl:pl-0">
            {{ t(companyState.mission) }}
          </p>
        </div>

        <div id="vision" class="scroll-mt-28 bg-white p-6 lg:p-10 section-radius-inner border border-slate-200 space-y-4 shadow-sm group hover:border-sky-300 transition-colors h-full">
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

      <div class="stats-grid">
        <StatCard
          v-for="stat in companyState.stats"
          :key="stat.id"
          :stat="stat"
        />
      </div>
    </section>

    <!-- Contact Banner CTA -->
    <ContactCta />

  </div>
</template>

<script setup lang="ts">
import { Sparkles, Target, Eye } from 'lucide-vue-next';
import { useI18n } from '@/composables/useI18n';
import { siteCopyState, companyState } from '@/services/dataService';
import StatCard from '@/components/ui/StatCard.vue';
import ContactCta from '@/components/ui/ContactCta.vue';

const { t } = useI18n();
</script>
