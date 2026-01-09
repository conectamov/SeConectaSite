<template>
  <div class="fast-bubbles">
    <div
      v-for="(bubble, index) in bubbles"
      :key="index"
      class="bubble"
      :style="{
        left: `${bubble.x}%`,
        width: `${bubble.size}px`,
        height: `${bubble.size}px`,
        animationDuration: `${bubble.speed}s`,
        animationDelay: `${bubble.delay}s`,
        opacity: bubble.opacity,
      }"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Bolhas ULTRA RÁPIDAS
const bubbles = ref([
  // Primeira leva (mais rápidas)
  { x: 5, size: 15, speed: 2, delay: 0, opacity: 0.25 },
  { x: 95, size: 12, speed: 1.8, delay: 0.1, opacity: 0.22 },
  { x: 20, size: 18, speed: 2.2, delay: 0.05, opacity: 0.23 },
  { x: 80, size: 14, speed: 1.9, delay: 0.15, opacity: 0.21 },
  { x: 35, size: 16, speed: 2.1, delay: 0.08, opacity: 0.24 },
  { x: 65, size: 13, speed: 1.7, delay: 0.12, opacity: 0.2 },
  { x: 50, size: 10, speed: 1.5, delay: 0, opacity: 0.3 },

  // Segunda leva
  { x: 15, size: 20, speed: 2.5, delay: 0.3, opacity: 0.18 },
  { x: 85, size: 22, speed: 2.8, delay: 0.4, opacity: 0.16 },
  { x: 40, size: 25, speed: 3, delay: 0.5, opacity: 0.15 },
  { x: 70, size: 18, speed: 2.3, delay: 0.35, opacity: 0.19 },
  { x: 25, size: 28, speed: 3.2, delay: 0.6, opacity: 0.14 },
  { x: 75, size: 24, speed: 2.9, delay: 0.45, opacity: 0.17 },
  { x: 55, size: 30, speed: 3.5, delay: 0.7, opacity: 0.12 },

  // Bolhas maiores (um pouco mais lentas para contraste)
  { x: 10, size: 40, speed: 4, delay: 0, opacity: 0.1 },
  { x: 90, size: 35, speed: 4.5, delay: 0.2, opacity: 0.09 },
  { x: 30, size: 45, speed: 5, delay: 0.4, opacity: 0.08 },
  { x: 70, size: 50, speed: 5.5, delay: 0.6, opacity: 0.07 },
  { x: 50, size: 60, speed: 6, delay: 0.8, opacity: 0.06 },
])

// Criar mais bolhas dinamicamente
const createMoreBubbles = () => {
  const moreBubbles = []
  for (let i = 0; i < 15; i++) {
    moreBubbles.push({
      x: Math.random() * 100,
      size: Math.random() * 20 + 5,
      speed: Math.random() * 2 + 1,
      delay: Math.random() * 2,
      opacity: Math.random() * 0.15 + 0.1,
    })
  }
  bubbles.value = [...bubbles.value, ...moreBubbles]
}

// Opcional: chamar para criar mais bolhas
// createMoreBubbles()
</script>

<style scoped>
.fast-bubbles {
  @apply fixed inset-0 overflow-hidden pointer-events-none z-0;
}

.bubble {
  @apply absolute rounded-full bottom-[-50px] animate-fast-float z-10;
  background: radial-gradient(
    circle,
    rgba(7, 146, 114, 0.4) 30%,
    rgba(36, 100, 232, 0.5) 70%,
    transparent 100%
  );
  filter: blur(0.5px);
  will-change: transform;
}

/* Animação ULTRA RÁPIDA */
@keyframes fast-float {
  0% {
    transform: translateY(0) scale(0.8) rotate(0deg);
    opacity: 0;
  }
  5% {
    opacity: var(--bubble-opacity, 0.1);
    transform: translateY(0) scale(1) rotate(0deg);
  }
  95% {
    opacity: var(--bubble-opacity, 0.1);
  }
  100% {
    transform: translateY(calc(-100vh - 50px)) scale(1.2) rotate(90deg);
    opacity: 0;
  }
}

.animate-fast-float {
  animation: fast-float linear infinite;
  opacity: var(--bubble-opacity, 0.1);
}

/* Efeito de pulsação para mais dinamismo */
.bubble:nth-child(odd) {
  animation-timing-function: ease-in-out;
}

.bubble:nth-child(even) {
  animation-timing-function: linear;
}

/* Algumas bolhas com movimento lateral */
.bubble:nth-child(3n) {
  animation-name: fast-float-with-drift;
}

@keyframes fast-float-with-drift {
  0% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 0;
  }
  5% {
    opacity: var(--bubble-opacity, 0.1);
  }
  50% {
    transform: translate(20px, -50vh) rotate(45deg);
  }
  95% {
    opacity: var(--bubble-opacity, 0.1);
  }
  100% {
    transform: translate(10px, calc(-100vh - 50px)) rotate(90deg);
    opacity: 0;
  }
}

/* Responsividade */
@media (max-width: 768px) {
  .bubble {
    /* Manter rápido em mobile */
    animation-duration: calc(var(--speed) * 0.9) !important;
  }
}

/* Acessibilidade */
@media (prefers-reduced-motion: reduce) {
  .bubble {
    animation: none !important;
    opacity: 0.03 !important;
  }
}
</style>
