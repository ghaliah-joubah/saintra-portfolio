<template>
  <div class="space-y-12 pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div class="text-center space-y-4 max-w-3xl mx-auto">
      <h1 class="text-4xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
        {{ t(siteCopyState.servicesPage.title) }}
      </h1>
      <p class="text-slate-600 text-base leading-relaxed font-medium">
        {{ t(siteCopyState.servicesPage.subtitle) }}
      </p>
    </div>

    <div v-if="paginatedServices.length > 0" class="space-y-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
        <div
          v-for="service in paginatedServices"
          :key="service.id"
          class="bg-white p-6 rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between space-y-6"
        >
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                <component :is="getIcon(service.icon)" class="w-5 h-5" />
              </div>
              <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">
                {{ t(service.category) }}
              </span>
            </div>

            <h2 class="text-xl font-bold text-navy-900">
              {{ t(service.title) }}
            </h2>

            <p class="text-sm text-slate-600 leading-relaxed line-clamp-3">
              {{ t(service.shortDescription) }}
            </p>

            <ul class="space-y-2 pt-3 border-t border-slate-100 text-xs text-slate-600 font-medium">
              <li v-for="(inc, idx) in service.whatsIncluded.slice(0, 3)" :key="idx" class="flex items-start gap-2">
                <CheckCircle2 class="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                <span class="line-clamp-1">{{ t(inc) }}</span>
              </li>
            </ul>
          </div>

          <router-link
            :to="`/services/${service.id}`"
            class="inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-sky-700 transition-colors pt-4 border-t border-slate-100"
          >
            <span>{{ t(siteCopyState.buttons.details) }}</span>
            <ArrowRight v-if="!isRtl" class="w-4 h-4" />
            <ArrowLeft v-else class="w-4 h-4" />
          </router-link>
        </div>
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

    <!-- Empty State -->
    <div v-else class="bg-white p-12 rounded-[2rem] border border-slate-200 text-center space-y-4 shadow-sm">
      <div class="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-2">
        <AlertCircle class="w-8 h-8 text-slate-400" />
      </div>
      <p class="text-slate-600 font-bold text-lg">
        {{ t(siteCopyState.servicesPage.emptyState) }}
      </p>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import {
  ArrowRight,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Globe,
  Smartphone,
  Database,
  Layout,
  Cloud,
  Cpu,
  CheckCircle2,
  AlertCircle,
  Code2
} from 'lucide-vue-next';
import { useI18n } from '@/composables/useI18n';
import { siteCopyState, servicesState } from '@/services/dataService';

const { isRtl, t } = useI18n();
const currentPage = ref(1);
const itemsPerPage = 9;

const totalPages = computed(() => {
  return Math.ceil(servicesState.length / itemsPerPage);
});

const paginatedServices = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return servicesState.slice(start, start + itemsPerPage);
});

function getIcon(name: string) {
  switch (name) {
    case 'Globe': return Globe;
    case 'Smartphone': return Smartphone;
    case 'Database': return Database;
    case 'Layout': return Layout;
    case 'Cloud': return Cloud;
    case 'Cpu': return Cpu;
    default: return Code2;
  }
}
</script>
