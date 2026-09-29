<template>
  <button
    v-show="visible"
    ref="buttonRef"
    type="button"
    class="back-to-top-button group fixed z-40 grid h-11 w-11 place-items-center rounded-full border border-white/50 bg-navy-700 text-white shadow-xl transition-[background-color,border-color,box-shadow,bottom] duration-200 hover:border-sky-300 hover:bg-sky-500 hover:shadow-2xl focus-visible:border-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
    :style="{ insetInlineEnd: '20px', bottom: `${safeBottom}px` }"
    :aria-label="t(siteCopyState.common.backToTop)"
    @click="scrollToTop"
  ><ArrowUp class="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-focus-visible:-translate-y-0.5" /></button>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';
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
watch([visible, safeBottom], ([isVisible, bottom]) => {
  document.body.classList.toggle('back-to-top-visible', isVisible);
  document.documentElement.style.setProperty('--back-to-top-bottom', `${bottom}px`);
});
onMounted(() => { window.addEventListener('scroll', onScroll, { passive: true }); window.addEventListener('resize', onScroll); onScroll(); });
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
  window.removeEventListener('resize', onScroll);
  document.body.classList.remove('back-to-top-visible');
  document.documentElement.style.removeProperty('--back-to-top-bottom');
  if (frame) cancelAnimationFrame(frame);
});
</script>
