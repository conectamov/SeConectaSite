<template>
  <section
    class="relative min-h-[60vh] flex items-center justify-center px-4 md:px-8 lg:px-20 overflow-hidden"
    aria-labelledby="closed-heading"
  >
    <!-- Background Elements (mesmo padrão dos outros componentes) -->
    <div class="absolute inset-0 overflow-hidden -z-10">
      <div
        class="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-gradient-to-r from-[#079272]/20 to-[#2464E8]/20 blur-3xl"
        style="animation: float 15s ease-in-out infinite"
      ></div>
      <div
        class="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-gradient-to-r from-[#2464E8]/20 to-[#079272]/20 blur-3xl"
        style="animation: float 18s ease-in-out infinite reverse"
      ></div>
      <div class="absolute inset-0 opacity-5">
        <div
          class="absolute inset-0"
          style="
            background-image: linear-gradient(to right, #079272 1px, transparent 1px),
              linear-gradient(to bottom, #2464e8 1px, transparent 1px);
            background-size: 60px 60px;
          "
        ></div>
      </div>
    </div>

    <div class="relative w-full max-w-5xl mx-auto">
      <!-- Cabeçalho -->
      <div class="text-center mb-12" style="animation: fadeInUp 0.8s ease-out 0.2s both">
        <div
          class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm mb-6"
        >
          <div class="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
          <span class="text-sm font-medium text-gray-700 uppercase tracking-wider"
            >Inscrições encerradas</span
          >
        </div>

        <h1
          id="closed-heading"
          class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
        >
          O programa de embaixadores
          <span class="block gradient-text">está em pausa</span>
        </h1>

        <p class="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Estamos preparando a próxima turma com ainda mais recursos e oportunidades.
          Enquanto isso, você pode explorar o que nossa comunidade já construiu.
        </p>
      </div>

      <!-- Cards de Ações Alternativas -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        style="animation: fadeInUp 0.8s ease-out 0.4s both"
      >
        <div
          v-for="(action, index) in actions"
          :key="index"
          class="group"
          :style="{ animation: `fadeInUp 0.8s ease-out ${0.5 + index * 0.1}s both` }"
        >
          <div
            class="relative p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-[#079272] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col"
          >
            <div
              class="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-r from-[#079272] to-[#2464E8] flex items-center justify-center shadow-lg"
            >
              <span class="text-white font-bold">{{ index + 1 }}</span>
            </div>

            <div
              class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#079272]/10 to-[#2464E8]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto"
            >
              <i :class="action.icon" class="text-2xl" :style="{ color: action.color }"></i>
            </div>

            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ action.title }}</h3>
            <p class="text-gray-600 mb-6 flex-grow">{{ action.description }}</p>

            <a
              :href="action.link"
              class="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-lg border-2 border-[#079272] text-[#079272] hover:bg-[#079272] hover:text-white transition-all duration-200 font-medium text-sm group"
              :aria-label="action.cta"
            >
              <span>{{ action.cta }}</span>
              <i
                class="fas fa-arrow-right text-xs transition-transform duration-200 group-hover:translate-x-1"
              ></i>
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const actions = ref([
  {
    icon: 'fas fa-newspaper',
    color: '#FF6B35',
    title: 'Feed de Oportunidades',
    description:
      'Fique por dentro das novidades! Oportunidades com redações escritas por nossos embaixadores diariamente.',
    cta: 'Explorar feed',
    link: '/feed', // Ajuste conforme a rota real
  },
  {
    //colocar icone zap zap
    icon: 'fas fa-pen-fancy',
    color: '#079272',
    title: 'Nexo (ChatBot)',
    description:
      'Teste o Nexo no seu WhatsApp: encontre estudantes com interesses em comum à você e receba notícias diretamente no seu WhatsApp!',
    cta: 'Testar no WhatsApp',
    link: '/redacoes', // Ajuste conforme a rota real
  },
  {
    icon: 'fas fa-calendar-alt',
    color: '#2464E8',
    title: 'Próximos Eventos',
    description:
      'Participe de workshops, webinars e encontros promovidos pela comunidade seConecta.',
    cta: 'Ver eventos',
    link: '/eventos', // Ajuste conforme a rota real
  },
])
</script>

<style scoped>
/* Reaproveitando animações dos componentes existentes */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) translateX(0px);
  }
  33% {
    transform: translateY(-20px) translateX(20px);
  }
  66% {
    transform: translateY(20px) translateX(-20px);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.5;
  }
  50% {
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

.gradient-text {
  background: linear-gradient(135deg, #079272 0%, #0bb592 25%, #2464e8 75%, #4d84ff 100%);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradientShift 4s ease infinite;
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>