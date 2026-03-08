<template>
  <section
    class="relative overflow-hidden py-16 px-8 bg-none"
    aria-labelledby="hero-heading"
  >
    <!-- Orbs mais sutis -->
    <div
      class="absolute rounded-full blur-[60px] opacity-10 pointer-events-none w-[300px] h-[300px] top-[5%] right-[5%] bg-[#079272] max-sm:hidden"
      aria-hidden="true"
    ></div>
    <div
      class="absolute rounded-full blur-[60px] opacity-10 pointer-events-none w-[200px] h-[200px] bottom-[10%] right-[25%] bg-[#2464E8] max-sm:hidden"
      aria-hidden="true"
    ></div>

    <div class="relative z-10 max-w-[900px] mx-auto w-full">
      <!-- Eyebrow mais compacto -->
      <div
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="0"
        class="flex items-center gap-2 text-[0.7rem] font-medium tracking-[0.14em] uppercase mb-6"
      >
        <span class="w-[6px] h-[6px] rounded-full bg-green-500 relative before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-green-500 before:animate-ping"></span>
        <span>Feed ao vivo · {{ todayLabel }}</span>
      </div>

      <!-- Título reduzido -->
      <h1 id="hero-heading" class="font-extrabold text-black mb-4 leading-[1.1] tracking-[-0.03em] text-[clamp(2.5rem,7vw,5rem)]">
        Avalie os posts pendente
      </h1>

      <!-- Descrição mais compacta -->
      <p
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="350"
        class="font-medium text-[#079272] max-w-[440px] leading-relaxed mb-8 text-base"
      >
        Obrigado por ser a pessoa responsavel por moderar nossa comunidade.
      </p>
    </div>
  </section>
</template>

<script setup>
const todayLabel = new Date().toLocaleDateString('pt-BR', {
  weekday: 'long', day: '2-digit', month: 'long',
})
</script>

<style>
@keyframes orbFloat {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-40px) scale(1.05); }
}

@keyframes orbFloatReverse {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-40px) scale(1.05); }
}

.orb-1 {
  animation: orbFloat 8s ease-in-out infinite;
}

.orb-2 {
  animation: orbFloatReverse 11s ease-in-out infinite reverse;
}
</style>
