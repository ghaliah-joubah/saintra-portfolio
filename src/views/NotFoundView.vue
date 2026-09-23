<template>
  <div class="py-24 max-w-md mx-auto text-center px-4 space-y-6">
    <div class="w-20 h-20 rounded-3xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 font-extrabold text-3xl mx-auto">
      404
    </div>
    <h1 class="text-3xl font-extrabold text-navy-900">{{ t(siteCopyState.common.notFoundTitle) }}</h1>
    <p class="text-slate-600 text-sm">{{ t(siteCopyState.common.notFoundDescription) }}</p>
    <div>
      <router-link
        to="/"
        class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 text-white font-semibold text-sm hover:bg-sky-600 transition-colors"
      >
        <span>{{ t(siteCopyState.buttons.backToHome) }}</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '@/composables/useI18n';
import { siteCopyState } from '@/services/dataService';

const { t } = useI18n();
</script>
