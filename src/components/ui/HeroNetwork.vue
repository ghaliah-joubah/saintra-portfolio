<template>
  <div class="hero-network h-full w-full flex items-center justify-center">
    <svg viewBox="0 0 640 640" class="h-full w-full max-w-[680px] overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="network-halo"><stop class="network-halo-color" stop-color="#4a90e2" stop-opacity=".28" /><stop class="network-halo-color" offset="1" stop-color="#4a90e2" stop-opacity="0" /></radialGradient>
        <linearGradient id="network-line" x1="90" y1="90" x2="570" y2="550" gradientUnits="userSpaceOnUse"><stop class="network-line-start" stop-color="#44c8f5" stop-opacity=".2" /><stop class="network-line-middle" offset=".55" stop-color="#4a90e2" stop-opacity=".7" /><stop class="network-line-end" offset="1" stop-color="#193661" stop-opacity=".35" /></linearGradient>
      </defs>
      <circle cx="320" cy="320" r="300" fill="url(#network-halo)" />
      <g class="network-shape">
        <line v-for="line in lines" :key="line.id" :x1="line.a.x" :y1="line.a.y" :x2="line.b.x" :y2="line.b.y" stroke="url(#network-line)" :stroke-opacity="line.opacity" stroke-width="1.3" />
        <g class="network-face">
          <line
            v-for="line in faceLines"
            :key="line.id"
            :class="line.detail ? 'network-face-detail' : 'network-face-contour'"
            :x1="line.a.x"
            :y1="line.a.y"
            :x2="line.b.x"
            :y2="line.b.y"
            stroke="url(#network-line)"
          />
          <circle v-for="node in faceNodes" :key="node.id" class="network-node network-face-node" :cx="node.x" :cy="node.y" r="2.7" fill="#4a90e2" />
        </g>
        <circle v-for="node in nodes" :key="node.id" class="network-node" :cx="node.x" :cy="node.y" :r="node.depth > 0 ? 3.3 : 2.3" fill="#4a90e2" :fill-opacity="node.opacity" />
        <circle v-for="node in featuredNodes" :key="`glow-${node.id}`" class="network-featured-node" :cx="node.x" :cy="node.y" r="8" fill="#f04e37" opacity=".18" />
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

