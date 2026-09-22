<template>
  <div
    ref="cardRef"
    class="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 text-center space-y-2 relative overflow-hidden"
  >
    <div class="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400">
      {{ animatedValue }}{{ stat.suffix }}
    </div>
    <div class="text-sm font-semibold text-slate-300">
      {{ t(stat.label) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import type { StatItem } from '@/data/company';
import { useI18n } from '@/composables/useI18n';

const props = defineProps<{
  stat: StatItem;
}>();

const { t } = useI18n();

const cardRef = ref<HTMLElement | null>(null);
const animatedValue = ref(0);
let observer: IntersectionObserver | null = null;
let animationFrameId: number | null = null;

function startCounter() {
  const target = props.stat.value;
  const duration = 1500; // ms
  const startTime = performance.now();

  function updateNumber(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Ease Out Quad
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
  // Respect prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    animatedValue.value = props.stat.value;
    return;
  }

  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
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
