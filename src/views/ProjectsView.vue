<template>
  <div class="space-y-12 py-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div class="text-center space-y-4 max-w-3xl mx-auto pt-10">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-700 text-xs font-bold shadow-sm">
        <FolderGit2 class="w-4 h-4 text-sky-500" />
        <span>{{ t(siteCopyState.nav.projects) }}</span>
      </div>
      <h1 class="text-4xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
        {{ t(siteCopyState.projectsPage.title) }}
      </h1>
      <p class="text-slate-600 text-base leading-relaxed font-medium">
        {{ t(siteCopyState.projectsPage.subtitle) }}
      </p>
    </div>

    <!-- Dropdown Filter -->
    <div class="flex items-center justify-center pt-2">
      <div class="relative w-full max-w-xs">
        <select
          v-model="selectedType"
          @change="currentPage = 1"
          class="w-full appearance-none px-5 py-3 rounded-xl bg-white border border-slate-200 text-navy-900 text-sm font-bold shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
          aria-label="Filter projects by type"
        >
          <option value="ALL">{{ t(siteCopyState.buttons.filterAll) }}</option>
          <option v-for="type in types" :key="type.en" :value="type.en">
            {{ t(type) }}
          </option>
        </select>
        <ChevronDown class="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
      </div>
    </div>

    <div v-if="paginatedProjects.length > 0" class="space-y-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
        <div
          v-for="project in paginatedProjects"
          :key="project.id"
          class="group flex flex-col"
        >
          <div class="relative h-56 rounded-2xl bg-slate-200 overflow-hidden mb-4 shadow-sm border border-slate-200">
            <img
              :src="project.coverImage"
              :alt="t(project.title)"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>

          <div class="space-y-2 px-1 flex-1 flex flex-col">
            <div class="text-xs font-bold text-sky-600 uppercase tracking-wider">
              {{ t(project.type) }}
            </div>

            <h2 class="text-xl font-bold text-navy-900 group-hover:text-sky-600 transition-colors">
              <router-link :to="`/projects/${project.id}`">
                {{ t(project.title) }}
              </router-link>
            </h2>

            <p class="text-sm text-slate-600 line-clamp-2 leading-relaxed flex-1">
              {{ t(project.shortDescription) }}
            </p>

            <router-link
              :to="`/projects/${project.id}`"
              class="inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-sky-700 transition-colors pt-3 mt-auto"
            >
              <span>{{ t(siteCopyState.buttons.details) }}</span>
              <ArrowRight v-if="!isRtl" class="w-4 h-4" />
              <ArrowLeft v-else class="w-4 h-4" />
            </router-link>
          </div>
        </div>
      </div>

      <!-- Arrow + Number Pagination -->
      <div v-if="totalPages > 1" class="flex items-center justify-center gap-6 pt-6 border-t border-slate-200">
        <button
          @click="currentPage--"
          :disabled="currentPage === 1"
          class="p-2 rounded-full bg-white border border-slate-200 text-slate-500 disabled:opacity-40 hover:text-sky-600 hover:border-sky-200 hover:shadow-sm transition-all"
          aria-label="Previous page"
        >
          <ChevronLeft v-if="!isRtl" class="w-5 h-5" />
          <ChevronRight v-else class="w-5 h-5" />
        </button>

        <div class="flex items-center gap-2">
          <span
            v-for="page in totalPages"
            :key="page"
            class="text-sm font-bold w-8 h-8 flex items-center justify-center rounded-full transition-colors"
            :class="currentPage === page ? 'bg-sky-100 text-sky-700' : 'text-slate-500'"
          >
            {{ page }}
          </span>
        </div>

        <button
          @click="currentPage++"
          :disabled="currentPage === totalPages"
          class="p-2 rounded-full bg-white border border-slate-200 text-slate-500 disabled:opacity-40 hover:text-sky-600 hover:border-sky-200 hover:shadow-sm transition-all"
          aria-label="Next page"
        >
          <ChevronRight v-if="!isRtl" class="w-5 h-5" />
          <ChevronLeft v-else class="w-5 h-5" />
        </button>
      </div>
    </div>

    <div v-else class="bg-white p-12 rounded-[2rem] border border-slate-200 text-center space-y-4 shadow-sm">
      <div class="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-2">
        <AlertCircle class="w-8 h-8 text-slate-400" />
      </div>
      <p class="text-slate-600 font-bold text-lg">
        {{ t(siteCopyState.projectsPage.emptyState) }}
      </p>
      <button
        @click="selectFilter('ALL')"
        class="inline-flex items-center px-6 py-2.5 rounded-xl bg-sky-500 text-white font-bold text-sm shadow-md hover:bg-sky-600 transition-colors"
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
  ChevronDown,
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
