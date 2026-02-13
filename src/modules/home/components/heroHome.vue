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
            <!-- Beta Badge -->
            <div 
               class="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-full mb-6 shadow-lg"
               style="animation: fadeInUp 0.8s ease-out both"
            >
               <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/>
               </svg>
               <span class="text-sm font-bold">BETA ABERTO • Vagas Limitadas</span>
            </div>

            <h1
               id="hero-heading"
               class="w-full text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold leading-tight text-gray-900 text-center lg:text-left"
               style="animation: fadeInUp 0.8s ease-out 0.1s both"
            >
               Conecte-se com
               <span
                  class="bg-gradient-to-r from-[#079272] to-[#2464E8] bg-clip-text text-transparent block sm:inline"
                  style="background-size: 200% 200%; animation: gradientShift 3s ease infinite"
               >
                  estudantes
               </span>
               que pensam como
               <span
                  class="bg-gradient-to-r from-[#079272] to-[#2464E8] bg-clip-text text-transparent block sm:inline"
                  style="background-size: 200% 200%; animation: gradientShift 3s ease infinite"
               >
                  você
               </span>
            </h1>

            <p
               class="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed text-center lg:text-left font-medium"
               style="animation: fadeInUp 0.8s ease-out 0.2s both"
            >
               Encontre colegas com os mesmos objetivos acadêmicos e receba oportunidades de bolsas, estágios e editais personalizadas para você.
            </p>

            <!-- Value propositions -->
            <div 
               class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
               style="animation: fadeInUp 0.8s ease-out 0.25s both"
            >
               <div class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-teal-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                     <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                  </svg>
                  <span class="text-sm sm:text-base text-gray-700 font-medium">Matching por interesses</span>
               </div>
               <div class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-teal-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                     <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                     <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <span class="text-sm sm:text-base text-gray-700 font-medium">Newsletter personalizada</span>
               </div>
               <div class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-teal-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                     <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-sm sm:text-base text-gray-700 font-medium">100% Gratuito</span>
               </div>
               <div class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-teal-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                     <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-sm sm:text-base text-gray-700 font-medium">Acesso prioritário</span>
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
                  href="https://wa.me/558599783928?text=Olá!%20Quero%20participar%20do%20beta%20do%20Conecta%20e%20encontrar%20estudantes%20com%20meus%20interesses"
                  aria-label="Participar do beta"
               >
                  <span>Participar do beta</span>
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
               class="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-gray-600"
               style="animation: fadeInUp 0.8s ease-out 0.35s both"
            >
               <div class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                     <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span class="font-medium">Configuração em 2 minutos</span>
               </div>
               <div class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                     <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span class="font-medium">Sem compromisso</span>
               </div>
            </div>
         </div>

         <!-- Visual Element -->
         <div 
            class="hidden lg:flex w-full lg:w-1/2 items-center justify-center"
            style="animation: fadeIn 1s ease-out 0.4s both"
         >
            <div class="relative w-full max-w-lg">
               <!-- Main illustration -->
               <div class="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/50">
                  <div class="space-y-6">
                     <!-- Student cards -->
                     <div class="grid grid-cols-2 gap-4">
                        <div class="p-4 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl">
                           <div class="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 mx-auto mb-3 flex items-center justify-center text-white font-bold">
                              A
                           </div>
                           <div class="text-center">
                              <div class="text-xs text-gray-600 font-medium">Engenharia</div>
                              <div class="text-xs text-teal-600 font-semibold">USP</div>
                           </div>
                        </div>
                        <div class="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                           <div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 mx-auto mb-3 flex items-center justify-center text-white font-bold">
                              B
                           </div>
                           <div class="text-center">
                              <div class="text-xs text-gray-600 font-medium">Engenharia</div>
                              <div class="text-xs text-blue-600 font-semibold">UFC</div>
                           </div>
                        </div>
                     </div>
                     
                     <!-- Connection indicator -->
                     <div class="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-teal-100 to-blue-100 rounded-xl">
                        <svg class="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                           <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"/>
                        </svg>
                        <span class="text-sm font-semibold text-gray-700">Interesses em comum</span>
                     </div>
                     
                     <!-- Newsletter preview -->
                     <div class="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
                        <div class="flex items-center gap-2 mb-2">
                           <svg class="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                           </svg>
                           <span class="text-xs font-bold text-purple-700">Newsletter Semanal</span>
                        </div>
                        <div class="space-y-1">
                           <div class="h-2 bg-purple-200 rounded w-full"></div>
                           <div class="h-2 bg-purple-200 rounded w-4/5"></div>
                           <div class="h-2 bg-purple-200 rounded w-3/4"></div>
                        </div>
                     </div>
                  </div>
               </div>
               
               <!-- Floating badge -->
               <div class="absolute -top-6 -right-6 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-2xl shadow-xl p-4 animate-pulse" style="animation-duration: 3s">
                  <div class="text-2xl font-bold">BETA</div>
                  <div class="text-xs">Acesso prioritário</div>
               </div>
            </div>
         </div>
      </div>

      <!-- Scroll Indicator -->
      <a 
         href="#como-funciona" 
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
