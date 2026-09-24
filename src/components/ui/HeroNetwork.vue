<template>
  <div class="hero-network h-full w-full flex items-center justify-center">
    <svg viewBox="0 0 640 640" class="h-full w-full max-w-[680px] overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="network-halo"><stop stop-color="#4a90e2" stop-opacity=".28" /><stop offset="1" stop-color="#4a90e2" stop-opacity="0" /></radialGradient>
        <linearGradient id="network-line" x1="90" y1="90" x2="570" y2="550" gradientUnits="userSpaceOnUse"><stop stop-color="#44c8f5" stop-opacity=".2" /><stop offset=".55" stop-color="#4a90e2" stop-opacity=".7" /><stop offset="1" stop-color="#193661" stop-opacity=".35" /></linearGradient>
      </defs>
      <circle cx="320" cy="320" r="300" fill="url(#network-halo)" />
      <g class="network-shape">
        <line v-for="line in lines" :key="line.id" :x1="line.a.x" :y1="line.a.y" :x2="line.b.x" :y2="line.b.y" stroke="url(#network-line)" :stroke-opacity="line.opacity" stroke-width="1.3" />
        <circle v-for="node in nodes" :key="node.id" :cx="node.x" :cy="node.y" :r="node.depth > 0 ? 3.3 : 2.3" fill="#4a90e2" :fill-opacity="node.opacity" />
        <circle v-for="node in featuredNodes" :key="`glow-${node.id}`" :cx="node.x" :cy="node.y" r="8" fill="#f04e37" opacity=".18" />
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
type Node = { id: number; x: number; y: number; depth: number; opacity: number };
const rings = 9;
const columns = 15;
const nodes: Node[] = [];
for (let row = 0; row < rings; row++) {
  const latitude = -Math.PI / 2 + (row + .5) * Math.PI / rings;
  for (let column = 0; column < columns; column++) {
    const longitude = column * Math.PI * 2 / columns + row * .14;
    const depth = Math.cos(latitude) * Math.cos(longitude);
    nodes.push({
      id: row * columns + column,
      x: 320 + 250 * Math.cos(latitude) * Math.sin(longitude),
      y: 320 + 250 * Math.sin(latitude) + 30 * depth,
      depth,
      opacity: depth > -.2 ? .6 + .35 * Math.max(depth, 0) : .23
    });
  }
}
const lines: { id: string; a: Node; b: Node; opacity: number }[] = [];
for (let row = 0; row < rings; row++) {
  for (let column = 0; column < columns; column++) {
    const a = nodes[row * columns + column];
    const neighbors = [nodes[row * columns + (column + 1) % columns]];
    if (row < rings - 1) {
      neighbors.push(nodes[(row + 1) * columns + column]);
      if (column % 2 === 0) neighbors.push(nodes[(row + 1) * columns + (column + 1) % columns]);
    }
    for (const b of neighbors) lines.push({ id: `${a.id}-${b.id}`, a, b, opacity: Math.min(a.opacity, b.opacity) });
  }
}
const featuredNodes = nodes.filter((node) => node.depth > .4 && node.id % 11 === 0);
</script>

<style scoped>
.network-shape { transform-origin: 50% 50%; animation: network-drift 7s linear infinite alternate; will-change: transform; }
@keyframes network-drift {
  from { transform: translate3d(-14px, 9px, 0) rotate(-5deg) scale(.98); }
  to { transform: translate3d(16px, -13px, 0) rotate(5deg) scale(1.03); }
}
@media (prefers-reduced-motion: reduce) { .network-shape { animation: none; } }
</style>
