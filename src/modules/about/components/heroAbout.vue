<template>
   <section
      class="relative min-h-[90vh] flex items-center justify-start overflow-hidden px-4 sm:px-6 lg:px-8"
      aria-labelledby="hero-heading"
   >
      <div class="relative w-full max-w-7xl mx-auto">
         <div class="flex flex-col gap-12 lg:gap-20 items-center">
            <div class="w-full text-center">
               <h1
                  id="hero-heading"
                  class="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
                  style="animation-delay: 0.2s"
                  data-aos="fade-up"
               >
                  Sobre
                  <span
                     class="bg-gradient-to-r from-[#079272] via-[#0DA790] to-[#2464E8] bg-clip-text text-transparent animate-gradient bg-300"
                  >
                     nós
                  </span>
               </h1>
            </div>

            <p
               class="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed lg:leading-relaxed w-full text-center"
               style="animation-delay: 0.3s"
               data-aos="fade-up"
            >
               Somos uma organização sem fins lucrativos que acredita no poder transformador da
               <span class="font-semibold text-[#079272]">educação colaborativa</span>. Nossa missão
               é reimaginar o ambiente educacional, cultivando o protagonismo estudantil e
               fortalecendo o senso de comunidade.
            </p>
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

[v-animate] {
   opacity: 0;
}

[v-animate].animated {
   animation: fadeUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.hero-section {
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
}

@media (max-width: 1024px) {
   .hero-section {
      min-height: 80vh;
      padding-top: 4rem;
      padding-bottom: 4rem;
   }
}

@media (max-width: 640px) {
   .hero-section {
      min-height: 70vh;
   }
}
</style>