type FaceNode = { id: string; x: number; y: number };
const faceNodes: FaceNode[] = [
  { id: 'crown', x: 326, y: 178 }, { id: 'upper-forehead', x: 282, y: 194 },
  { id: 'forehead', x: 257, y: 228 }, { id: 'brow', x: 247, y: 274 },
  { id: 'nose-bridge', x: 238, y: 309 }, { id: 'nose-tip', x: 204, y: 337 },
  { id: 'nose-base', x: 239, y: 351 }, { id: 'upper-lip', x: 219, y: 369 },
  { id: 'lower-lip', x: 228, y: 383 }, { id: 'chin', x: 247, y: 416 },
  { id: 'jaw', x: 291, y: 443 }, { id: 'rear-jaw', x: 352, y: 425 },
  { id: 'back-neck', x: 389, y: 455 }, { id: 'back-head-lower', x: 401, y: 365 },
  { id: 'back-head', x: 408, y: 278 }, { id: 'back-head-upper', x: 382, y: 213 },
  { id: 'temple', x: 298, y: 267 }, { id: 'eye', x: 270, y: 294 },
  { id: 'cheek', x: 277, y: 340 }, { id: 'mouth-anchor', x: 270, y: 374 },
  { id: 'ear-top', x: 345, y: 291 }, { id: 'ear', x: 353, y: 329 },
  { id: 'ear-base', x: 342, y: 363 }, { id: 'inner-crown', x: 337, y: 230 }
];
const faceNode = Object.fromEntries(faceNodes.map((node) => [node.id, node]));
const faceConnections = [
  ['crown', 'upper-forehead', false], ['upper-forehead', 'forehead', false], ['forehead', 'brow', false],
  ['brow', 'nose-bridge', false], ['nose-bridge', 'nose-tip', false], ['nose-tip', 'nose-base', false],
  ['nose-base', 'upper-lip', false], ['upper-lip', 'lower-lip', false], ['lower-lip', 'chin', false],
  ['chin', 'jaw', false], ['jaw', 'rear-jaw', false], ['rear-jaw', 'back-neck', false],
  ['back-neck', 'back-head-lower', false], ['back-head-lower', 'back-head', false],
  ['back-head', 'back-head-upper', false], ['back-head-upper', 'crown', false],
  ['upper-forehead', 'temple', true], ['brow', 'eye', true], ['eye', 'temple', true],
  ['eye', 'cheek', true], ['nose-base', 'cheek', true], ['cheek', 'mouth-anchor', true],
  ['upper-lip', 'mouth-anchor', true], ['lower-lip', 'mouth-anchor', true], ['mouth-anchor', 'jaw', true],
  ['temple', 'inner-crown', true], ['inner-crown', 'crown', true], ['inner-crown', 'ear-top', true],
  ['temple', 'ear-top', true], ['ear-top', 'ear', true], ['ear', 'ear-base', true],
  ['ear-base', 'rear-jaw', true], ['cheek', 'ear', true], ['mouth-anchor', 'ear-base', true],
  ['ear-top', 'back-head', true], ['ear-base', 'back-head-lower', true], ['inner-crown', 'back-head-upper', true]
] as const;
const bridgeAnchors = ['crown', 'upper-forehead', 'nose-tip', 'jaw', 'back-neck', 'back-head', 'back-head-upper'] as const;
function nearestVisibleNode(point: FaceNode): Node {
  return nodes
    .filter((node) => node.depth > 0)
    .reduce((nearest, node) => {
      const nearestDistance = (nearest.x - point.x) ** 2 + (nearest.y - point.y) ** 2;
      const nodeDistance = (node.x - point.x) ** 2 + (node.y - point.y) ** 2;
      return nodeDistance < nearestDistance ? node : nearest;
    });
}
const faceLines = [
  ...faceConnections.map(([from, to, detail]) => ({ id: `${from}-${to}`, a: faceNode[from], b: faceNode[to], detail })),
  ...bridgeAnchors.map((from) => ({ id: `${from}-network`, a: faceNode[from], b: nearestVisibleNode(faceNode[from]), detail: true }))
];
</script>

<style scoped>
.network-shape { transform-origin: 50% 50%; animation: network-drift 7s linear infinite alternate; will-change: transform; }
.network-face { opacity: .62; }
.network-face-contour { stroke-width: 1.65; }
.network-face-detail { stroke-width: 1.15; opacity: .72; }
.network-face-node { opacity: .78; }
:global(.portfolio-shell[data-theme='dark']) .network-halo-color { stop-color: #44c8f5; }
:global(.portfolio-shell[data-theme='dark']) .network-line-start { stop-color: #44c8f5; }
:global(.portfolio-shell[data-theme='dark']) .network-line-middle { stop-color: #4a90e2; }
:global(.portfolio-shell[data-theme='dark']) .network-line-end { stop-color: #c0b0a3; }
:global(.portfolio-shell[data-theme='dark']) .network-node { fill: #44c8f5; }
:global(.portfolio-shell[data-theme='dark']) .network-featured-node { fill: #f04e37; }
@keyframes network-drift {
  from { transform: translate3d(-14px, 9px, 0) rotate(-5deg) scale(.98); }
  to { transform: translate3d(16px, -13px, 0) rotate(5deg) scale(1.03); }
}
@media (max-width: 480px) {
  .network-face-detail { display: none; }
  .network-face { opacity: .68; }
}
@media (prefers-reduced-motion: reduce) { .network-shape { animation: none; } }
</style>
