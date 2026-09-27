<template>
  <div class="legal-page mx-auto max-w-5xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
    <header class="mb-10 space-y-4 border-b border-slate-200 pb-8">
      <h1 class="text-4xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">
        {{ t(document.title) }}
      </h1>
      <p class="max-w-3xl text-base font-medium leading-relaxed text-slate-600">
        {{ t(document.introduction) }}
      </p>
      <p class="text-sm font-semibold text-slate-500">
        {{ t(siteCopyState.legal.lastUpdatedLabel) }}: {{ t(document.lastUpdated) }}
      </p>
    </header>

    <article class="space-y-9">
      <section v-for="section in document.sections" :id="section.id" :key="section.id" class="scroll-mt-28 space-y-3">
        <h2 class="text-2xl font-bold text-navy-900">{{ t(section.title) }}</h2>
        <p v-for="(paragraph, index) in section.paragraphs" :key="index" class="text-base leading-8 text-slate-600">
          {{ t(paragraph) }}
        </p>
      </section>
    </article>

    <div class="mt-12 border-t border-slate-200 pt-6">
      <router-link to="/contact" class="inline-flex min-h-11 items-center text-sm font-bold text-sky-600 hover:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">
        {{ t(siteCopyState.legal.contactLink) }}
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LegalDocumentContent } from '@/types/data';
import { useI18n } from '@/composables/useI18n';
import { siteCopyState } from '@/services/dataService';

defineProps<{ document: LegalDocumentContent }>();
const { t } = useI18n();
</script>
