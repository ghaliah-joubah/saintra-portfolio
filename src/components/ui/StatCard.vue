<template>
  <div
    ref="cardRef"
    class="stat-card bg-white section-radius-inner border border-slate-200 text-center space-y-3 shadow-sm hover:shadow-md hover:border-sky-200 hover:-translate-y-1 transition-all relative"
  >
    <div class="stat-value font-extrabold text-navy-900 tracking-tight">
      {{ animatedValue }}<span class="text-sky-500">{{ stat.suffix }}</span>
    </div>
    <div class="stat-label font-bold text-slate-500 uppercase tracking-wide">
      {{ t(stat.label) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import type { StatItem } from '@/types/data';
import { useI18n } from '@/composables/useI18n';

const props = defineProps<{
  stat: StatItem;
}>();

const { t } = useI18n();

const cardRef = ref<HTMLElement | null>(null);
const animatedValue = ref(0);
let observer: IntersectionObserver | null = null;
let animationFrameId: number | null = null;
let hasAnimated = false; // Prevent restarting

function startCounter() {
  const target = props.stat.value;
  const duration = 1500; // ms
  const startTime = performance.now();

  function updateNumber(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const easeProgress = 1 - (1 - progress) * (1 - progress);
    animatedValue.value = Math.floor(easeProgress * target);

    if (progress < 1) {
      animationFrameId = requestAnimationFrame(updateNumber);
    } else {
      animatedValue.value = target;
    }
  }

  animationFrameId = requestAnimationFrame(updateNumber);
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    animatedValue.value = props.stat.value;
    hasAnimated = true;
    return;
  }

  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        hasAnimated = true;
        startCounter();
        if (observer && cardRef.value) {
          observer.unobserve(cardRef.value);
        }
      }
    },
    { threshold: 0.2 }
  );

  if (cardRef.value) {
    observer.observe(cardRef.value);
  }
});

onUnmounted(() => {
  if (observer) observer.disconnect();
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
});
</script>
