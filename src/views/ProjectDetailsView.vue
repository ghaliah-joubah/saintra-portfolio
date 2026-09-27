<template>
  <div v-if="project" class="pb-20">

    <!-- 1. Introduction Section -->
    <section class="project-details-hero relative overflow-hidden">
      <div class="project-details-pattern absolute inset-0 pointer-events-none" aria-hidden="true"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 space-y-8 relative z-10">

      <div class="space-y-4 max-w-4xl">
        <router-link
          to="/projects"
          class="inline-flex items-center gap-2 text-sm text-sky-600 font-bold hover:underline"
        >
          <ArrowLeft v-if="!isRtl" class="w-4 h-4" />
          <ArrowRight v-else class="w-4 h-4" />
          <span>{{ t(siteCopyState.nav.projects) }}</span>
        </router-link>

        <div class="space-y-4">
          <p class="text-sm font-bold text-sky-700"><span class="text-slate-500">{{ t(siteCopyState.projectDetailsPage.typeLabel) }}:</span> {{ t(project.type) }}</p>
          <h1 class="text-4xl sm:text-6xl font-extrabold text-navy-900 tracking-tight leading-tight">
            {{ t(project.title) }}
          </h1>
          <p class="text-slate-600 text-lg sm:text-xl leading-relaxed font-medium">
            {{ t(project.shortDescription) }}
          </p>
        </div>
      </div>

      </div>
    </section>

    <!-- Details, scope, and structured information -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">

        <div class="md:col-span-7 space-y-6">
          <h2 class="text-3xl font-extrabold text-navy-900">{{ t(siteCopyState.projectDetailsPage.detailsScopeTitle) }}</h2>
          <p class="text-slate-600 text-lg leading-relaxed whitespace-pre-line">{{ t(project.fullDescription) }}</p>
        </div>

        <!-- Info Column -->
        <div class="md:col-span-5 space-y-6">
          <div class="bg-white p-6 sm:p-8 section-radius-inner border border-slate-200 shadow-sm space-y-6">
            <h3 class="text-xl font-bold text-navy-900 border-b border-slate-100 pb-3">
              {{ t(siteCopyState.projectDetailsPage.infoTitle) }}
            </h3>

            <div class="space-y-4 text-sm">
              <div v-if="project.year" class="flex items-center justify-between gap-4">
                <span class="text-slate-500 font-bold uppercase">{{ t(siteCopyState.projectDetailsPage.yearLabel) }}</span>
                <span class="font-extrabold text-navy-900">{{ project.year }}</span>
              </div>

              <div v-if="project.completionDate && t(project.completionDate)" class="flex items-center justify-between gap-4">
                <span class="text-slate-500 font-bold uppercase">{{ t(siteCopyState.projectDetailsPage.completionLabel) }}</span>
                <span class="font-extrabold text-navy-900">{{ t(project.completionDate) }}</span>
              </div>
            </div>

            <div v-if="project.liveUrl" class="pt-4 border-t border-slate-100">
              <a
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold bg-sky-500 text-white shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-transform"
              >
                <span>{{ t(siteCopyState.buttons.visitProject) }}</span>
                <ExternalLink class="w-4 h-4" />
              </a>
            </div>
            <div v-if="project.technologies?.length" class="border-t border-slate-100 pt-4 space-y-3">
            <h3 class="text-xl font-bold text-navy-900 border-b border-slate-100 pb-3">
              {{ t(siteCopyState.projectDetailsPage.techTitle) }}
            </h3>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                dir="ltr"
                class="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-slate-50 border border-slate-200 text-sky-700"
              >
                {{ canonicalTechnologyName(tech) }}
              </span>
            </div>
            </div>

            <div v-if="relatedServices.length > 0" class="border-t border-slate-100 pt-4 space-y-3">
            <h3 class="text-xl font-bold text-navy-900 border-b border-slate-100 pb-3">
              {{ t(siteCopyState.projectDetailsPage.relatedServicesTitle) }}
            </h3>

            <div class="space-y-3">
              <router-link
                v-for="srv in relatedServices"
                :key="srv.id"
                :to="`/services/${srv.id}`"
                class="block p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700 transition-colors font-bold text-sm text-navy-900"
              >
                {{ t(srv.title) }}
              </router-link>
            </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <section v-if="galleryImages.length" class="py-14" :aria-label="t(siteCopyState.projectDetailsPage.galleryTitle)">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-7 gallery-header">
        <h2 class="text-2xl sm:text-3xl font-bold text-navy-900">{{ t(siteCopyState.projectDetailsPage.galleryTitle) }}</h2>
        <div v-if="galleryImages.length > 1" class="flex items-center gap-1.5 sm:gap-2" :dir="isRtl ? 'rtl' : 'ltr'">
          <button type="button" :disabled="activeIndex === 0" :aria-label="t(siteCopyState.projectDetailsPage.previousImage)" class="gallery-arrow" @click="activateImage(activeIndex - 1)"><ArrowRight v-if="isRtl" class="w-5 h-5" /><ArrowLeft v-else class="w-5 h-5" /></button>
          <button type="button" :disabled="activeIndex === galleryImages.length - 1" :aria-label="t(siteCopyState.projectDetailsPage.nextImage)" class="gallery-arrow" @click="activateImage(activeIndex + 1)"><ArrowLeft v-if="isRtl" class="w-5 h-5" /><ArrowRight v-else class="w-5 h-5" /></button>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref="galleryViewport" class="gallery-viewport overflow-hidden" dir="ltr" @touchstart.passive="onTouchStart" @touchend.passive="onTouchEnd">
          <div class="gallery-track flex gap-2 sm:gap-3" :style="{ transform: `translate3d(${-trackOffset}px, 0, 0)` }">
            <button
              v-for="(img, index) in galleryImages"
              :key="img"
              type="button"
              :disabled="galleryImages.length === 1"
              :aria-current="activeIndex === index ? 'true' : undefined"
              :aria-label="`${t(siteCopyState.projectDetailsPage.selectImage)} ${index + 1}`"
              class="gallery-slide relative flex-none h-72 sm:h-[440px] lg:h-[500px] overflow-hidden section-radius-inner border bg-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              :class="activeIndex === index ? 'border-sky-300 shadow-lg cursor-default' : 'border-slate-200 hover:border-sky-300 cursor-pointer'"
              :style="{ width: `${activeIndex === index ? expandedWidth : collapsedWidth}px` }"
              @click="activateImage(index)"
            >
              <img :src="img" :alt="`${t(project.title)} — ${t(siteCopyState.projectDetailsPage.galleryImage)} ${index + 1}`" class="w-full h-full bg-slate-50" :class="activeIndex === index ? 'object-contain' : 'object-cover'" :loading="index === 0 ? 'eager' : 'lazy'" />
            </button>
          </div>
        </div>
      </div>
    </section>

  </div>

  <div v-else class="py-24 text-center space-y-6 max-w-md mx-auto px-4">
    <AlertCircle class="w-16 h-16 text-brand-coral mx-auto" />
    <h1 class="text-2xl font-bold text-navy-900">
      {{ t(siteCopyState.projectDetailsPage.notFound) }}
    </h1>
    <router-link
      to="/projects"
      class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 text-white font-bold text-sm shadow-sm"
    >
      <span>{{ t(siteCopyState.buttons.viewAllProjects) }}</span>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { ArrowRight, ArrowLeft, ExternalLink, AlertCircle } from 'lucide-vue-next';
