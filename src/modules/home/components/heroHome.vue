<template>
   <section
      class="min-h-[80vh] md:min-h-[90vh] flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-12 md:py-0 w-[100vw]"
      aria-labelledby="hero-heading"
      data-aos="fade-up-right"
   >
      <div class="w-full mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
         <!-- Text Content -->
         <div
            class="w-screen lg:w-1/2 -mx-4 lg:mx-0 px-4 sm:px-6 md:px-8 lg:px-0 flex flex-col items-start"
            style="animation: slideInLeft 0.8s ease-out"
         >
            <h1
               id="hero-heading"
               class="w-full text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold leading-tight text-gray-900 text-center lg:text-left"
               style="animation: fadeInUp 0.8s ease-out 0.1s both"
            >
               Descubra o seu
               <span
                  class="bg-gradient-to-r from-[#079272] to-[#2464E8] bg-clip-text text-transparent block sm:inline"
                  style="background-size: 200% 200%; animation: gradientShift 3s ease infinite"
               >
                  caminho
               </span>
               com referência e
               <span
                  class="bg-gradient-to-r from-[#079272] to-[#2464E8] bg-clip-text text-transparent block sm:inline"
                  style="background-size: 200% 200%; animation: gradientShift 3s ease infinite"
               >
                  conexão
               </span>
            </h1>

            <p
               class="mt-4 sm:mt-6 text-base sm:text-lg text-gray-800 leading-relaxed text-center lg:text-left"
               style="animation: fadeInUp 0.8s ease-out 0.2s both"
            >
            Veja estudantes com interesses parecidos, acompanhe o que eles estudam e receba conteúdos e oportunidades relacionadas ao longo do caminho.            </p>

            <div
               class="w-full mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 sm:align-items-center justify-center lg:justify-start group"
               style="animation: fadeInUp 0.8s ease-out 0.3s both"
            >
               <a
                  class="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-[#079272] to-[#2464E8] hover:opacity-90 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#2464E8] focus:ring-offset-2 hover:shadow-[0_8px_25px_rgba(7,146,114,0.4)] shadow-[0_4px_15px_rgba(7,146,114,0.3)]"
                  href="https://wa.me/558599783928"
                  aria-label="Acessar nosso bot de assistência"
               >
                  Acesse nosso bot
                  <span
                     class="transition-transform duration-200 group-hover:translate-x-1"
                     aria-hidden="true"
                  >
                     →
                  </span>
               </a>

               <a
                  class="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-lg font-medium border-2 border-[#079272] text-[#079272] hover:bg-[#079272] hover:text-white transition-all duration-200"
                  href="/sobre"
                  aria-label="Explorar mais sobre o Conecta"
               >
                  Saiba mais
               </a>
            </div>
         </div>
      </div>

      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
         <div class="flex flex-col items-center gap-2 text-gray-600">
            <span class="text-sm">Role para saber mais</span>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
         </div>
      </div>



   </section>
</template>

<script setup>
</script>

<style scoped>

<style scoped>
.hero {
   height: 100svh;
   height: 95vh; /* fallback */
   position: relative;
}

@keyframes fadeInUp {
   from {
      opacity: 0;
      transform: translateY(20px);
   }
   to {
      opacity: 1;
      transform: translateY(0);
   }
}

@keyframes slideInLeft {
   from {
      opacity: 0;
      transform: translateX(-30px);
   }
   to {
      opacity: 1;
      transform: translateX(0);
   }
}

@keyframes gradientShift {
   0%,
   100% {
      background-position: 0% 50%;
   }
   50% {
      background-position: 100% 50%;
   }
}

/* Mobile optimizations */
@media (max-width: 640px) {
   .hero {
      min-height: 90vh;
   }

   h1 {
      line-height: 1.2;
   }
}
</style>
