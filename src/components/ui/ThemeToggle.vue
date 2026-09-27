<template>
  <button
    type="button"
    class="theme-toggle inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-xl transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
    :class="showLabel ? 'px-3' : 'px-2'"
    :aria-label="label"
    :title="label"
    @click="toggleTheme"
  >
    <Moon v-if="!isDark" class="h-5 w-5 shrink-0" aria-hidden="true" />
    <Sun v-else class="h-5 w-5 shrink-0" aria-hidden="true" />
    <span v-if="showLabel" class="text-sm font-bold">
      {{ isDark ? t(siteCopyState.theme.lightMode) : t(siteCopyState.theme.darkMode) }}
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Moon, Sun } from 'lucide-vue-next';
import { useI18n } from '@/composables/useI18n';
import { useTheme } from '@/composables/useTheme';
import { siteCopyState } from '@/services/dataService';

withDefaults(defineProps<{ showLabel?: boolean }>(), { showLabel: false });

const { t } = useI18n();
const { isDark, toggleTheme } = useTheme();
const label = computed(() => t(isDark.value ? siteCopyState.theme.switchToLight : siteCopyState.theme.switchToDark));
</script>
