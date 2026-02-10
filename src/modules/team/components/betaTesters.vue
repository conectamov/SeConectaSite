<template>
  <section
    class="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8"
    aria-label="Beta testers e formulário de inscrição"
  >
    <div class="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#079272]/5 to-[#2464E8]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>

    <div class="relative max-w-7xl mx-auto">
      <!-- Seção Beta Testers -->
      <div class="mb-20 lg:mb-24">
        <div class="text-center mb-16 lg:mb-20" data-aos="fade-up">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nossos
            <span class="bg-gradient-to-r from-[#2464E8] to-[#079272] bg-clip-text text-transparent">
              Beta Testers
            </span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Os primeiros a experimentarem e ajudarem a melhorar nossa plataforma
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <BetaTesterCard
            v-for="(tester, index) in betaTesters"
            :key="tester.id"
            :tester="tester"
            :data-aos="'fade-up'"
            :style="{ animationDelay: `${0.2 + index * 0.1}s` }"
          />
        </div>
      </div>

      <div class="max-w-4xl mx-auto" data-aos="zoom-in-up">
  <div class="relative group">
  
    
    <div
      class="relative w-full px-6 py-12 md:px-10 md:py-14 lg:px-12 lg:py-16 rounded-2xl text-center bg-gradient-to-br from-white/95 via-white/90 to-gray-50/95 backdrop-blur-sm border border-gray-200/60 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden"
    >


      <div class="relative z-10">
        <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          <span class="bg-gradient-to-r from-[#079272] via-[#0DA790] to-[#2464E8] bg-clip-text text-transparent">
            Quer fazer parte do nosso time de beta testers?
          </span>
        </h3>
        
        <p class="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Ajude-nos a moldar o futuro da plataforma sendo um dos primeiros a testar novas funcionalidades e fornecer feedback valioso.
        </p>

        <div class="mb-10">
          <a
            class="w-full group/btn inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-[#079272] via-[#0DA790] to-[#2464E8] hover:from-[#0aab8a] hover:via-[#1bc2a8] hover:to-[#2a76ff] transition-all duration-500 transform hover:-translate-y-1 hover:shadow-2xl active:scale-95 shadow-xl relative overflow-hidden"
          >
            
            <span class="relative z-10 w-full">Seja um Beta Tester!</span>
          </a>
        </div>

        <p class="text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
          Ao se inscrever, você receberá <span class="font-semibold text-[#079272]">acesso antecipado exclusivo</span> às novas funcionalidades, poderá influenciar diretamente no desenvolvimento da plataforma e fará parte de uma comunidade de inovação.
        </p>
      </div>
    </div>
  </div>
</div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import BetaTesterCard from './BetaTesterCard.vue'

const betaTesters = ref([
  {
    id: 1,
    name: 'Marcos Vinicius',
    role: 'Beta Tester',
    feedback: ''
  },
  {
    id: 2,
    name: 'Malu Azevedo',
    role: 'Beta Tester',
    feedback: ''
  },
  {
    id: 3,
    name: 'Gabriela Amorim',
    role: 'Beta Tester',
    feedback: ''
  }
])

</script>

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
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}
</style>