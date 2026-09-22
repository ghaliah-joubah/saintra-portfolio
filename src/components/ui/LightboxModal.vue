<template>
  <transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md"
      @click.self="close"
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox Zoom"
    >
      <div class="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center space-y-4">

        <!-- Close Button -->
        <button
          @click="close"
          class="absolute -top-12 right-0 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
          aria-label="Close Lightbox"
        >
          <X class="w-6 h-6" />
        </button>

        <!-- Main Image -->
        <div class="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl max-h-[75vh]">
          <img
            :src="images[currentIndex]"
            alt="Project Lightbox Image"
            class="max-h-[75vh] w-auto object-contain"
          />
        </div>

        <!-- Navigation Arrows (if multiple images) -->
        <div v-if="images.length > 1" class="flex items-center gap-6 pt-2">
          <button
            @click="prev"
            class="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
            aria-label="Previous image"
          >
            <ChevronLeft class="w-6 h-6" />
          </button>

          <span class="text-sm font-semibold text-slate-400">
            {{ currentIndex + 1 }} / {{ images.length }}
          </span>

          <button
            @click="next"
            class="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
            aria-label="Next image"
          >
            <ChevronRight class="w-6 h-6" />
          </button>
        </div>

      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { X, ChevronLeft, ChevronRight } from 'lucide-vue-next';

const props = defineProps<{
  isOpen: boolean;
  images: string[];
  initialIndex?: number;
}>();

const emit = defineEmits(['close']);

const currentIndex = ref(props.initialIndex || 0);

watch(() => props.initialIndex, (val) => {
  if (val !== undefined) currentIndex.value = val;
});

function close() {
  emit('close');
}

function next() {
  if (props.images.length === 0) return;
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
}

function prev() {
  if (props.images.length === 0) return;
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
}

function handleKeydown(e: KeyboardEvent) {
  if (!props.isOpen) return;
  if (e.key === 'Escape') close();
  if (e.key === 'ArrowRight') next();
  if (e.key === 'ArrowLeft') prev();
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>
