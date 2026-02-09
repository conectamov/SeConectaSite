<template>
        <section
                class="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-20 overflow-hidden"
        >
                <div class="w-full max-w-6xl mx-auto ">
                        <div
                                class="text-center mb-16"
                                style="animation: fadeInUp 0.8s ease-out 0.2s both"
                        >
                                <h1
                                        class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
                                >
                                        Muitos estudantes querem
                                        <span class="block">
                                                <span class="gradient-text"
                                                        >ajudar, criar projetos</span
                                                >
                                                ou
                                        </span>
                                        <span class="gradient-text">organizar iniciativas.</span>
                                </h1>

                                <div
                                        class="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm mt-8"
                                        style="animation: fadeInUp 0.8s ease-out 0.4s both"
                                >
                                        <div
                                                class="w-2 h-2 rounded-full bg-red-500 animate-pulse"
                                        ></div>
                                        <h2 class="text-xl sm:text-2xl font-semibold text-gray-800">
                                                Mas tudo acaba morrendo:
                                        </h2>
                                </div>
                        </div>

                        <div
                                class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
                                style="animation: fadeInUp 0.8s ease-out 0.6s both"
                        >
                                <div
                                        v-for="(problem, index) in problems"
                                        :key="index"
                                        class="group relative"
                                        :style="{
                                                animation: `fadeInUp 0.8s ease-out ${0.7 + index * 0.1}s both`,
                                        }"
                                >
                                        <div
                                                class="relative p-8 rounded-2xl bg-white border border-gray-200 hover:border-[#079272]/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full"
                                        >
                                                <div
                                                        class="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-r from-[#079272] to-[#2464E8] flex items-center justify-center shadow-lg"
                                                >
                                                        <span
                                                                class="text-white font-bold text-lg"
                                                                >{{ index + 1 }}</span
                                                        >
                                                </div>

                                                <div
                                                        class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#079272]/10 to-[#2464E8]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                                                >
                                                        <i
                                                                :class="problem.icon"
                                                                class="text-2xl"
                                                                :style="`color: ${problem.color}`"
                                                        ></i>
                                                </div>

                                                <h3 class="text-2xl font-bold text-gray-900 mb-4">
                                                        {{ problem.title }}
                                                </h3>
                                                <p class="text-gray-700 leading-relaxed mb-6">
                                                        {{ problem.description }}
                                                </p>
                                        </div>

                                        <!-- Connecting Lines (Desktop Only) -->
                                        <div
                                                v-if="index < 2"
                                                class="hidden md:block absolute top-1/2 right-0 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent translate-x-full"
                                        ></div>
                                </div>
                        </div>
                </div>
        </section>
</template>

<script setup>
import { ref } from 'vue'

const problems = ref([
        {
                icon: 'fas fa-star',
                color: '#FF6B35',
                title: 'Falta de Reconhecimento',
                description:
                        'Projetos incríveis passam despercebidos sem visibilidade ou validação, desmotivando os estudantes a continuarem.',
                impact: '78%',
        },
        {
                icon: 'fas fa-compass',
                color: '#079272',
                title: 'Sem Orientação',
                description:
                        'Iniciativas se perdem sem mentoria especializada e direção clara sobre os próximos passos a seguir.',
                impact: '65%',
        },
        {
                icon: 'fas fa-medal',
                color: '#2464E8',
                title: 'Nenhuma Estrutura',
                description:
                        'Ideias promissoras não evoluem por falta de recursos, ferramentas e um ecossistema de apoio.',
                impact: '82%',
        },
])
</script>

<style scoped>
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
        background-size: 200% 200%;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        animation: gradientShift 3s ease infinite;
}

/* Custom animations */
.animate-pulse {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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
</style>
