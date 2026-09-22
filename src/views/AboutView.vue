<template>
  <div class="space-y-20 py-12 pb-20">

    <!-- Header Banner -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-sky-500/30 text-sky-300 text-xs font-semibold">
        <Building2 class="w-4 h-4 text-sky-400" />
        <span>{{ t(siteCopy.about.subtitle) }}</span>
      </div>
      <h1 class="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
        {{ t(siteCopy.about.title) }}
      </h1>
      <p class="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
        {{ t(companyData.tagline) }}
      </p>
    </section>

    <!-- Company Story Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div class="lg:col-span-7 space-y-6">
          <div class="inline-flex items-center gap-2 text-sky-400 font-bold text-sm">
            <Sparkles class="w-4 h-4" />
            <span>{{ t(siteCopy.about.storyTitle) }}</span>
          </div>
          <h2 class="text-3xl font-extrabold text-white leading-snug">
            {{ t(companyData.name) }}
          </h2>
          <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
            {{ t(companyData.aboutStory) }}
          </p>

          <div class="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
            <div>
              <div class="text-xs text-slate-400 font-semibold">سنة التأسيس / Established</div>
              <div class="text-xl font-bold text-white mt-1">{{ companyData.establishedYear }}</div>
            </div>
            <div>
              <div class="text-xs text-slate-400 font-semibold">المقر الرئيسي / HQ</div>
              <div class="text-xl font-bold text-white mt-1">{{ t(companyData.headquarters) }}</div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 relative">
          <div class="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <img
              src="/images/photo_2026-09-22_14-40-58.jpg"
              alt="SAINTRA Headquarters"
              class="w-full h-80 object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision Cards -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

        <!-- Mission Card -->
        <div class="glass-card p-8 rounded-3xl border border-slate-800 space-y-4 bg-slate-900/40 relative overflow-hidden">
          <div class="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
            <Target class="w-6 h-6" />
          </div>
          <h3 class="text-2xl font-bold text-white">
            {{ t(siteCopy.about.missionTitle) }}
          </h3>
          <p class="text-slate-300 text-base leading-relaxed">
            {{ t(companyData.mission) }}
          </p>
        </div>

        <!-- Vision Card -->
        <div class="glass-card p-8 rounded-3xl border border-slate-800 space-y-4 bg-slate-900/40 relative overflow-hidden">
          <div class="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
            <Eye class="w-6 h-6" />
          </div>
          <h3 class="text-2xl font-bold text-white">
            {{ t(siteCopy.about.visionTitle) }}
          </h3>
          <p class="text-slate-300 text-base leading-relaxed">
            {{ t(companyData.vision) }}
          </p>
        </div>

      </div>
    </section>

    <!-- Animated Statistics Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div class="text-center space-y-2">
        <h2 class="text-3xl font-extrabold text-white">
          {{ t(siteCopy.about.statsTitle) }}
        </h2>
        <p class="text-slate-400 text-sm">
          مؤشرات النجاح والثقة التي حققناها مع شركائنا
        </p>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          v-for="stat in companyData.stats"
          :key="stat.id"
          :stat="stat"
        />
      </div>
    </section>

    <!-- Core Values Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div class="text-center space-y-2">
        <h2 class="text-3xl font-extrabold text-white">
          {{ t(siteCopy.about.valuesTitle) }}
        </h2>
        <p class="text-slate-400 text-sm">
          المبادئ التي تقود كل قرار وهندسة نضعها في كودنا
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(val, idx) in companyData.values"
          :key="idx"
          class="glass-card p-6 rounded-2xl border border-slate-800 space-y-3"
        >
          <div class="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
            <CheckCircle2 class="w-5 h-5" />
          </div>
          <h3 class="text-lg font-bold text-white">
            {{ t(val.title) }}
          </h3>
          <p class="text-xs text-slate-300 leading-relaxed">
            {{ t(val.description) }}
          </p>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div class="text-center space-y-2">
        <h2 class="text-3xl font-extrabold text-white">
          {{ t(siteCopy.about.techTitle) }}
        </h2>
        <p class="text-slate-400 text-sm">
          أحدث التقنيات وأطر العمل التي نستخدمها لبناء برمجيات آمنة وسريعة
        </p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <div
          v-for="(tech, idx) in companyData.technologies"
          :key="idx"
          class="glass-card p-4 rounded-xl border border-slate-800 flex items-center gap-3"
        >
          <div class="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 font-bold text-xs">
            &lt;/&gt;
          </div>
          <div>
            <div class="text-sm font-bold text-white">{{ tech.name }}</div>
            <div class="text-[10px] text-slate-400">{{ tech.category }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Locations Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div class="text-center space-y-2">
        <h2 class="text-3xl font-extrabold text-white">
          {{ t(siteCopy.about.locationsTitle) }}
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <div
          v-for="(branch, idx) in companyData.branches"
          :key="idx"
          class="glass-card p-6 rounded-2xl border border-slate-800 flex items-center gap-4"
        >
          <div class="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
            <MapPin class="w-6 h-6" />
          </div>
          <div>
            <div class="text-xs text-slate-400 font-semibold">فرع / Branch</div>
            <div class="text-base font-bold text-white">{{ t(branch) }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Banner CTA -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="glass-card rounded-3xl p-8 sm:p-10 border border-sky-500/30 text-center space-y-6">
        <h2 class="text-3xl font-extrabold text-white">
          دعنا نساعدك في بناء خطتك البرمجية التالية
        </h2>
        <p class="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
          تواصل معنا اليوم للحديث عن تفاصيل مشروعك واستشارة مهندسينا.
        </p>
        <div>
          <router-link
            to="/contact"
            class="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25 hover:scale-105 transition-transform"
          >
            <span>{{ t(siteCopy.buttons.contactUs) }}</span>
            <ArrowRight v-if="!isRtl" class="w-5 h-5" />
            <ArrowLeft v-else class="w-5 h-5" />
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { Building2, Sparkles, Target, Eye, CheckCircle2, MapPin, ArrowRight, ArrowLeft } from 'lucide-vue-next';
import { useI18n } from '@/composables/useI18n';
import { siteCopy } from '@/data/siteCopy';
import { companyData } from '@/data/company';
import StatCard from '@/components/ui/StatCard.vue';

const { isRtl, t } = useI18n();
</script>
