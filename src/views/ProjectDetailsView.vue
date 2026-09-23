<template>
  <div v-if="project" class="pb-20">

    <!-- 1. Introduction Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">

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
          <div class="inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-sky-100 text-sky-700 uppercase tracking-wider shadow-sm">
            {{ t(project.type) }}
          </div>
          <h1 class="text-4xl sm:text-6xl font-extrabold text-navy-900 tracking-tight leading-tight">
            {{ t(project.title) }}
          </h1>
          <p class="text-slate-600 text-lg sm:text-xl leading-relaxed font-medium">
            {{ t(project.shortDescription) }}
          </p>
        </div>
      </div>

      <div class="rounded-[2.5rem] overflow-hidden border border-slate-200 bg-slate-100 shadow-md">
        <img
          :src="project.coverImage"
          :alt="t(project.title)"
          class="w-full h-80 sm:h-[500px] object-cover"
        />
      </div>

    </div>

    <!-- 2. Details & Scope -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
      <h2 class="text-3xl font-extrabold text-navy-900">
        {{ t(siteCopyState.projectDetailsPage.detailsScopeTitle) }}
      </h2>
      <p class="text-slate-600 text-lg leading-relaxed whitespace-pre-line">
        {{ t(project.fullDescription) }}
      </p>
    </div>

    <!-- 3. Stripe-style Full-Bleed Slider -->
    <div v-if="project.gallery && project.gallery.length > 0" class="py-12 bg-slate-50 border-y border-slate-200 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <h2 class="text-2xl font-bold text-navy-900 flex items-center gap-2">
          <Image class="w-6 h-6 text-sky-500" />
          <span>{{ t(siteCopyState.projectDetailsPage.galleryTitle) }}</span>
        </h2>
      </div>

      <div class="w-full overflow-x-auto snap-x snap-mandatory hide-scrollbar">
        <!-- Flex container extending beyond viewport natively -->
        <div class="flex gap-6 w-max px-4 sm:px-8 lg:px-[max(2rem,calc((100vw-80rem)/2))]">
          <img
            v-for="(img, idx) in project.gallery"
            :key="idx"
            :src="img"
            alt="Project screenshot"
            class="h-64 sm:h-96 md:h-[450px] w-auto max-w-[85vw] object-cover rounded-3xl shadow-sm border border-slate-200 snap-center shrink-0"
          />
        </div>
      </div>
    </div>

    <!-- 4, 5, 6. Project Info, Tech, Related -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">

        <!-- Info Column -->
        <div class="md:col-span-4 space-y-6">
          <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h3 class="text-xl font-bold text-navy-900 border-b border-slate-100 pb-3">
              {{ t(siteCopyState.projectDetailsPage.infoTitle) }}
            </h3>

            <div class="space-y-4 text-sm">
              <div class="flex items-center justify-between">
                <span class="text-slate-500 font-bold uppercase">{{ t(siteCopyState.projectDetailsPage.yearLabel) }}</span>
                <span class="font-extrabold text-navy-900">{{ project.year }}</span>
              </div>

              <div class="flex items-center justify-between">
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
          </div>
        </div>

        <!-- Tech & Related Column -->
        <div class="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">

          <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h3 class="text-xl font-bold text-navy-900 border-b border-slate-100 pb-3">
              {{ t(siteCopyState.projectDetailsPage.techTitle) }}
            </h3>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-slate-50 border border-slate-200 text-sky-700"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <div v-if="relatedServices.length > 0" class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
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
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { ArrowRight, ArrowLeft, ExternalLink, Image, AlertCircle } from 'lucide-vue-next';
import { useI18n } from '@/composables/useI18n';
import { siteCopyState, projectsState, servicesState } from '@/services/dataService';

const route = useRoute();
const { isRtl, t } = useI18n();

const project = computed(() => {
  return projectsState.find((p) => p.id === route.params.id);
});

const relatedServices = computed(() => {
  if (!project.value) return [];
  return servicesState.filter((s) => project.value!.serviceIds.includes(s.id));
});
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
