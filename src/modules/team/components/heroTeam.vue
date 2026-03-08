<template>
  <section class="relative overflow-hidden" aria-labelledby="team-heading">

    <div class="relative bg-[#0c1b32] px-6 sm:px-10 md:px-16 lg:px-24 pt-20 pb-14 overflow-hidden">

      <!-- Orbs de ambiente -->
      <div
        class="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style="background: radial-gradient(circle, #079272 0%, transparent 65%); opacity: 0.12; transform: translate(-35%, -40%)"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-[380px] h-[380px] rounded-full pointer-events-none"
        style="background: radial-gradient(circle, #2464E8 0%, transparent 65%); opacity: 0.10; transform: translate(30%, 30%)"
      ></div>

      <!-- Grid sutil -->
      <div
        class="absolute inset-0 pointer-events-none opacity-[0.035]"
        style="background-image: linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px); background-size: 56px 56px;"
      ></div>

      <div class="relative z-10 max-w-5xl mx-auto">

        <!-- Eyebrow -->
        <div class="flex items-center gap-2.5 mb-8" data-aos="fade-up">
          <span class="relative w-2 h-2 flex-shrink-0">
            <span class="absolute inset-0 rounded-full bg-[#079272] animate-ping opacity-60"></span>
            <span class="relative w-2 h-2 rounded-full bg-[#079272] block"></span>
          </span>
          <span class="text-[0.68rem] font-semibold tracking-[0.22em] uppercase text-white/35">
            SeConecta · Nossa equipe
          </span>
        </div>

        <!-- Título -->
        <h1
          id="team-heading"
          class="text-[clamp(2.4rem,5.5vw,4.2rem)] font-extrabold text-white leading-[1.05] tracking-[-0.04em] mb-6"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          Pessoas que<br>
          <em class="not-italic bg-gradient-to-r from-[#079272] to-[#2464E8] bg-clip-text text-transparent">
            constroem juntas.
          </em>
        </h1>

        <!-- Subtítulo -->
        <p
          class="text-[0.97rem] font-light text-white/45 max-w-[530px] leading-relaxed mb-12"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Uma equipe de jovens cuja trajetória foi transformada ao encontrar as oportunidades certas — trabalhando para levar o mesmo a estudantes em todo o Brasil.
        </p>

        <!-- Stats -->
        <div class="flex flex-wrap gap-8 items-center mb-12" data-aos="fade-up" data-aos-delay="220">
          <div v-for="stat in stats" :key="stat.label" class="flex items-center gap-3">
            <div
              class="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-base"
              :style="{ background: stat.color + '1a', border: `1px solid ${stat.color}35`, color: stat.color }"
            >{{ stat.icon }}</div>
            <div>
              <div class="text-[1.1rem] font-bold text-white leading-none">{{ stat.value }}</div>
              <div class="text-[0.62rem] text-white/30 mt-0.5 uppercase tracking-wider font-medium">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Tags de departamentos -->
        <div class="flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="290">
          <span
            v-for="dept in departments" :key="dept.label"
            class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[0.7rem] font-semibold"
            :style="{ background: dept.color + '15', border: `1px solid ${dept.color}30`, color: dept.color }"
          >
            <span class="w-1.5 h-1.5 rounded-full flex-shrink-0" :style="{ background: dept.color }"></span>
            {{ dept.label }}
          </span>
        </div>
      </div>

      <div
        class="absolute bottom-0 left-0 right-0 h-px"
        style="background: linear-gradient(90deg, transparent 0%, #079272 40%, #2464E8 60%, transparent 100%)"
      ></div>
    </div>

  </section>
</template>

<script setup>
const stats = [
  { value: '3',    label: 'Diretores',    icon: '◈', color: '#2464E8' },
  { value: '6',  label: 'Embaixadores', icon: '◎', color: '#079272' },
  { value: '44', label: 'Beta Testers', icon: '⚡', color: '#F59E0B' },
]

const departments = [
  { label: 'Administração',   color: '#2464E8' },
  { label: 'Tecnologia',      color: '#079272' },
  { label: 'Design & Mídias', color: '#0DA790' },
  { label: 'Embaixadores',    color: '#F59E0B' },
]
</script>
