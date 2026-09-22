<template>
  <div v-if="project" class="space-y-16 py-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div class="space-y-4">
      <router-link
        to="/projects"
        class="inline-flex items-center gap-2 text-sm text-sky-400 font-semibold hover:underline"
      >
        <ArrowLeft v-if="!isRtl" class="w-4 h-4" />
        <ArrowRight v-else class="w-4 h-4" />
        <span>{{ t(siteCopyState.nav.projects) }}</span>
      </router-link>

      <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-2">
        <div class="space-y-3 max-w-3xl">
          <div class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-300 border border-sky-500/20">
            {{ t(project.type) }}
          </div>
          <h1 class="text-3xl sm:text-5xl font-extrabold text-white">
            {{ t(project.title) }}
          </h1>
          <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
            {{ t(project.shortDescription) }}
          </p>
        </div>

        <a
          v-if="project.liveUrl"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25 hover:scale-105 transition-transform shrink-0"
        >
          <span>{{ t(siteCopyState.buttons.visitProject) }}</span>
          <ExternalLink class="w-5 h-5" />
        </a>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div class="lg:col-span-8 space-y-8">
        <div class="rounded-3xl overflow-hidden border border-slate-800 glass-card">
          <img
            :src="project.coverImage"
            :alt="t(project.title)"
            class="w-full h-80 sm:h-96 object-cover"
          />
        </div>

        <div class="glass-card p-8 rounded-3xl border border-slate-800 space-y-4">
          <h2 class="text-2xl font-bold text-white">تفاصيل ونطاق العمل / Overview</h2>
          <p class="text-slate-300 text-base leading-relaxed whitespace-pre-line">
            {{ t(project.fullDescription) }}
          </p>
        </div>

        <div v-if="project.gallery && project.gallery.length > 0" class="glass-card p-8 rounded-3xl border border-slate-800 space-y-6">
          <h2 class="text-2xl font-bold text-white flex items-center gap-2">
            <Maximize2 class="w-5 h-5 text-sky-400" />
            <span>{{ t(siteCopyState.projectDetailsPage.galleryTitle) }}</span>
          </h2>

          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div
              v-for="(img, idx) in project.gallery"
              :key="idx"
              @click="openLightbox(idx)"
              class="relative rounded-xl overflow-hidden border border-slate-800 aspect-video cursor-pointer group"
            >
              <img :src="img" alt="Gallery thumbnail" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              <div class="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize2 class="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="lg:col-span-4 space-y-6">
        <div class="glass-card p-6 rounded-3xl border border-slate-800 space-y-5">
          <h3 class="text-xl font-bold text-white border-b border-slate-800 pb-3">
            {{ t(siteCopyState.projectDetailsPage.infoTitle) }}
          </h3>

          <div class="space-y-4 text-sm">
            <div class="flex items-center justify-between text-slate-300">
              <span class="text-slate-400 font-semibold">{{ t(siteCopyState.projectDetailsPage.yearLabel) }}:</span>
              <span class="font-bold text-white">{{ project.year }}</span>
            </div>

            <div class="flex items-center justify-between text-slate-300">
              <span class="text-slate-400 font-semibold">{{ t(siteCopyState.projectDetailsPage.completionLabel) }}:</span>
              <span class="font-bold text-white">{{ t(project.completionDate) }}</span>
            </div>

            <div class="flex items-center justify-between text-slate-300">
              <span class="text-slate-400 font-semibold">{{ t(siteCopyState.projectDetailsPage.teamLabel) }}:</span>
              <span class="font-bold text-white">{{ t(project.teamSize) }}</span>
            </div>

            <div class="flex items-center justify-between text-slate-300">
              <span class="text-slate-400 font-semibold">{{ t(siteCopyState.projectDetailsPage.platformLabel) }}:</span>
              <span class="font-bold text-white">{{ t(project.platform) }}</span>
            </div>
          </div>
        </div>

        <div class="glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
          <h3 class="text-xl font-bold text-white border-b border-slate-800 pb-3">
            {{ t(siteCopyState.projectDetailsPage.techTitle) }}
          </h3>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 border border-slate-800 text-sky-300"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <div v-if="relatedServices.length > 0" class="glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
          <h3 class="text-xl font-bold text-white border-b border-slate-800 pb-3">
            {{ t(siteCopyState.projectDetailsPage.relatedServicesTitle) }}
          </h3>

          <div class="space-y-2">
            <router-link
              v-for="srv in relatedServices"
              :key="srv.id"
              :to="`/services/${srv.id}`"
              class="block p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 text-xs font-bold text-slate-200 hover:text-sky-400 transition-colors"
            >
              {{ t(srv.title) }}
            </router-link>
          </div>
        </div>

      </div>

    </div>

    <LightboxModal
      :is-open="isLightboxOpen"
      :images="project.gallery"
      :initial-index="activeImageIndex"
      @close="isLightboxOpen = false"
    />

  </div>

  <div v-else class="py-24 text-center space-y-6 max-w-md mx-auto px-4">
    <AlertCircle class="w-16 h-16 text-rose-500 mx-auto" />
    <h1 class="text-2xl font-bold text-white">
      {{ t(siteCopyState.projectDetailsPage.notFound) }}
    </h1>
    <router-link
      to="/projects"
      class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 text-white font-semibold text-sm"
    >
      <span>{{ t(siteCopyState.buttons.viewAllProjects) }}</span>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { ArrowRight, ArrowLeft, ExternalLink, Maximize2, AlertCircle } from 'lucide-vue-next';
import { useI18n } from '@/composables/useI18n';
import { siteCopyState, projectsState, servicesState } from '@/services/dataService';
import LightboxModal from '@/components/ui/LightboxModal.vue';

const route = useRoute();
const { isRtl, t } = useI18n();

const isLightboxOpen = ref(false);
const activeImageIndex = ref(0);

const project = computed(() => {
  return projectsState.find((p) => p.id === route.params.id);
});

const relatedServices = computed(() => {
  if (!project.value) return [];
  return servicesState.filter((s) => project.value!.serviceIds.includes(s.id));
});

function openLightbox(index: number) {
  activeImageIndex.value = index;
  isLightboxOpen.value = true;
}
</script>
