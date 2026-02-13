<template>
   <section
      class="hero relative overflow-hidden h-[100svh] flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-0 w-full bg-gradient-to-br from-white via-teal-50/30 to-blue-50/20"
      aria-labelledby="hero-heading"
   >
      <!-- Animated background elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
         <div class="absolute top-20 left-10 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl animate-pulse" style="animation-duration: 4s"></div>
         <div class="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse" style="animation-duration: 6s; animation-delay: 1s"></div>
      </div>

      <div class="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16 relative z-10">
         <!-- Text Content -->
         <div
            class="w-full lg:w-1/2 px-4 sm:px-6 md:px-8 lg:px-0 flex flex-col items-start"
            style="animation: slideInLeft 0.8s ease-out"
         >
            <!-- Trust Badge -->
            <div 
               class="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200/50 rounded-full mb-6"
               style="animation: fadeInUp 0.8s ease-out both"
            >
               <svg class="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
               </svg>
               <span class="text-sm font-medium text-gray-700">Mais de 500 estudantes conectados</span>
            </div>

            <h1
               id="hero-heading"
               class="w-full text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold leading-tight text-gray-900 text-center lg:text-left"
               style="animation: fadeInUp 0.8s ease-out 0.1s both"
            >
               Transforme seu
               <span
                  class="bg-gradient-to-r from-[#079272] to-[#2464E8] bg-clip-text text-transparent block sm:inline"
                  style="background-size: 200% 200%; animation: gradientShift 3s ease infinite"
               >
                  potencial
               </span>
               em
               <span
                  class="bg-gradient-to-r from-[#079272] to-[#2464E8] bg-clip-text text-transparent block sm:inline"
                  style="background-size: 200% 200%; animation: gradientShift 3s ease infinite"
               >
                  conquistas reais
               </span>
            </h1>

            <p
               class="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed text-center lg:text-left font-medium"
               style="animation: fadeInUp 0.8s ease-out 0.2s both"
            >
               Conecte-se com mentores, descubra oportunidades de bolsas e estágios, e construa o futuro que você merece.
            </p>

            <!-- Value propositions -->
            <div 
               class="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full"
               style="animation: fadeInUp 0.8s ease-out 0.25s both"
            >
               <div class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-teal-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                     <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-sm text-gray-700">100% Gratuito</span>
               </div>
               <div class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-teal-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                     <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-sm text-gray-700">Mentoria personalizada</span>
               </div>
               <div class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-teal-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                     <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-sm text-gray-700">Oportunidades exclusivas</span>
               </div>
            </div>

            <!-- CTA Buttons -->
            <div
               class="w-full mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
               style="animation: fadeInUp 0.8s ease-out 0.3s both"
            >
               <!-- Primary CTA -->
               <a
                  class="group w-full sm:w-auto px-8 py-4 rounded-xl text-white font-semibold text-lg bg-gradient-to-r from-[#079272] to-[#2464E8] hover:opacity-90 hover:scale-105 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 focus:outline-none focus:ring-4 focus:ring-teal-300 hover:shadow-[0_12px_35px_rgba(7,146,114,0.5)] shadow-[0_6px_20px_rgba(7,146,114,0.35)]"
                  href="https://wa.me/558599783928?text=Olá!%20Quero%20encontrar%20um%20mentor%20e%20crescer%20academicamente"
                  aria-label="Começar agora - fale com nosso assistente"
               >
                  <span>Comece agora - É grátis</span>
                  <svg 
                     class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                     fill="none" 
                     stroke="currentColor" 
                     viewBox="0 0 24 24"
                  >
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
               </a>

               <!-- Secondary CTA -->
               <a
                  class="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-lg border-2 border-[#079272] text-[#079272] hover:bg-[#079272] hover:text-white hover:scale-105 transition-all duration-300 text-center backdrop-blur-sm bg-white/80"
                  href="#como-funciona"
                  aria-label="Ver como funciona"
               >
                  Como funciona
               </a>
            </div>

            <!-- Trust indicators -->
            <div 
               class="mt-8 flex items-center gap-6 text-sm text-gray-600"
               style="animation: fadeInUp 0.8s ease-out 0.35s both"
            >
               <div class="flex items-center gap-2">
                  <div class="flex -space-x-2">
                     <div class="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 border-2 border-white"></div>
                     <div class="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
                     <div class="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white"></div>
                  </div>
                  <span class="font-medium">+50 mentores ativos</span>
               </div>
               <div class="flex items-center gap-1">
                  <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span class="font-medium">4.9/5</span>
                  <span class="text-gray-500">(200+ avaliações)</span>
               </div>
            </div>
         </div>

         <!-- Visual Element / Illustration -->
         <div 
            class="hidden lg:flex w-full lg:w-1/2 items-center justify-center"
            style="animation: fadeIn 1s ease-out 0.4s both"
         >
            <div class="relative w-full max-w-lg">
               <!-- Main card -->
               <div class="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/50">
                  <div class="space-y-6">
                     <!-- Mentor card -->
                     <div class="flex items-center gap-4 p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl">
                        <div class="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white text-2xl font-bold">
                           M
                        </div>
                        <div>
                           <div class="font-semibold text-gray-900">Seu Mentor</div>
                           <div class="text-sm text-gray-600">Pronto para te guiar</div>
                        </div>
                     </div>
                     
                     <!-- Connection arrow -->
                     <div class="flex items-center justify-center">
                        <svg class="w-8 h-8 text-teal-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                        </svg>
                     </div>
                     
                     <!-- Student card -->
                     <div class="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
                        <div class="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-2xl font-bold">
                           V
                        </div>
                        <div>
                           <div class="font-semibold text-gray-900">Você</div>
                           <div class="text-sm text-gray-600">Crescendo a cada dia</div>
                        </div>
                     </div>
                  </div>
               </div>
               
               <!-- Floating badges -->
               <div class="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-teal-200/50 animate-pulse" style="animation-duration: 3s">
                  <div class="text-3xl font-bold text-teal-600">500+</div>
                  <div class="text-xs text-gray-600">Conexões</div>
               </div>
               
               <div class="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-blue-200/50 animate-pulse" style="animation-duration: 4s; animation-delay: 1s">
                  <div class="text-3xl font-bold text-blue-600">100%</div>
                  <div class="text-xs text-gray-600">Gratuito</div>
               </div>
            </div>
         </div>
      </div>

      <!-- Scroll Indicator -->
      <a 
         href="#sobre" 
         class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce hover:scale-110 transition-transform cursor-pointer"
         aria-label="Rolar para saber mais"
      >
         <div class="flex flex-col items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors">
            <span class="text-sm font-medium">Descubra mais</span>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
         </div>
      </a>

      <!-- Gradient fade -->
      <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-0"></div>
   </section>
</template>

<script setup>
</script>

<style scoped>
.hero {
   height: 100svh;
   height: 100vh;
   position: relative;
}

@keyframes fadeInUp {
   from {
      opacity: 0;
      transform: translateY(30px);
   }
   to {
      opacity: 1;
      transform: translateY(0);
   }
}

@keyframes slideInLeft {
   from {
      opacity: 0;
      transform: translateX(-40px);
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
   0%, 100% {
      background-position: 0% 50%;
   }
   50% {
      background-position: 100% 50%;
   }
}

@media (max-width: 640px) {
   .hero {
      min-height: 90vh;
   }

   h1 {
      line-height: 1.2;
   }
}
</style>
