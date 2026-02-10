<template>
  <section
    class="relative min-h-[80vh] flex items-center justify-start overflow-hidden px-4 sm:px-6 lg:px-8"
    aria-labelledby="team-heading"
  >
    <div class="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#079272]/5 to-[#2464E8]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-[#2464E8]/5 to-[#079272]/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

    <div class="relative w-full max-w-7xl mx-auto">
      <div class="flex flex-col gap-8 lg:gap-12 items-center">
        <div class="w-full text-center">
          <h1
            id="team-heading"
            class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
            style="animation-delay: 0.2s"
            data-aos="fade-up"
          >
            Conheça nossa
            <span
              class="bg-gradient-to-r from-[#079272] via-[#0DA790] to-[#2464E8] bg-clip-text text-transparent animate-gradient bg-300"
            >
              equipe
            </span>
          </h1>
        </div>

        <p
          class="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed lg:leading-relaxed w-full max-w-4xl text-center"
          style="animation-delay: 0.3s"
          data-aos="fade-up"
        >
          Somos um grupo de apaixonados por tecnologia e educação, unidos para criar uma plataforma que transforma vidas através da conexão entre talentos e oportunidades.
        </p>

        <div class="flex flex-wrap gap-4 justify-center mt-4" data-aos="fade-up" style="animation-delay: 0.4s">
          <span class="px-4 py-2 bg-[#079272]/10 text-[#079272] rounded-full text-sm font-medium">
            Desenvolvimento
          </span>
          <span class="px-4 py-2 bg-[#0DA790]/10 text-[#0DA790] rounded-full text-sm font-medium">
            Design & Mídias
          </span>
          <span class="px-4 py-2 bg-[#2464E8]/10 text-[#2464E8] rounded-full text-sm font-medium">
            Beta Testers
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
@keyframes gradient-shift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient {
  background-size: 300% 300%;
  animation: gradient-shift 4s ease infinite;
}

.bg-300 {
  background-size: 300% 300%;
}

@media (max-width: 1024px) {
  .hero-section {
    min-height: 70vh;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}

@media (max-width: 640px) {
  .hero-section {
    min-height: 60vh;
  }
}
</style>