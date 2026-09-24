<template>
  <button
    v-show="visible"
    ref="buttonRef"
    type="button"
    class="fixed z-40 rounded-full bg-navy-700 p-3 min-w-11 min-h-11 text-white shadow-xl ring-1 ring-white/60 transition-[background-color,bottom] duration-200 hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
    :style="{ insetInlineEnd: '20px', bottom: `${safeBottom}px` }"
    :aria-label="t(siteCopyState.common.backToTop)"
    @click="scrollToTop"
  ><ArrowUp class="h-5 w-5" /></button>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { ArrowUp } from 'lucide-vue-next';
import { useI18n } from '@/composables/useI18n';
import { siteCopyState } from '@/services/dataService';

const { t } = useI18n();
const visible = ref(false);
const safeBottom = ref(24);
const buttonRef = ref<HTMLElement | null>(null);
let frame = 0;
function updateSafePosition() {
  frame = 0;
  const button = buttonRef.value;
  const footer = document.querySelector('footer');
  if (!button || !footer || !visible.value) return;
  const footerRect = footer.getBoundingClientRect();
  if (footerRect.top >= window.innerHeight || footerRect.bottom <= 0) { safeBottom.value = 24; return; }
  const buttonRect = button.getBoundingClientRect();
  const protectedElements = [...footer.querySelectorAll('a, button, p')];
  let bottom = window.innerWidth < 640 ? 20 : 24;
  for (let attempt = 0; attempt < protectedElements.length; attempt++) {
    const top = window.innerHeight - bottom - buttonRect.height;
    const collision = protectedElements.map((el) => el.getBoundingClientRect()).find((rect) =>
      rect.bottom > top - 8 && rect.top < top + buttonRect.height + 8 &&
      rect.right > buttonRect.left - 8 && rect.left < buttonRect.right + 8
    );
    if (!collision) break;
    bottom = window.innerHeight - collision.top + 12;
  }
  safeBottom.value = Math.min(bottom, window.innerHeight - buttonRect.height - 92);
}
function onScroll() {
  visible.value = window.scrollY > 300;
  if (!frame) frame = requestAnimationFrame(updateSafePosition);
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
}
onMounted(() => { window.addEventListener('scroll', onScroll, { passive: true }); window.addEventListener('resize', onScroll); onScroll(); });
onUnmounted(() => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); if (frame) cancelAnimationFrame(frame); });
</script>
