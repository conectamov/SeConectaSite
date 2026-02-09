<template>
        <section
                class="relative min-h-[100vh] flex items-center justify-center px-4 md:px-8 lg:px-20 overflow-hidden"
                aria-labelledby="hero-heading"
        >
                <div
                        class="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20"
                >
                        <div
                                class="w-full lg:w-[90vh] flex flex-col items-start max-w-2xl"
                                style="animation: slideInLeft 0.8s ease-out"
                        >
                                <h1
                                        id="hero-heading"

                                        class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                                        style="animation: fadeInUp 0.8s ease-out 0.2s both"
                                >
                                        <span class="block text-gray-900">
                                                Já tentou criar impacto na sua escola ou comunidade?
                                        </span>
                                </h1>

                                <p
                                        class="mt-8 text-lg sm:text-xl text-gray-700 leading-relaxed max-w-lg"
                                        style="animation: fadeInUp 0.8s ease-out 0.3s both"
                                >
                                        Estamos formando a
                                        <span class="font-semibold text-[#079272]"
                                                >primeira turma</span
                                        >
                                        de estudantes que querem transformar iniciativa em impacto
                                        real.
                                </p>

                                <div
                                        class="flex w-full flex-wrap gap-6 mt-10"
                                        style="animation: fadeInUp 0.8s ease-out 0.4s both"
                                >
                                        <div class="flex items-center gap-3 group cursor-pointer rounded-2xl bg-white p-5">
                                                <div
                                                        class="w-8 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                                                >
                                                        <i class="fas fa-users text-[#079272]"></i>
                                                </div>
                                                <div>
                                                        <div class="font-semibold text-gray-900">
                                                                Comunidade Ativa
                                                        </div>
                                                        <div class="text-sm text-gray-600">
                                                                junte-se ao nosso grupo
                                                        </div>
                                                </div>
                                        </div>
                                        <div class="flex items-center gap-3 group cursor-pointer rounded-2xl bg-white p-5">
                                                <div
                                                        class="w-8 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                                                >
                                                        <i
                                                                class="fas fa-graduation-cap text-[#2464E8]"
                                                        ></i>
                                                </div>
                                                <div>
                                                        <div class="font-semibold text-gray-900">
                                                                Acompanhamento direto
                                                        </div>
                                                        <div class="text-sm text-gray-600">
                                                                Líderes de impacto
                                                        </div>
                                                </div>
                                        </div>
                                </div>

                                <div
                                        class="mt-12 w-full max-w-2xl"
                                        style="animation: fadeInUp 0.8s ease-out 0.5s both"
                                >
                                        <div class="flex items-center justify-between mb-4">
                                                <div class="text-sm text-gray-600">
                                                        <span class="font-semibold text-[#079272]"
                                                                >20</span
                                                        >
                                                        vagas restantes
                                                </div>
                                                <div class="text-sm text-gray-500">
                                                        Inscrições até 13/02
                                                </div>
                                        </div>

                                        <div class="relative group w-full">
                                                <button
                                                        class="w-full px-8 py-4 rounded-xl text-white font-bold bg-gradient-to-r from-[#079272] via-[#0BB592] to-[#2464E8] hover:from-[#067a61] hover:via-[#0AA07E] hover:to-[#1d55d6] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 focus:outline-none focus:ring-3 focus:ring-[#2464E8]/50 focus:ring-offset-2 hover:shadow-[0_10px_40px_rgba(7,146,114,0.4)] shadow-[0_6px_25px_rgba(7,146,114,0.3)] relative overflow-hidden"
                                                        @click="handleApply"
                                                        aria-label="Quero ser embaixador"
                                                >
                                                        <span class="relative z-10"
                                                                >🎯 Quero ser Embaixador</span
                                                        >
                                                        <span
                                                                class="relative z-10 transition-transform duration-300 group-hover:translate-x-2"
                                                                aria-hidden="true"
                                                        >
                                                                →
                                                        </span>
                                                        <div
                                                                class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                                                        ></div>
                                                </button>
                                                <p class="text-center text-sm text-gray-600 mt-4">
                                                        Processo seletivo com
                                                        <span class="font-semibold"
                                                                >etapas simples</span
                                                        >
                                                        e
                                                        <span class="font-semibold text-[#079272]"
                                                                >100% online</span
                                                        >
                                                </p>
                                        </div>
                                </div>
                        </div>

                        <div
                                class="w-full lg:w-1/2 flex justify-center lg:justify-end"
                                style="animation: fadeInUp 0.8s ease-out 0.3s both"
                        >
                                <div class="relative w-full max-w-lg">
                                        <div
                                                class="relative p-8 rounded-3xl bg-gradient-to-br from-white/80 to-gray-50/50 backdrop-blur-xl border border-white/60 shadow-2xl shadow-[#079272]/10 overflow-hidden"
                                        >
                                                <div class="p-2"></div>
                                                <div
                                                        class="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-r from-[#079272]/10 to-[#2464E8]/10 blur-2xl"
                                                ></div>
                                                <div
                                                        class="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-r from-[#2464E8]/10 to-[#079272]/10 blur-2xl"
                                                ></div>

                                                <div class="relative z-10">
                                                        <div class="flex items-center gap-4 mb-8">
                                                                <div
                                                                        class="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#079272]/20 to-[#2464E8]/20 flex items-center justify-center"
                                                                >
                                                                        <i
                                                                                class="fas fa-bullhorn text-xl bg-gradient-to-r from-[#079272] to-[#2464E8] bg-clip-text text-transparent"
                                                                        ></i>
                                                                </div>
                                                                <div>
                                                                        <h3
                                                                                class="text-2xl font-bold text-gray-900"
                                                                        >
                                                                                O que você ganha?
                                                                        </h3>
                                                                        <p class="text-gray-600">
                                                                                Como Embaixador
                                                                                CONECTA
                                                                        </p>
                                                                </div>
                                                        </div>

                                                        <!-- Benefits Grid -->
                                                        <div
                                                                class="grid grid-cols-1 md:grid-cols-2 gap-4"
                                                        >
                                                                <div
                                                                        v-for="(
                                                                                benefit, index
                                                                        ) in benefits"
                                                                        :key="index"
                                                                        class="group p-4 rounded-xl bg-white/60 border border-white/40 hover:border-[#079272]/30 hover:bg-white/80 transition-all duration-300 hover:shadow-lg cursor-pointer"
                                                                        :style="{
                                                                                animation: `fadeInUp 0.8s ease-out ${0.6 + index * 0.1}s both`,
                                                                        }"
                                                                >
                                                                        <div
                                                                                class="flex items-start gap-3"
                                                                        >
                                                                                <div
                                                                                        class="w-10 h-10 rounded-lg bg-gradient-to-r from-[#079272]/10 to-[#2464E8]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                                                                                >
                                                                                        <i
                                                                                                :class="
                                                                                                        benefit.icon
                                                                                                "
                                                                                                :style="`color: ${benefit.color}`"
                                                                                        ></i>
                                                                                </div>
                                                                                <div>
                                                                                        <h4
                                                                                                class="font-semibold text-gray-900"
                                                                                        >
                                                                                                {{
                                                                                                        benefit.title
                                                                                                }}
                                                                                        </h4>
                                                                                        <p
                                                                                                class="text-sm text-gray-600 mt-1"
                                                                                        >
                                                                                                {{
                                                                                                        benefit.description
                                                                                                }}
                                                                                        </p>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div class="p-5"></div>
                                        </div>

                                        

                                        <div
                                                class="absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-gradient-to-r from-[#2464E8]/5 to-[#079272]/5 border border-white/40 backdrop-blur-sm p-3 shadow-lg flex items-center justify-center"
                                                style="
                                                        animation: float 8s ease-in-out infinite
                                                                reverse;
                                                "
                                        >
                                                <i class="fas fa-bolt text-[#2464E8] text-xl"></i>
                                        </div>
                                </div>
                        </div>
                </div>
        </section>
