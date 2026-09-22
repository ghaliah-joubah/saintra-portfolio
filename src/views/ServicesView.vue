<template>
  <div class="space-y-12 py-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div class="text-center space-y-4 max-w-3xl mx-auto">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-sky-500/30 text-sky-300 text-xs font-semibold">
        <Layers class="w-4 h-4 text-sky-400" />
        <span>{{ t(siteCopyState.nav.services) }}</span>
      </div>
      <h1 class="text-4xl sm:text-5xl font-extrabold text-white">
        {{ t(siteCopyState.servicesPage.title) }}
      </h1>
      <p class="text-slate-300 text-base leading-relaxed">
        {{ t(siteCopyState.servicesPage.subtitle) }}
      </p>
    </div>

    <div class="flex flex-wrap items-center justify-center gap-2 pt-4">
      <button
        @click="selectedCategory = 'ALL'"
        class="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-sky-500"
        :class="selectedCategory === 'ALL' ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25' : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'"
      >
        {{ t(siteCopyState.buttons.filterAll) }}
      </button>

      <button
        v-for="cat in categories"
        :key="cat.en"
        @click="selectedCategory = cat.en"
        class="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-sky-500"
        :class="selectedCategory === cat.en ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25' : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'"
      >
        {{ t(cat) }}
      </button>
    </div>

    <div v-if="filteredServices.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
      <div
        v-for="service in filteredServices"
        :key="service.id"
        class="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-6"
      >
        <div class="space-y-4">
          <div class="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
            <component :is="getIcon(service.icon)" class="w-6 h-6" />
          </div>

          <div class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-sky-300 border border-slate-700">
            {{ t(service.category) }}
          </div>

          <h2 class="text-xl font-bold text-white">
            {{ t(service.title) }}
          </h2>

          <p class="text-sm text-slate-300 leading-relaxed line-clamp-3">
            {{ t(service.shortDescription) }}
          </p>

          <ul class="space-y-2 pt-2 border-t border-slate-800/80 text-xs text-slate-300">
            <li v-for="(inc, idx) in service.whatsIncluded.slice(0, 3)" :key="idx" class="flex items-center gap-2">
              <CheckCircle2 class="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span class="line-clamp-1">{{ t(inc) }}</span>
            </li>
          </ul>
        </div>

        <router-link
          :to="`/services/${service.id}`"
          class="inline-flex items-center gap-2 text-sm font-bold text-sky-400 hover:text-sky-300 transition-colors pt-3 border-t border-slate-800"
        >
          <span>{{ t(siteCopyState.buttons.details) }}</span>
          <ArrowRight v-if="!isRtl" class="w-4 h-4" />
          <ArrowLeft v-else class="w-4 h-4" />
        </router-link>
      </div>
    </div>

    <div v-else class="glass-card p-12 rounded-3xl border border-slate-800 text-center space-y-4">
      <AlertCircle class="w-12 h-12 text-slate-500 mx-auto" />
      <p class="text-slate-300 font-semibold text-lg">
        {{ t(siteCopyState.servicesPage.emptyState) }}
      </p>
      <button
        @click="selectedCategory = 'ALL'"
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
  Layers,
  ArrowRight,
  ArrowLeft,
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
const selectedCategory = ref('ALL');

const categories = computed(() => {
  const map = new Map();
  servicesState.forEach((s) => {
    if (!map.has(s.category.en)) {
      map.set(s.category.en, s.category);
    }
  });
  return Array.from(map.values());
});

const filteredServices = computed(() => {
  if (selectedCategory.value === 'ALL') return servicesState;
  return servicesState.filter((s) => s.category.en === selectedCategory.value);
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
