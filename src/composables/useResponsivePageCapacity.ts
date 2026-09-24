import { computed, onMounted, onUnmounted, ref } from 'vue';

const DESKTOP_MIN_WIDTH = 1050;

export function useResponsivePageCapacity() {
  const viewportWidth = ref(typeof window === 'undefined' ? DESKTOP_MIN_WIDTH : window.innerWidth);
  const itemsPerPage = computed(() => viewportWidth.value >= DESKTOP_MIN_WIDTH ? 6 : 4);

  function updateViewportWidth() {
    viewportWidth.value = window.innerWidth;
  }

  onMounted(() => {
    updateViewportWidth();
    window.addEventListener('resize', updateViewportWidth);
  });
  onUnmounted(() => window.removeEventListener('resize', updateViewportWidth));

  return { itemsPerPage };
}
