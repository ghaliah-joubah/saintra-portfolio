<template>
  <button
    v-show="visible"
    type="button"
    class="fixed bottom-6 z-40 rounded-full bg-navy-900 p-3 text-white shadow-xl transition-colors hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
    :class="isRtl ? 'left-6' : 'right-6'"
    :aria-label="t(siteCopyState.common.backToTop)"
    @click="scrollToTop"
  ><ArrowUp class="h-5 w-5" /></button>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { ArrowUp } from 'lucide-vue-next';
import { useI18n } from '@/composables/useI18n';
import { siteCopyState } from '@/services/dataService';

const { isRtl, t } = useI18n();
const visible = ref(false);
function onScroll() { visible.value = window.scrollY > 300; }
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
}
onMounted(() => { window.addEventListener('scroll', onScroll, { passive: true }); onScroll(); });
onUnmounted(() => window.removeEventListener('scroll', onScroll));
</script>
