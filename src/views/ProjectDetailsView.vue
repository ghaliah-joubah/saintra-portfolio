<template>
  <div v-if="project" class="pb-20">

    <!-- 1. Introduction Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 space-y-8">

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

    <!-- Details, scope, and structured information -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">

        <div class="md:col-span-7 space-y-6">
          <h2 class="text-3xl font-extrabold text-navy-900">{{ t(siteCopyState.projectDetailsPage.detailsScopeTitle) }}</h2>
          <p class="text-slate-600 text-lg leading-relaxed whitespace-pre-line">{{ t(project.fullDescription) }}</p>
        </div>

        <!-- Info Column -->
        <div class="md:col-span-5 space-y-6">
          <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
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
                class="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-slate-50 border border-slate-200 text-sky-700"
              >
                {{ displayTechnology(tech) }}
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

    <section v-if="displayImages.length" class="py-14" :aria-label="t(siteCopyState.projectDetailsPage.galleryTitle)">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-7">
        <h2 class="text-2xl sm:text-3xl font-bold text-navy-900">{{ t(siteCopyState.projectDetailsPage.galleryTitle) }}</h2>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] gap-3 sm:gap-4">
        <figure class="min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
          <div class="relative h-72 sm:h-[440px] lg:h-[500px] overflow-hidden bg-slate-100">
            <Transition name="gallery-swap" mode="out-in">
              <img :key="displayImages[0]" :src="displayImages[0]" :alt="`${t(project.title)} — ${t(siteCopyState.projectDetailsPage.galleryImage)}`" class="absolute inset-0 h-full w-full object-cover" />
            </Transition>
          </div>
          <figcaption class="px-5 py-3 text-xs text-slate-500">{{ t(siteCopyState.projectDetailsPage.galleryCaption) }}</figcaption>
        </figure>
        <div v-if="displayImages.length > 1" class="grid grid-cols-4 gap-2 sm:gap-3 lg:h-[500px]" :aria-label="t(siteCopyState.projectDetailsPage.galleryTitle)">
          <button
            v-for="(img, index) in displayImages.slice(1)"
            :key="index"
            type="button"
            class="group relative h-28 sm:h-40 lg:h-full min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm transition-[transform,border-color,box-shadow] duration-300 hover:z-10 hover:scale-[1.04] hover:border-sky-400 hover:shadow-xl focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            :aria-label="`${t(siteCopyState.projectDetailsPage.selectImage)} ${index + 2}`"
            @click="swapWithMain(index + 1)"
          >
            <Transition name="thumb-swap" mode="out-in">
              <img :key="img" :src="img" alt="" class="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            </Transition>
          </button>
        </div>
      </div>
    </section>

  </div>

  <div v-else class="py-24 text-center space-y-6 max-w-md mx-auto px-4">
    <AlertCircle class="w-16 h-16 text-rose-500 mx-auto" />
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
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { ArrowRight, ArrowLeft, ExternalLink, AlertCircle } from 'lucide-vue-next';
import { useI18n } from '@/composables/useI18n';
import { siteCopyState, projectsState, servicesState } from '@/services/dataService';

const route = useRoute();
const { isRtl, currentLang, t } = useI18n();

const arabicTechnologyNames: Record<string, string> = {
  'Vue.js 3': 'فيو ٣', 'Vue.js': 'فيو', 'Vue 3': 'فيو ٣',
  'Node.js': 'نود', 'TypeScript': 'تايب سكريبت', 'PostgreSQL': 'بوستغرس',
  'Docker': 'دوكر', 'AWS': 'أمازون السحابية', 'AWS S3': 'تخزين أمازون السحابي',
  'Flutter': 'فلاتر', 'Python': 'بايثون', 'Python/Django': 'بايثون وجانغو',
  'WebRTC': 'اتصالات الويب الفورية', 'MongoDB': 'مونغو',
  'Google Maps API': 'خرائط غوغل', 'Redis': 'ريديس', 'WebSockets': 'مقابس الويب',
  'Tailwind CSS': 'تايلويند', 'Three.js': 'ثري جي إس', 'Express': 'إكسبرس',
  'MySQL': 'ماي إس كيو إل', 'FastAPI': 'فاست إيه بي آي',
  'OpenAI API': 'واجهة أوبن إيه آي', 'Chart.js': 'تشارت جي إس'
};
function displayTechnology(name: string) {
  return currentLang.value === 'ar' ? (arabicTechnologyNames[name] || name) : name;
}

const project = computed(() => {
  return projectsState.find((p) => p.id === route.params.id);
});
const displayImages = ref<string[]>([]);
watch(() => project.value?.gallery, (images) => {
  displayImages.value = images?.filter(Boolean).slice() ?? [];
}, { immediate: true, deep: true });

function swapWithMain(index: number) {
  if (index <= 0 || index >= displayImages.value.length) return;
  const next = [...displayImages.value];
  [next[0], next[index]] = [next[index], next[0]];
  displayImages.value = next;
}

const relatedServices = computed(() => {
  if (!project.value) return [];
  return servicesState.filter((s) => project.value!.serviceIds.includes(s.id));
});
</script>

<style scoped>
.gallery-swap-enter-active, .gallery-swap-leave-active,
.thumb-swap-enter-active, .thumb-swap-leave-active {
  transition: opacity 240ms ease, transform 240ms ease;
}
.gallery-swap-enter-from, .gallery-swap-leave-to,
.thumb-swap-enter-from, .thumb-swap-leave-to {
  opacity: 0;
  transform: scale(.97);
}
@media (prefers-reduced-motion: reduce) {
  .gallery-swap-enter-active, .gallery-swap-leave-active,
  .thumb-swap-enter-active, .thumb-swap-leave-active { transition: none; }
}
</style>
