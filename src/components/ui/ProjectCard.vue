<template>
  <article class="standard-card group flex h-full flex-col">
    <router-link :to="`/projects/${project.id}`" class="block overflow-hidden bg-slate-100 aspect-[16/10]">
      <img :src="project.coverImage" :alt="t(project.title)" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
    </router-link>
    <div class="flex flex-1 flex-col gap-3 p-6">
      <p class="text-xs font-bold uppercase tracking-wide text-sky-700">{{ t(project.type) }}</p>
      <h3 class="text-xl font-bold text-navy-900"><router-link :to="`/projects/${project.id}`" class="hover:text-sky-700">{{ t(project.title) }}</router-link></h3>
      <p class="line-clamp-2 flex-1 text-sm leading-relaxed text-slate-600">{{ t(project.shortDescription) }}</p>
      <router-link :to="`/projects/${project.id}`" class="inline-flex items-center gap-2 border-t border-slate-100 pt-3 text-sm font-bold text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500">
        {{ t(siteCopyState.buttons.details) }}
        <ArrowLeft v-if="isRtl" class="h-4 w-4" /><ArrowRight v-else class="h-4 w-4" />
      </router-link>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';
import type { ProjectItem } from '@/types/data';
import { useI18n } from '@/composables/useI18n';
import { siteCopyState } from '@/services/dataService';

defineProps<{ project: ProjectItem }>();
const { isRtl, t } = useI18n();
</script>