import { useI18n } from '@/composables/useI18n';
import { siteCopyState, projectsState, servicesState } from '@/services/dataService';
import { canonicalTechnologyName } from '@/utils/technologyNames';

const route = useRoute();
const { isRtl, t } = useI18n();

const project = computed(() => {
  return projectsState.find((p) => p.id === route.params.id);
});
const galleryImages = computed(() => project.value?.gallery?.filter(Boolean) ?? []);
const activeIndex = ref(0);
const galleryViewport = ref<HTMLElement | null>(null);
const viewportWidth = ref(0);
const isCompact = ref(false);
const gap = computed(() => isCompact.value ? 8 : 12);
const expandedWidth = computed(() => galleryImages.value.length === 1 ? viewportWidth.value : viewportWidth.value * (isCompact.value ? .64 : .60));
const collapsedWidth = computed(() => viewportWidth.value * (isCompact.value ? .20 : .18));
const trackOffset = computed(() => {
  if (galleryImages.value.length < 2) return 0;
  const step = collapsedWidth.value + gap.value;
  const desired = Math.max(0, activeIndex.value - 1) * step;
  const total = expandedWidth.value + (galleryImages.value.length - 1) * step;
  return Math.max(0, Math.min(desired, total - viewportWidth.value));
});
let resizeObserver: ResizeObserver | undefined;
let touchStart: { x: number; y: number } | undefined;
function measureGallery() {
  viewportWidth.value = galleryViewport.value?.clientWidth ?? 0;
  isCompact.value = window.innerWidth < 640;
}
function activateImage(index: number) {
  if (index >= 0 && index < galleryImages.value.length) activeIndex.value = index;
}
function onTouchStart(event: TouchEvent) {
  touchStart = { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY };
}
function onTouchEnd(event: TouchEvent) {
  if (!touchStart) return;
  const dx = event.changedTouches[0].clientX - touchStart.x;
  const dy = event.changedTouches[0].clientY - touchStart.y;
  if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) activateImage(activeIndex.value + (dx < 0 ? 1 : -1));
  touchStart = undefined;
}
watch(() => project.value?.id, () => { activeIndex.value = 0; });
watch(galleryImages, (images) => { activeIndex.value = Math.min(activeIndex.value, Math.max(0, images.length - 1)); });
onMounted(() => {
  measureGallery();
  if (galleryViewport.value) {
    resizeObserver = new ResizeObserver(measureGallery);
    resizeObserver.observe(galleryViewport.value);
  }
  window.addEventListener('resize', measureGallery);
});
onUnmounted(() => {
  resizeObserver?.disconnect();
  window.removeEventListener('resize', measureGallery);
});

const relatedServices = computed(() => {
  if (!project.value) return [];
  return servicesState.filter((s) => project.value!.serviceIds.includes(s.id));
});
</script>

<style scoped>
.gallery-track, .gallery-slide { transition: transform 560ms cubic-bezier(.22, 1, .36, 1), width 560ms cubic-bezier(.22, 1, .36, 1), border-color 300ms, box-shadow 300ms; }
.gallery-viewport { touch-action: pan-y; }
.gallery-arrow { width: 44px; height: 44px; display: grid; place-items: center; border: 1px solid #bbd6f2; border-radius: 14px; background: white; color: #22537f; transition: background-color 200ms, box-shadow 200ms; }
.gallery-arrow:not(:disabled):hover { background: #f0f7ff; box-shadow: 0 3px 10px #19366119; }
.gallery-arrow:disabled { opacity: .4; cursor: not-allowed; }
.gallery-arrow:focus-visible { outline: 2px solid #4a90e2; outline-offset: 2px; }
@media (prefers-reduced-motion: reduce) {
  .gallery-track, .gallery-slide { transition: none; }
}
</style>
