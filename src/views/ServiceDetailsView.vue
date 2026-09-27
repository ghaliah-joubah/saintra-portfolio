<template>
  <div v-if="service" class="space-y-16 pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <section class="section-radius border border-sky-100 bg-gradient-to-br from-white via-sky-50 to-white p-6 sm:p-10 lg:p-12 shadow-sm space-y-8">
      <router-link
        to="/services"
        class="inline-flex items-center gap-2 text-sm text-sky-600 font-bold hover:underline"
      >
        <ArrowLeft v-if="!isRtl" class="w-4 h-4" />
        <ArrowRight v-else class="w-4 h-4" />
        <span>{{ t(siteCopyState.nav.services) }}</span>
      </router-link>

      <div class="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,.8fr)] gap-8 lg:gap-12 items-center">
        <div class="space-y-6 min-w-0">
          <div class="inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-sky-100 text-sky-700 uppercase tracking-wider shadow-sm">
            {{ t(service.category) }}
          </div>
          <h1 class="text-4xl sm:text-6xl font-extrabold text-navy-900 tracking-tight">
            {{ t(service.title) }}
          </h1>
          <p class="text-lg leading-relaxed text-slate-600">{{ t(service.shortDescription) }}</p>
          <div class="space-y-3 pt-2">
            <h2 class="text-2xl font-bold text-navy-900">{{ t(siteCopyState.serviceDetailsPage.overviewTitle) }}</h2>
            <p class="text-slate-600 text-base sm:text-lg leading-relaxed whitespace-pre-line font-medium">{{ t(service.fullDescription) }}</p>
          </div>
          <router-link
            to="/contact"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold bg-sky-500 text-white shadow-lg shadow-sky-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-transform"
          >
            <span>{{ t(siteCopyState.buttons.contactUs) }}</span>
            <ArrowRight v-if="!isRtl" class="w-5 h-5" />
            <ArrowLeft v-else class="w-5 h-5" />
          </router-link>
        </div>

        <div v-if="service.image" class="section-radius-inner overflow-hidden border border-sky-100 bg-white shadow-md">
          <img :src="service.image" :alt="t(service.title)" class="w-full h-64 sm:h-80 lg:h-[360px] object-contain" />
        </div>
      </div>
    </section>

    <!-- Reordered Section 2: What's Included (2 Columns) -->
    <div class="bg-white p-6 sm:p-10 lg:p-16 section-radius border border-slate-200 shadow-sm space-y-8">
      <h2 class="text-3xl font-extrabold text-navy-900 flex items-center gap-3">
        <CheckCircle2 class="w-8 h-8 text-sky-500" />
        <span>{{ t(siteCopyState.serviceDetailsPage.whatsIncludedTitle) }}</span>
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          v-for="(item, idx) in service.whatsIncluded"
          :key="idx"
          class="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-sky-50 hover:border-sky-200 transition-colors flex items-start gap-4"
        >
          <div class="service-included-bullet w-3 h-3 rounded-full bg-sky-500 shrink-0 mt-1"></div>
          <span class="text-base font-bold text-navy-900 leading-relaxed">{{ t(item) }}</span>
        </div>
      </div>
    </div>

    <!-- Reordered Section 3: YouTube Video -->
    <div v-if="service.videoUrl" class="bg-white p-6 sm:p-10 section-radius border border-slate-200 shadow-sm space-y-6 max-w-4xl mx-auto w-full">
      <h3 class="text-2xl font-bold text-navy-900 flex items-center gap-3 px-4">
        <Video class="w-7 h-7 text-sky-500" />
        <span>{{ t(siteCopyState.serviceDetailsPage.videoTitle) }}</span>
      </h3>

      <div class="relative w-full aspect-video section-radius-inner overflow-hidden border border-slate-200 bg-slate-100 shadow-inner">
        <iframe
          :src="service.videoUrl"
          class="absolute inset-0 w-full h-full"
          :title="t(siteCopyState.serviceDetailsPage.videoTitle)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
    </div>

    <!-- Our Process Section (No numbers, interactive cards) -->
    <div v-if="service.ourProcess && service.ourProcess.length > 0" class="space-y-10">
      <div class="text-center space-y-3">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-navy-900">
          {{ t(siteCopyState.serviceDetailsPage.ourProcessTitle) }}
        </h2>
        <p class="text-slate-500 text-base">{{ t(siteCopyState.serviceDetailsPage.processDescription) }}</p>
      </div>

      <div class="methodology-grid">
        <div
          v-for="step in service.ourProcess"
          :key="step.stepNumber"
          class="bg-white p-6 lg:p-8 section-radius-inner border border-slate-200 space-y-4 shadow-sm hover:shadow-md hover:border-sky-200 hover:-translate-y-1 transition-all h-full min-w-0"
        >
          <h3 class="text-xl font-bold text-navy-900">
            {{ t(step.title) }}
          </h3>
          <p class="text-sm text-slate-600 leading-relaxed font-medium">
            {{ t(step.description) }}
          </p>
        </div>
      </div>
    </div>

    <!-- Related Projects Section -->
    <div v-if="relatedProjects.length > 0" class="space-y-10 pt-10 border-t border-slate-200">
      <div class="space-y-3">
        <h2 class="text-3xl font-extrabold text-navy-900">
          {{ t(siteCopyState.serviceDetailsPage.relatedProjectsTitle) }}
        </h2>
        <p class="text-slate-500 text-base">{{ t(siteCopyState.serviceDetailsPage.relatedProjectsDescription) }}</p>
      </div>

      <div class="project-card-grid related-projects-grid">
        <ProjectCard v-for="project in paginatedRelatedProjects" :key="project.id" :project="project" />
      </div>
      <div v-if="relatedTotalPages > 1" class="flex items-center justify-center gap-6 pt-6 border-t border-slate-200">
        <button type="button" :disabled="relatedPage === 1" :aria-label="t(siteCopyState.common.previousPage)" class="p-2 rounded-full bg-white border border-slate-200 text-slate-500 disabled:opacity-40 hover:text-sky-600 hover:border-sky-200 hover:shadow-sm transition-all" @click="relatedPage--">
          <ArrowLeft v-if="!isRtl" class="w-5 h-5" /><ArrowRight v-else class="w-5 h-5" />
        </button>
        <div class="flex items-center gap-2">
          <span v-for="page in relatedTotalPages" :key="page" class="text-sm font-bold w-8 h-8 flex items-center justify-center rounded-full transition-colors" :class="relatedPage === page ? 'bg-sky-100 text-sky-700' : 'text-slate-500'">{{ page }}</span>
        </div>
        <button type="button" :disabled="relatedPage === relatedTotalPages" :aria-label="t(siteCopyState.common.nextPage)" class="p-2 rounded-full bg-white border border-slate-200 text-slate-500 disabled:opacity-40 hover:text-sky-600 hover:border-sky-200 hover:shadow-sm transition-all" @click="relatedPage++">
          <ArrowRight v-if="!isRtl" class="w-5 h-5" /><ArrowLeft v-else class="w-5 h-5" />
        </button>
      </div>
    </div>

  </div>

  <div v-else class="py-24 text-center space-y-6 max-w-md mx-auto px-4">
    <AlertCircle class="w-16 h-16 text-brand-coral mx-auto" />
    <h1 class="text-2xl font-bold text-navy-900">
      {{ t(siteCopyState.serviceDetailsPage.notFound) }}
    </h1>
    <router-link
      to="/services"
      class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 text-white font-bold text-sm shadow-sm"
    >
      <span>{{ t(siteCopyState.buttons.viewAllServices) }}</span>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { ArrowRight, ArrowLeft, CheckCircle2, Video, AlertCircle } from 'lucide-vue-next';
import { useI18n } from '@/composables/useI18n';
import { siteCopyState, servicesState, projectsState } from '@/services/dataService';
import ProjectCard from '@/components/ui/ProjectCard.vue';
import { useResponsivePageCapacity } from '@/composables/useResponsivePageCapacity';

const route = useRoute();
const { isRtl, t } = useI18n();
const relatedPage = ref(1);
const { itemsPerPage } = useResponsivePageCapacity();

const service = computed(() => {
  return servicesState.find((s) => s.id === route.params.id);
});

const relatedProjects = computed(() => {
  if (!service.value) return [];
  return projectsState.filter((p) => p.serviceIds.includes(service.value!.id));
});
const relatedTotalPages = computed(() => Math.ceil(relatedProjects.value.length / itemsPerPage.value));
const paginatedRelatedProjects = computed(() => {
  const start = (relatedPage.value - 1) * itemsPerPage.value;
  return relatedProjects.value.slice(start, start + itemsPerPage.value);
});
watch(relatedTotalPages, (pages) => {
  relatedPage.value = Math.min(relatedPage.value, Math.max(1, pages));
});
watch(() => service.value?.id, () => { relatedPage.value = 1; });
</script>
