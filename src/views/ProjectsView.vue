<template>
  <div class="space-y-12 pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div class="text-center space-y-4 max-w-3xl mx-auto">
      <h1 class="text-4xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
        {{ t(siteCopyState.projectsPage.title) }}
      </h1>
      <p class="text-slate-600 text-base leading-relaxed font-medium">
        {{ t(siteCopyState.projectsPage.subtitle) }}
      </p>
    </div>

    <!-- Dropdown Filter -->
    <div class="flex items-center justify-center pt-2">
      <div class="relative w-full max-w-xs space-y-2">
        <label for="project-filter" class="block text-sm font-bold text-navy-900">{{ t(siteCopyState.buttons.filterLabel) }}</label>
        <select
          id="project-filter"
          v-model="selectedType"
          @change="currentPage = 1"
          class="w-full appearance-none px-5 py-3 rounded-xl bg-white border border-slate-200 text-navy-900 text-sm font-bold shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
        >
          <option value="ALL">{{ t(siteCopyState.buttons.filterAll) }}</option>
          <option v-for="type in types" :key="type.en" :value="type.en">
            {{ t(type) }}
          </option>
        </select>
        <ChevronDown class="absolute end-4 bottom-3.5 w-5 h-5 text-slate-400 pointer-events-none" />
      </div>
    </div>

    <div v-if="paginatedProjects.length > 0" class="space-y-12">
      <div class="project-card-grid pt-4">
        <ProjectCard v-for="project in paginatedProjects" :key="project.id" :project="project" />
      </div>

      <!-- Arrow + Number Pagination -->
      <div v-if="totalPages > 1" class="flex items-center justify-center gap-6 pt-6 border-t border-slate-200">
        <button
          @click="currentPage--"
          :disabled="currentPage === 1"
          class="p-2 rounded-full bg-white border border-slate-200 text-slate-500 disabled:opacity-40 hover:text-sky-600 hover:border-sky-200 hover:shadow-sm transition-all"
          :aria-label="t(siteCopyState.common.previousPage)"
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
          :aria-label="t(siteCopyState.common.nextPage)"
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
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  AlertCircle
} from 'lucide-vue-next';
import { useI18n } from '@/composables/useI18n';
import { siteCopyState, projectsState } from '@/services/dataService';
import ProjectCard from '@/components/ui/ProjectCard.vue';

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
