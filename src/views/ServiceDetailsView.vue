<template>
  <div v-if="service" class="space-y-16 py-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div class="space-y-4">
      <router-link
        to="/services"
        class="inline-flex items-center gap-2 text-sm text-sky-400 font-semibold hover:underline"
      >
        <ArrowLeft v-if="!isRtl" class="w-4 h-4" />
        <ArrowRight v-else class="w-4 h-4" />
        <span>{{ t(siteCopyState.nav.services) }}</span>
      </router-link>

      <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-2">
        <div class="space-y-3 max-w-3xl">
          <div class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-300 border border-sky-500/20">
            {{ t(service.category) }}
          </div>
          <h1 class="text-3xl sm:text-5xl font-extrabold text-white">
            {{ t(service.title) }}
          </h1>
          <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
            {{ t(service.shortDescription) }}
          </p>
        </div>

        <router-link
          to="/contact"
          class="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25 hover:scale-105 transition-transform shrink-0"
        >
          <span>{{ t(siteCopyState.buttons.contactUs) }}</span>
          <ArrowRight v-if="!isRtl" class="w-5 h-5" />
          <ArrowLeft v-else class="w-5 h-5" />
        </router-link>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div class="lg:col-span-7 space-y-6">
        <div class="glass-card p-8 rounded-3xl border border-slate-800 space-y-4">
          <h2 class="text-2xl font-bold text-white">نظرة عامة عن الخدمة / Overview</h2>
          <p class="text-slate-300 text-base leading-relaxed whitespace-pre-line">
            {{ t(service.fullDescription) }}
          </p>
        </div>

        <div class="glass-card p-8 rounded-3xl border border-slate-800 space-y-6">
          <h2 class="text-2xl font-bold text-white flex items-center gap-3">
            <CheckCircle2 class="w-6 h-6 text-sky-400" />
            <span>{{ t(siteCopyState.serviceDetailsPage.whatsIncludedTitle) }}</span>
          </h2>

          <div class="grid grid-cols-1 gap-3">
            <div
              v-for="(item, idx) in service.whatsIncluded"
              :key="idx"
              class="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-3 text-sm text-slate-200"
            >
              <div class="w-2 h-2 rounded-full bg-sky-400 shrink-0"></div>
              <span>{{ t(item) }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:col-span-5 space-y-6">
        <div v-if="service.image" class="rounded-3xl overflow-hidden border border-slate-800 glass-card">
          <img
            :src="service.image"
            :alt="t(service.title)"
            class="w-full h-64 object-cover"
          />
        </div>

        <div v-if="service.videoUrl" class="glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
          <h3 class="text-lg font-bold text-white flex items-center gap-2">
            <Video class="w-5 h-5 text-sky-400" />
            <span>{{ t(siteCopyState.serviceDetailsPage.videoTitle) }}</span>
          </h3>

          <div class="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
            <iframe
              :src="service.videoUrl"
              class="absolute inset-0 w-full h-full"
              title="Service Overview Video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>

    <div v-if="service.ourProcess && service.ourProcess.length > 0" class="space-y-8">
      <div class="text-center space-y-2">
        <h2 class="text-3xl font-extrabold text-white">
          {{ t(siteCopyState.serviceDetailsPage.ourProcessTitle) }}
        </h2>
        <p class="text-slate-400 text-sm">خطوات منهجية مدروسة تضمن جودة المخرجات</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="step in service.ourProcess"
          :key="step.stepNumber"
          class="glass-card p-6 rounded-2xl border border-slate-800 space-y-3 relative"
        >
          <div class="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 font-extrabold flex items-center justify-center text-lg">
            0{{ step.stepNumber }}
          </div>
          <h3 class="text-lg font-bold text-white">
            {{ t(step.title) }}
          </h3>
          <p class="text-xs text-slate-300 leading-relaxed">
            {{ t(step.description) }}
          </p>
        </div>
      </div>
    </div>

    <div v-if="relatedProjects.length > 0" class="space-y-8 pt-8 border-t border-slate-800">
      <div class="space-y-2">
        <h2 class="text-3xl font-extrabold text-white">
          {{ t(siteCopyState.serviceDetailsPage.relatedProjectsTitle) }}
        </h2>
        <p class="text-slate-400 text-sm">أمثلة لمشاريع تم تطبيق هذه الخدمة فيها</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="project in relatedProjects"
          :key="project.id"
          class="glass-card glass-card-hover rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between"
        >
          <div class="relative h-44 bg-slate-900">
            <img :src="project.coverImage" :alt="t(project.title)" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 opacity-80"></div>
          </div>
          <div class="p-6 space-y-3">
            <h3 class="text-lg font-bold text-white">{{ t(project.title) }}</h3>
            <p class="text-xs text-slate-300 line-clamp-2">{{ t(project.shortDescription) }}</p>
            <router-link
              :to="`/projects/${project.id}`"
              class="inline-flex items-center gap-2 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors pt-2 border-t border-slate-800"
            >
              <span>{{ t(siteCopyState.buttons.details) }}</span>
              <ArrowRight v-if="!isRtl" class="w-3.5 h-3.5" />
              <ArrowLeft v-else class="w-3.5 h-3.5" />
            </router-link>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div v-else class="py-24 text-center space-y-6 max-w-md mx-auto px-4">
    <AlertCircle class="w-16 h-16 text-rose-500 mx-auto" />
    <h1 class="text-2xl font-bold text-white">
      {{ t(siteCopyState.serviceDetailsPage.notFound) }}
    </h1>
    <router-link
      to="/services"
      class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 text-white font-semibold text-sm"
    >
      <span>{{ t(siteCopyState.buttons.viewAllServices) }}</span>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { ArrowRight, ArrowLeft, CheckCircle2, Video, AlertCircle } from 'lucide-vue-next';
import { useI18n } from '@/composables/useI18n';
import { siteCopyState, servicesState, projectsState } from '@/services/dataService';

const route = useRoute();
const { isRtl, t } = useI18n();

const service = computed(() => {
  return servicesState.find((s) => s.id === route.params.id);
});

const relatedProjects = computed(() => {
  if (!service.value) return [];
  return projectsState.filter((p) => p.serviceIds.includes(service.value!.id));
});
</script>
