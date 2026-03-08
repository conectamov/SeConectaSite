<script setup>
import { ref } from 'vue'

const props = defineProps({
  tester: { type: Object, required: true }
})

const flipped = ref(false)

const getInitials = (name) =>
  name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)

const vAnimate = {
  mounted(el) {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { el.classList.add('bt-visible'); obs.unobserve(el) }
      }),
      { threshold: 0.1 }
    )
    obs.observe(el)
  }
}
</script>

<template>
  <div
    v-animate
    class="bt-scene"
    :class="{ 'is-flipped': flipped }"
    @click="flipped = !flipped"
    role="button"
    :aria-label="`Ver mais sobre ${tester.name}`"
  >
    <div class="bt-inner">

      <!-- ═══════════════ FRENTE ═══════════════ -->
      <div class="bt-face bt-front">
        <!-- Barra gradiente no topo -->
        <div class="h-1 w-full flex-shrink-0 bg-gradient-to-r from-[#2464E8] to-[#079272]"></div>

        <!-- Bolha decorativa -->
        <div
          class="absolute top-0 left-0 w-24 h-24 rounded-full opacity-[0.06] pointer-events-none"
          style="background: radial-gradient(circle, #2464E8, transparent); transform: translate(-25%, -25%)"
        ></div>

        <div class="flex flex-col items-center flex-1 px-6 pt-6 pb-5 relative">
          <!-- Ícone verificado -->
          <div class="relative mb-4 flex-shrink-0">
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2464E8]/10 to-[#079272]/10 border border-[#2464E8]/15 flex items-center justify-center">
              <svg class="w-6 h-6 text-[#2464E8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <!-- Badge pulsante -->
            <span class="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#079272] border-2 border-white flex items-center justify-center">
              <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            </span>
          </div>

          <h4 class="text-[0.95rem] font-bold text-[#111] text-center tracking-[-0.02em] mb-1.5">
            {{ tester.name }}
          </h4>

          <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-[#2464E8]/8 border border-[#2464E8]/20 text-[#2464E8] rounded-full text-[0.66rem] font-semibold mb-4">
            <span class="w-1.5 h-1.5 rounded-full bg-[#2464E8] animate-pulse"></span>
            {{ tester.role }}
          </div>

          <p v-if="tester.feedback" class="text-[0.77rem] font-light text-[#777] text-center leading-relaxed italic line-clamp-3">
            "{{ tester.feedback }}"
          </p>
          <p v-else class="text-[0.72rem] text-[#bbb] text-center italic">Beta tester verificado</p>

          <p class="mt-auto pt-4 text-[0.62rem] text-[#ccc] flex items-center gap-1 select-none">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 10l5 5 5-5"/></svg>
            Clique para conhecer
          </p>
        </div>
      </div>

      <!-- ═══════════════ VERSO ════════════════ -->
      <div class="bt-face bt-back" style="background: #0c1b32">
        <div class="h-1 w-full flex-shrink-0 bg-gradient-to-r from-[#2464E8] to-[#079272]"></div>

        <!-- Orb -->
        <div
          class="absolute bottom-0 right-0 w-36 h-36 rounded-full opacity-[0.12] pointer-events-none"
          style="background: radial-gradient(circle, #079272, transparent); transform: translate(30%, 30%)"
        ></div>
        <div
          class="absolute inset-0 opacity-[0.04] pointer-events-none"
          style="background-image: linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px); background-size: 24px 24px;"
        ></div>

        <div class="flex flex-col flex-1 px-5 pt-5 pb-5 relative z-10">
          <!-- Mini header -->
          <div class="flex items-center gap-2.5 mb-4">
            <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-[#2464E8] to-[#079272] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              {{ getInitials(tester.name) }}
            </div>
            <div>
              <p class="text-[0.8rem] font-bold text-white leading-none">{{ tester.name }}</p>
              <p class="text-[0.62rem] text-[#079272] mt-0.5">{{ tester.role }}</p>
            </div>
          </div>

          <p v-if="tester.bio" class="text-[0.78rem] font-light text-white/60 leading-relaxed flex-1">
            {{ tester.bio }}
          </p>
          <p v-else-if="tester.feedback" class="text-[0.78rem] font-light text-white/60 leading-relaxed flex-1 italic">
            "{{ tester.feedback }}"
          </p>
          <p v-else class="text-[0.78rem] text-white/35 italic flex-1">
            Contribuiu para tornar a plataforma melhor para todos.
          </p>

          <div class="mt-4 flex items-center gap-2">
            <span class="text-[0.62rem] font-semibold px-2.5 py-1 rounded-full bg-[#079272]/20 border border-[#079272]/30 text-[#079272]">
              ✓ Verificado
            </span>
          </div>

          <p class="mt-3 text-[0.6rem] text-white/20 flex items-center gap-1 select-none">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 15l5-5 5 5"/></svg>
            Clique para voltar
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.bt-scene {
  perspective: 1200px;
  height: 268px;
  cursor: pointer;
  opacity: 0;
  transform: translateY(22px);
}

.bt-scene.bt-visible {
  animation: btFadeUp 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

@keyframes btFadeUp {
  to { opacity: 1; transform: translateY(0); }
}

.bt-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
}

@media (hover: hover) {
  .bt-scene:hover .bt-inner { transform: rotateY(180deg); }
}

.bt-scene.is-flipped .bt-inner { transform: rotateY(180deg); }

.bt-face {
  position: absolute;
  inset: 0;
  border-radius: 1rem;
  border: 1px solid #e8e4dc;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: white;
}

.bt-back {
  transform: rotateY(180deg);
  border-color: rgba(255, 255, 255, 0.07);
}
</style>