</template>

<script setup>
import { ref } from 'vue'

const benefits = ref([
        {
                icon: 'fas fa-trophy',
                color: '#FF6B35',
                title: 'Certificação Oficial',
                description: 'certificado da CONECTA',
        },
        {
                icon: 'fas fa-network-wired',
                color: '#079272',
                title: 'Rede de estudantes',
                description: 'acesso direto ao time e outros estudantes lideres',
        },
        {
                icon: 'fas fa-chart-line',
                color: '#2464E8',
                title: 'Desenvolvimento',
                description: 'Treinamentos e mentorias exclusivas',
        },
        {
                icon: 'fas fa-microphone',
                color: '#9C27B0',
                title: 'Visibilidade',
                description: 'Reconhecimento na comunidade conecta',
        },
])

const handleApply = () => {
        console.log('Quero ser embaixador')
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

@keyframes slideInLeft {
        from {
                opacity: 0;
                transform: translateX(-50px);
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

@keyframes float {
        0%,
        100% {
                transform: translateY(0px) translateX(0px);
        }
        33% {
                transform: translateY(-10px) translateX(10px);
        }
        66% {
                transform: translateY(5px) translateX(-5px);
        }
}

.gradient-text {
        background: linear-gradient(135deg, #079272 0%, #2464e8 100%);
        background-size: 200% 200%;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        animation: gradientShift 3s ease infinite;
}
</style>
