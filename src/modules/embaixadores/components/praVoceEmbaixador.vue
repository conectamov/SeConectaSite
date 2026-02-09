<template>
        <section
                class="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-20 overflow-hidden"
        >
                <div class="w-full max-w-6xl mx-auto text-center">
                        <h2
                                class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-12"
                                style="animation: fadeInUp 0.8s ease-out 0.3s both"
                        >
                                Esse papel faz sentido
                                <span class="block">
                                        se você se
                                        <span class="gradient-text">identifica</span> com:
                                </span>
                        </h2>

                        <div
                                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
                                style="animation: fadeInUp 0.8s ease-out 0.4s both"
                        >
                                <div
                                        v-for="(identification, index) in identifications"
                                        :key="index"
                                        class="group"
                                        :style="{
                                                animation: `fadeInUp 0.8s ease-out ${0.5 + index * 0.1}s both`,
                                        }"
                                >
                                        <div
                                                class="relative p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-[#079272] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full"
                                        >
                                                <div
                                                        class="absolute top-0 right-0 w-16 h-16 overflow-hidden"
                                                >
                                                        <div
                                                                class="absolute -top-8 -right-8 w-16 h-16 rotate-45 bg-gradient-to-r from-[#079272] to-[#2464E8] opacity-10"
                                                        ></div>
                                                </div>

                                                <div
                                                        class="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-r from-[#079272] to-[#2464E8] flex items-center justify-center shadow-lg"
                                                >
                                                        <span class="text-white font-bold">{{
                                                                index + 1
                                                        }}</span>
                                                </div>

                                                <div
                                                        class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#079272]/10 to-[#2464E8]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto"
                                                >
                                                        <i
                                                                :class="identification.icon"
                                                                class="text-2xl"
                                                                :style="`color: ${identification.color}`"
                                                        ></i>
                                                </div>

                                                <h3 class="text-xl font-bold text-gray-900 mb-4">
                                                        {{ identification.title }}
                                                </h3>
                                                <p class="text-gray-700 leading-relaxed">
                                                        {{ identification.description }}
                                                </p>
                                        </div>
                                </div>
                        </div>
                </div>
        </section>

        <section
                class="relative min-h-[100h] flex items-center justify-center px-4 md:px-8 lg:px-20 overflow-hidden mb-[20vh]"
        >
                <div class="relative w-full max-w-5xl mx-auto text-center items-center justify-center ">
                        <div
                                class="relative p-8 md:p-12 lg:p-16 rounded-3xl bg-white/95 backdrop-blur-sm border border-white/40 shadow-2xl"
                                style="animation: fadeInUp 0.8s ease-out 0.3s both"
                        >
                                <h1
                                        class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                                        style="animation: fadeInUp 0.8s ease-out 0.5s both"
                                >
                                        Estamos começando pequeno.
                                        <span class="block gradient-text mt-2">
                                                Quer fazer parte da primeira turma?
                                        </span>
                                </h1>

                                <p
                                        class="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed"
                                        style="animation: fadeInUp 0.8s ease-out 0.6s both"
                                >
                                        Seja um dos
                                        <span class="font-bold text-[#079272]">pioneiros</span> que
                                        vão moldar o futuro da CONECTA e criar impacto em escala
                                        nacional desde o primeiro dia.
                                </p>

                                <div
                                        class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                                        style="animation: fadeInUp 0.8s ease-out 0.7s both"
                                >
                                        <div
                                                v-for="(feature, index) in features"
                                                :key="index"
                                                class="p-4 rounded-xl bg-gradient-to-r from-[#079272]/5 to-[#2464E8]/5 border border-[#079272]/10 hover:border-[#079272]/30 transition-all duration-300 hover:shadow-lg"
                                                :style="{
                                                        animation: `fadeInUp 0.8s ease-out ${0.8 + index * 0.1}s both`,
                                                }"
                                        >
                                                <div class="flex items-center gap-3">
                                                        <div
                                                                class="w-10 h-10 rounded-lg bg-gradient-to-r from-[#079272] to-[#2464E8] flex items-center justify-center"
                                                        >
                                                                <i
                                                                        :class="feature.icon"
                                                                        class="text-white"
                                                                ></i>
                                                        </div>
                                                        <div class="text-left">
                                                                <h4
                                                                        class="font-semibold text-gray-900"
                                                                >
                                                                        {{ feature.title }}
                                                                </h4>
                                                                <p class="text-sm text-gray-600">
                                                                        {{ feature.description }}
                                                                </p>
                                                        </div>
                                                </div>
                                        </div>
                                </div>

                                <div
                                        class="relative"
                                        style="animation: fadeInUp 0.8s ease-out 1s both"
                                >
                                        <button
                                                class="group w-full max-w-md px-8 py-5 rounded-xl text-white font-bold bg-gradient-to-r from-[#079272] via-[#0BB592] to-[#2464E8] hover:from-[#067a61] hover:via-[#0AA07E] hover:to-[#1d55d6] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 mx-auto focus:outline-none focus:ring-4 focus:ring-[#2464E8]/50 focus:ring-offset-2 hover:shadow-[0_15px_50px_rgba(7,146,114,0.5)] shadow-[0_8px_30px_rgba(7,146,114,0.4)] relative overflow-hidden"
                                                @click="handleApply"
                                                aria-label="Quero ser embaixador da primeira turma"
                                        >
                                                <span class="relative z-10 text-lg"
                                                        >Quero ser Embaixador da Primeira
                                                        Turma!</span
                                                >
                                                <span
                                                        class="relative z-10 transition-transform duration-300 group-hover:translate-x-2"
                                                >
                                                        🚀
                                                </span>
                                                <div
                                                        class="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                                                ></div>
                                        </button>

                                        <div
                                                class="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600"
                                        >
                                                <div class="flex items-center gap-2">
                                                        <i
                                                                class="fas fa-shield-check text-[#079272]"
                                                        ></i>
                                                        <span>Processo 100% online e gratuito</span>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        </section>
</template>

<script setup>
import { ref } from 'vue'

const identifications = ref([
        {
                icon: 'fas fa-lightbulb',
                color: '#FF6B35',
                title: 'Já tentou criar algo',
                description:
                        'Mas sentiu falta de direção clara, mentoria especializada e um caminho estruturado para transformar sua ideia em realidade.',
                percentage: '92%',
        },
        {
                icon: 'fas fa-handshake',
                color: '#079272',
                title: 'Se importa em ajudar',
                description:
                        'Tem genuíno interesse em apoiar outros estudantes e construir uma comunidade mais forte e colaborativa.',
                percentage: '87%',
        },
        {
                icon: 'fas fa-briefcase',
                color: '#2464E8',
                title: 'Quer construir portfólio',
                description:
                        'Deseja desenvolver projetos significativos que façam sentido para sua trajetória profissional e pessoal.',
                percentage: '78%',
        },
])

const features = ref([
        {
                icon: 'fas fa-crown',
                title: 'Fundador Honorário',
                description: 'Status especial na comunidade',
        },
        {
                icon: 'fas fa-comments',
                title: 'Voz Direta',
                description: 'Influencie o futuro da plataforma',
        },
        {
                icon: 'fas fa-rocket',
                title: 'Crescimento Acelerado',
                description: 'Acesso antecipado a recursos',
        },
])

const handleApply = () => {
        console.log('Aplicar para primeira turma')
}
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

@keyframes pulse {
        0%,
        100% {
                transform: scale(1);
                opacity: 0.5;
        }
        50% {
                transform: scale(1.05);
                opacity: 0.7;
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
</style>
