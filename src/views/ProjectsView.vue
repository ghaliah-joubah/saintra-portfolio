<template>
  <div class="space-y-12 py-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div class="text-center space-y-4 max-w-3xl mx-auto">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-sky-500/30 text-sky-300 text-xs font-semibold">
        <FolderGit2 class="w-4 h-4 text-sky-400" />
        <span>{{ t(siteCopyState.nav.projects) }}</span>
      </div>
      <h1 class="text-4xl sm:text-5xl font-extrabold text-white">
        {{ t(siteCopyState.projectsPage.title) }}
      </h1>
      <p class="text-slate-300 text-base leading-relaxed">
        {{ t(siteCopyState.projectsPage.subtitle) }}
      </p>
    </div>

    <div class="flex flex-wrap items-center justify-center gap-2 pt-2">
      <button
        @click="selectFilter('ALL')"
        class="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-sky-500"
        :class="selectedType === 'ALL' ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25' : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'"
      >
        {{ t(siteCopyState.buttons.filterAll) }}
      </button>

      <button
        v-for="type in types"
        :key="type.en"
        @click="selectFilter(type.en)"
        class="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-sky-500"
        :class="selectedType === type.en ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25' : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'"
      >
        {{ t(type) }}
      </button>
    </div>

    <div v-if="paginatedProjects.length > 0" class="space-y-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        <div
          v-for="project in paginatedProjects"
          :key="project.id"
          class="glass-card glass-card-hover rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between space-y-4"
        >
          <div class="relative h-48 bg-slate-900 overflow-hidden group">
            <img
              :src="project.coverImage"
              :alt="t(project.title)"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80"></div>
            <span class="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/80 border border-slate-700 text-sky-300 backdrop-blur-md">
              {{ t(project.type) }}
            </span>
          </div>

          <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
            <div class="space-y-2">
              <h2 class="text-xl font-bold text-white hover:text-sky-400 transition-colors">
                <router-link :to="`/projects/${project.id}`">
                  {{ t(project.title) }}
                </router-link>
              </h2>
              <p class="text-sm text-slate-300 line-clamp-2 leading-relaxed">
                {{ t(project.shortDescription) }}
              </p>
            </div>

            <div class="flex flex-wrap gap-1.5 pt-2">
              <span
                v-for="tech in project.technologies.slice(0, 4)"
                :key="tech"
                class="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60"
              >
                {{ tech }}
              </span>
            </div>

            <router-link
              :to="`/projects/${project.id}`"
              class="inline-flex items-center gap-2 text-sm font-bold text-sky-400 hover:text-sky-300 transition-colors pt-3 border-t border-slate-800"
            >
              <span>{{ t(siteCopyState.buttons.details) }}</span>
              <ArrowRight v-if="!isRtl" class="w-4 h-4" />
              <ArrowLeft v-else class="w-4 h-4" />
            </router-link>
          </div>
        </div>
      </div>

      <div v-if="totalPages > 1" class="flex items-center justify-center gap-4 pt-6 border-t border-slate-800">
        <button
          @click="currentPage--"
          :disabled="currentPage === 1"
          class="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm font-semibold text-slate-300 disabled:opacity-40 hover:text-white transition-colors"
        >
          <ChevronLeft v-if="!isRtl" class="w-4 h-4" />
          <ChevronRight v-else class="w-4 h-4" />
          <span>{{ t(siteCopyState.buttons.previous) }}</span>
        </button>

        <span class="text-sm font-semibold text-slate-400">
          {{ t(siteCopyState.buttons.page) }} {{ currentPage }} / {{ totalPages }}
        </span>

        <button
          @click="currentPage++"
          :disabled="currentPage === totalPages"
          class="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm font-semibold text-slate-300 disabled:opacity-40 hover:text-white transition-colors"
        >
          <span>{{ t(siteCopyState.buttons.next) }}</span>
          <ChevronRight v-if="!isRtl" class="w-4 h-4" />
          <ChevronLeft v-else class="w-4 h-4" />
        </button>
      </div>
    </div>

    <div v-else class="glass-card p-12 rounded-3xl border border-slate-800 text-center space-y-4">
      <AlertCircle class="w-12 h-12 text-slate-500 mx-auto" />
      <p class="text-slate-300 font-semibold text-lg">
        {{ t(siteCopyState.projectsPage.emptyState) }}
      </p>
      <button
        @click="selectFilter('ALL')"
        class="px-5 py-2 rounded-xl bg-sky-500 text-white font-semibold text-sm"
      >
        {{ t(siteCopyState.buttons.filterAll) }}
      </button>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import {
  FolderGit2,
  ArrowRight,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  AlertCircle
} from 'lucide-vue-next';
import { useI18n } from '@/composables/useI18n';
import { siteCopyState, projectsState } from '@/services/dataService';

const { isRtl, t } = useI18n();
const selectedType = ref('ALL');
const currentPage = ref(1);
const itemsPerPage = 6;

const types = computed(() => {
  const map = new Map();
  projectsState.forEach((p) => {
    if (!map.has(p.type.en)) {
      map.set(p.type.en, p.type);
    }
  });
  return Array.from(map.values());
});

const filteredProjects = computed(() => {
  if (selectedType.value === 'ALL') return projectsState;
  return projectsState.filter((p) => p.type.en === selectedType.value);
});

const totalPages = computed(() => {
  return Math.ceil(filteredProjects.value.length / itemsPerPage);
});

const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return filteredProjects.value.slice(start, start + itemsPerPage);
});

function selectFilter(typeEn: string) {
  selectedType.value = typeEn;
  currentPage.value = 1;
}
</script>
