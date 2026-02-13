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
            <!-- Título -->
            <h1
            id="hero-heading"
            class="text-8xl sm:text-8xl md:text-7xl font-bold leading-tight text-gray-900"
            style="animation: fadeInUp 0.8s ease-out 0.1s both"
            >
            Conecte-se com
            <span
               class="bg-gradient-to-r from-[#079272] to-[#2464E8] bg-clip-text text-transparent"
               style="background-size: 200% 200%; animation: gradientShift 3s ease infinite"
            >
               estudantes
            </span>
            que pensam como
            <span
               class="bg-gradient-to-r from-[#079272] to-[#2464E8] bg-clip-text text-transparent"
               style="background-size: 200% 200%; animation: gradientShift 3s ease infinite"
            >
               você
            </span>
            </h1>

            <p
            class="mt-4 text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-medium"
            style="animation: fadeInUp 0.8s ease-out 0.2s both"
            >
            Encontre colegas com os mesmos objetivos acadêmicos e receba oportunidades de bolsas, estágios e editais personalizadas.
            </p>

            <div
               class="w-full mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 sm:align-items-center justify-center lg:justify-start group"
               style="animation: fadeInUp 0.8s ease-out 0.3s both"
            >
            <a
               class="group px-8 py-4 rounded-xl text-white font-semibold text-lg bg-orange-600 hover:bg-orange-700 hover:scale-105 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 focus:outline-none focus:ring-4 focus:ring-orange-300 hover:shadow-[0_12px_35px_rgba(234,88,12,0.5)] shadow-[0_6px_20px_rgba(234,88,12,0.35)]"
               href="https://wa.me/558599783928?text=Olá!%20Quero%20participar%20do%20beta%20do%20Conecta"
               aria-label="Testar no WhatsApp"
               target="_blank"
               rel="noopener noreferrer"
            >
               <span>Testar no WhatsApp</span>
               <svg
                  class="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 24 24"
               >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
               </svg>
            </a>

               <a
                  class="w-full sm:w-auto px-8 sm:px-8 py-3 rounded-lg font-medium border-2 border-[#079272] text-[#079272] hover:bg-[#079272] hover:text-white transition-all duration-200"
                  href="/sobre"
                  aria-label="Explorar mais sobre o Conecta"
               >
                  Saiba mais
               </a>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
</script>

<style scoped>
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

@keyframes fadeIn {
   from {
      opacity: 0;
   }
   to {
      opacity: 1;
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
   section {
      min-height: 90vh;
   }

   h1 {
      line-height: 1.2;
   }
}
</style>
