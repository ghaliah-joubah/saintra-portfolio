<template>
  <div class="hero-network" aria-hidden="true">
    <div class="hero-artwork-motion">
      <div class="hero-artwork-frame">
        <img
          :src="heroArtwork"
          alt=""
          class="hero-artwork-image"
          draggable="false"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const heroArtwork = new URL(
  '../../../docs/Full Brand/Hero_Visual_Reference.png',
  import.meta.url
).href;
</script>

<style scoped>
.hero-network {
  display: grid;
  place-items: center;
  overflow: visible;
  perspective: 1100px;
}

.hero-artwork-motion,
.hero-artwork-frame {
  width: 100%;
  height: 100%;
}

.hero-artwork-motion {
  transform-origin: 55% 52%;
  transform-style: preserve-3d;
  animation: artwork-drift 9s ease-in-out infinite;
  will-change: transform;
}

.hero-artwork-frame {
  position: relative;
  overflow: hidden;
}

.hero-artwork-image {
  position: absolute;
  inset-block-start: 50%;
  right: 0;
  width: auto;
  max-width: none;
  height: 100%;
  user-select: none;
  transform: translateY(-50%);
  filter: saturate(1.04) contrast(1.02);
}

@keyframes artwork-drift {
  0%, 100% {
    transform: translate3d(0, 0, 0) rotateY(0deg) scale(1);
  }
  20% {
    transform: translate3d(0, -5px, 24px) rotateY(.6deg) scale(1.018);
  }
  40% {
    transform: translate3d(-11px, 1px, 8px) rotateY(-2deg) scale(1.008);
  }
  60% {
    transform: translate3d(0, -3px, 18px) rotateY(0deg) scale(1.014);
  }
  80% {
    transform: translate3d(11px, 1px, 8px) rotateY(2deg) scale(1.008);
  }
}

@media (max-width: 1049px) {
  .hero-artwork-motion {
    animation-name: artwork-drift-mobile;
  }
}

@keyframes artwork-drift-mobile {
  0%, 100% {
    transform: translate3d(0, 0, 0) rotateY(0deg) scale(1);
  }
  25% {
    transform: translate3d(-5px, -3px, 10px) rotateY(-.8deg) scale(1.008);
  }
  50% {
    transform: translate3d(0, -5px, 14px) rotateY(0deg) scale(1.012);
  }
  75% {
    transform: translate3d(5px, -2px, 10px) rotateY(.8deg) scale(1.008);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-artwork-motion {
    animation: none;
    transform: none;
  }
}
</style>
