<template>
  <section class="relative overflow-hidden" aria-labelledby="team-heading">

    <div class="relative px-6 sm:px-10 md:px-16 lg:px-24 pt-20 pb-14 overflow-hidden">



      <div class="relative z-10 max-w-5xl mx-auto">

        <div class="flex items-center gap-2.5 mb-8" data-aos="fade-up">
          <span class="relative w-2 h-2 flex-shrink-0">
            <span class="absolute inset-0 rounded-full bg-[#079272] animate-ping opacity-60"></span>
            <span class="relative w-2 h-2 rounded-full bg-[#079272] block"></span>
          </span>
          <span class="text-[0.68rem] font-semibold tracking-[0.22em] uppercase text-black">
            SeConecta · Nossa equipe
          </span>
        </div>

        <!-- Título -->
        <h1
          id="team-heading"
          class="text-[clamp(2.4rem,5.5vw,4.2rem)] font-extrabold text-black leading-[1.05] tracking-[-0.04em] mb-6"
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
          class="text-[0.97rem] font-light text-black max-w-[530px] leading-relaxed mb-12"
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
              <div class="text-[1.1rem] font-bold text-black leading-none">{{ stat.value }}</div>
              <div class="text-[0.62rem] text-black mt-0.5 uppercase tracking-wider font-medium">{{ stat.label }}</div>
            </div>
          </div>
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
</script>
