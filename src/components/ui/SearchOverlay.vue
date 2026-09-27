<template>
  <transition name="navbar-search">
    <div v-if="open" ref="rootRef" class="navbar-search" @keydown.esc.prevent="close">
      <div class="navbar-search-field" :class="{ 'navbar-search-field--attached': showSearchPanel }">
        <label for="portfolio-search" class="sr-only">{{ t(siteCopyState.search.title) }}</label>
        <Search class="pointer-events-none absolute start-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
        <input
          id="portfolio-search"
          ref="inputRef"
          v-model="query"
          type="search"
          autocomplete="off"
          class="navbar-search-input"
          :class="{ 'navbar-search-input--clearable': query }"
          :placeholder="t(siteCopyState.search.placeholder)"
          :aria-activedescendant="activeResultId"
          aria-controls="portfolio-search-results"
          aria-autocomplete="list"
          @keydown.down.prevent="moveSelection(1)"
          @keydown.up.prevent="moveSelection(-1)"
          @keydown.enter.prevent="selectActiveResult"
        />
        <button
          v-if="query"
          type="button"
          class="navbar-search-clear"
          :aria-label="currentLang === 'ar' ? 'مسح البحث' : 'Clear search'"
          @click="clearSearch"
        >
          <X class="h-4 w-4" />
        </button>
      </div>

      <div
        v-if="showSearchPanel"
        id="portfolio-search-results"
        class="search-panel navbar-search-results"
        role="listbox"
        :aria-label="t(siteCopyState.search.title)"
      >
        <p v-if="results.length === 0" class="px-4 py-5 text-center text-sm font-bold text-slate-500" role="status">
          {{ t(siteCopyState.search.noResults) }}
        </p>

        <button
          v-for="(result, index) in results"
          :id="`search-result-${index}`"
          :key="result.id"
          type="button"
          role="option"
          :disabled="!result.route"
          :aria-disabled="!result.route"
          :aria-selected="selectedIndex === index"
          class="search-result w-full rounded-xl px-3 py-2.5 text-start transition-colors focus:outline-none disabled:cursor-default disabled:opacity-65"
          :class="selectedIndex === index ? 'bg-sky-50' : result.route ? 'hover:bg-slate-50' : ''"
          @mouseenter="result.route && (selectedIndex = index)"
          @click="selectResult(result)"
        >
          <span class="flex items-center justify-between gap-3">
            <span class="min-w-0 font-bold text-navy-900">
              <template v-for="(part, partIndex) in highlighted(t(result.title))" :key="partIndex">
                <mark v-if="part.match" class="rounded bg-sky-100 px-0.5 text-inherit">{{ part.text }}</mark>
                <template v-else>{{ part.text }}</template>
              </template>
            </span>
            <span class="shrink-0 text-[10px] font-bold uppercase tracking-wider text-sky-600">
              {{ t(siteCopyState.search.groups[result.group]) }}
            </span>
          </span>
          <span class="mt-0.5 block truncate text-xs leading-relaxed text-slate-600">{{ t(result.description) }}</span>
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { Search, X } from 'lucide-vue-next';
import { useRouter } from 'vue-router';
import { useI18n } from '@/composables/useI18n';
import { usePortfolioSearch, type PortfolioSearchResult } from '@/composables/usePortfolioSearch';
import { siteCopyState } from '@/services/dataService';

const props = defineProps<{ open: boolean; restoreFocus?: boolean }>();
const emit = defineEmits<{ close: [] }>();
const { currentLang, t } = useI18n();
const { search } = usePortfolioSearch();
const router = useRouter();
const query = ref('');
const selectedIndex = ref(-1);
const inputRef = ref<HTMLInputElement | null>(null);
const rootRef = ref<HTMLElement | null>(null);
let previousFocus: HTMLElement | null = null;

const results = computed(() => search(query.value));
const normalizedQueryLength = computed(() => query.value.trim().length);
const showSearchPanel = computed(() => normalizedQueryLength.value >= 2);
const activeResultId = computed(() => selectedIndex.value >= 0 ? `search-result-${selectedIndex.value}` : undefined);

watch(() => props.open, async (isOpen) => {
  if (isOpen) {
    previousFocus = document.activeElement as HTMLElement | null;
    query.value = '';
    selectedIndex.value = -1;
    await nextTick();
    inputRef.value?.focus();
  } else if (props.restoreFocus) {
    await nextTick();
    previousFocus?.focus();
  } else {
    previousFocus?.blur();
  }
});

watch(results, () => {
  if (selectedIndex.value >= results.value.length || !results.value[selectedIndex.value]?.route) selectedIndex.value = -1;
});

function close() {
  emit('close');
}

function clearSearch() {
  query.value = '';
  selectedIndex.value = -1;
  inputRef.value?.focus();
}

function moveSelection(direction: number) {
  const navigableIndexes = results.value
    .map((result, index) => result.route ? index : -1)
    .filter((index) => index >= 0);
  if (!navigableIndexes.length) return;
  const currentPosition = navigableIndexes.indexOf(selectedIndex.value);
  const nextPosition = currentPosition === -1
    ? (direction > 0 ? 0 : navigableIndexes.length - 1)
    : (currentPosition + direction + navigableIndexes.length) % navigableIndexes.length;
  selectedIndex.value = navigableIndexes[nextPosition];
  nextTick(() => document.getElementById(`search-result-${selectedIndex.value}`)?.scrollIntoView({ block: 'nearest' }));
}

function selectActiveResult() {
  const result = selectedIndex.value >= 0
    ? results.value[selectedIndex.value]
    : results.value.find((item) => item.route);
  if (result) selectResult(result);
}

async function selectResult(result: PortfolioSearchResult) {
  if (!result.route) return;
  close();
  await router.push(result.route);
}

function highlighted(value: string) {
  const needle = query.value.trim();
  if (needle.length < 2) return [{ text: value, match: false }];
  const escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const parts = value.split(new RegExp(`(${escaped})`, 'gi'));
  return parts.filter(Boolean).map((part) => ({ text: part, match: part.toLocaleLowerCase() === needle.toLocaleLowerCase() }));
}

function handleOutsidePointer(event: PointerEvent) {
  if ((event.target as Element | null)?.closest('.nav-search-trigger')) return;
  if (props.open && rootRef.value && !rootRef.value.contains(event.target as Node)) close();
}

watch(currentLang, () => { selectedIndex.value = -1; });
onMounted(() => document.addEventListener('pointerdown', handleOutsidePointer));
onBeforeUnmount(() => document.removeEventListener('pointerdown', handleOutsidePointer));
</script>
