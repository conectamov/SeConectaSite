<script setup>
import { ref } from 'vue'

const props = defineProps({
  member: { type: Object, required: true }
})

const flipped = ref(false)

const getInitials = (name) =>
  name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)

const vAnimate = {
  mounted(el) {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { el.classList.add('card-visible'); obs.unobserve(el) }
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
    class="card-scene"
    :class="{ 'is-flipped': flipped }"
    role="button"
    :aria-label="`Ver mais sobre ${member.name}`"
  >
    <div class="card-inner">

      <div class="card-face card-front">
        <!-- Barra de cor no topo -->
        <div
          class="h-1 w-full flex-shrink-0"
          :style="{ background: `linear-gradient(90deg, ${member.colorA}, ${member.colorB})` }"
        ></div>

        <!-- Orb decorativo -->
        <div
          class="absolute top-0 right-0 w-32 h-32 rounded-full opacity-[0.07] pointer-events-none"
          :style="{ background: `radial-gradient(circle, ${member.colorA}, transparent)`, transform: 'translate(30%, -30%)' }"
        ></div>

        <div class="flex flex-col items-center flex-1 px-6 pt-6 pb-5 relative">
          <!-- Avatar -->
          <div
            class="w-[128px] h-[128px] rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-8 shadow-md flex-shrink-0"
            :style="{ background: `linear-gradient(135deg, ${member.colorA}, ${member.colorB})` }"
          >

            <img v-if="member.image" :src="member.image">
            <span v-else>{{ getInitials(member.name) }}</span>
          </div>


          <!-- Nome -->
          <h3 class="text-[0.97rem] font-bold text-[#111] text-center tracking-[-0.02em] leading-snug mb-2">
            {{ member.name }}
          </h3>

          <!-- Role badge -->
          <span
            class="inline-flex items-center gap-1.5 text-[0.68rem] font-semibold px-3 py-1 rounded-full mb-4"
            :style="{ background: member.colorA + '18', border: `1px solid ${member.colorA}38`, color: member.colorA }"
          >
            <span class="w-1.5 h-1.5 rounded-full flex-shrink-0" :style="{ background: member.colorA }"></span>
            {{ member.role }}
          </span>

          <!-- Skills preview -->
          <div v-if="member.skills?.length" class="flex flex-wrap gap-1.5 justify-center">
            <span
              v-for="s in member.skills.slice(0, 3)" :key="s"
              class="text-[0.62rem] font-medium px-2 py-0.5 bg-[#f7f5f0] border border-[#e8e4dc] text-[#888] rounded-full"
            >{{ s }}</span>
          </div>

          <!-- Hint de interação -->
          <p class="mt-auto pt-5 text-[0.62rem] text-[#ccc] flex items-center gap-1 select-none">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 10l5 5 5-5"/></svg>
            Clique para conhecer
          </p>
        </div>
      </div>

      <!-- ═══════════════ VERSO ════════════════ -->
      <div class="card-face card-back" style="background: #0c1b32">
        <!-- Barra de cor no topo -->
        <div
          class="h-1 w-full flex-shrink-0"
          :style="{ background: `linear-gradient(90deg, ${member.colorA}, ${member.colorB})` }"
        ></div>

        <!-- Orb de fundo -->
        <div
          class="absolute bottom-0 left-0 w-44 h-44 rounded-full opacity-[0.12] pointer-events-none"
          :style="{ background: `radial-gradient(circle, ${member.colorB}, transparent)`, transform: 'translate(-30%, 30%)' }"
        ></div>
        <!-- Grid sutil -->
        <div
          class="absolute inset-0 opacity-[0.04] pointer-events-none"
          style="background-image: linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px); background-size: 26px 26px;"
        ></div>

        <div class="flex flex-col flex-1 px-5 pt-5 pb-5 relative z-10">
          <!-- Mini header -->
          <div class="flex items-center gap-2.5 mb-4">
            <div
              class="w-8 h-8 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
              :style="{ background: `linear-gradient(135deg, ${member.colorA}, ${member.colorB})` }"
            >{{ getInitials(member.name) }}</div>
            <div class="min-w-0">
              <p class="text-[0.8rem] font-bold text-white leading-none truncate">{{ member.name }}</p>
              <p class="text-[0.62rem] mt-0.5 truncate" :style="{ color: member.colorA }">{{ member.role }}</p>
            </div>
          </div>

          <!-- Descrição -->
          <p class="text-[0.78rem] font-light text-white/60 leading-relaxed flex-1 line-clamp-5">
            {{ member.description || 'Descrição em breve.' }}
          </p>

          <!-- Skills (verso) -->
          <div v-if="member.skills?.length" class="flex flex-wrap gap-1.5 mt-4">
            <span
              v-for="s in member.skills" :key="s"
              class="text-[0.6rem] font-semibold px-2 py-0.5 rounded-full"
              :style="{ background: member.colorA + '20', border: `1px solid ${member.colorA}40`, color: member.colorA }"
            >{{ s }}</span>
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
.card-scene {
  perspective: 1200px;
  height: 300px;
  cursor: pointer;
  opacity: 0;
  transform: translateY(22px);
}

.card-scene.card-visible {
  animation: cardFadeUp 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

@keyframes cardFadeUp {
  to { opacity: 1; transform: translateY(0); }
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
}

@media (hover: hover) {
  .card-scene:hover .card-inner {
    transform: rotateY(180deg);
  }
}

.card-scene.is-flipped .card-inner {
  transform: rotateY(180deg);
}


.card-face {
  position: absolute;
  inset: 0;
  border-radius: 1rem;
  border: 1px solid #e8e4dc;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.card-back {
  transform: rotateY(180deg);
  border-color: rgba(255, 255, 255, 0.07);
}
</style>
