<template>
        <section
                class="min-h-[80vh] flex flex-col items-start lg:items-center p-20 gap-12 lg:gap-20"
                aria-label="Desafios e pilares da nossa plataforma"
        >
                <div
                        class="w-screen flex flex-row gap-12"
                        style="animation: slideInLeft 0.8s ease-out"
                >
                        <div
                                class="flex flex-col gap-6"
                                style="animation: fadeInUp 0.8s ease-out 0.1s both"
                        >
                                <h2 class="text-2xl sm:text-3xl font-bold text-gray-900">
                                        Desafios para os estudantes
                                </h2>

                                <p class="text-base sm:text-lg text-gray-800 leading-relaxed">
                                        Milhões de jovens talentosos não encontram oportunidades e
                                        estão sem estrutura e sem direção para impactar suas
                                        comunidades.
                                </p>

                                <ul class="flex flex-col gap-4">
                                        <li class="flex items-start gap-3">
                                                <div
                                                        class="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5"
                                                >
                                                        <div
                                                                class="w-3 h-3 rounded-full bg-gray-300"
                                                        ></div>
                                                </div>
                                                <span class="text-gray-700"
                                                        >Falta de orientação profissional</span
                                                >
                                        </li>
                                        <li class="flex items-start gap-3">
                                                <div
                                                        class="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5"
                                                >
                                                        <div
                                                                class="w-3 h-3 rounded-full bg-gray-300"
                                                        ></div>
                                                </div>
                                                <span class="text-gray-700"
                                                        >Acesso limitado a oportunidades</span
                                                >
                                        </li>
                                        <li class="flex items-start gap-3">
                                                <div
                                                        class="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5"
                                                >
                                                        <div
                                                                class="w-3 h-3 rounded-full bg-gray-300"
                                                        ></div>
                                                </div>
                                                <span class="text-gray-700"
                                                        >Falta de referências e mentores</span
                                                >
                                        </li>
                                </ul>

                                <div class="flex items-center gap-3 pt-2">
                                        <span
                                                class="text-lg font-semibold bg-gradient-to-r from-[#079272] to-[#2464E8] bg-clip-text text-transparent"
                                        >
                                                Impacto direto no futuro
                                        </span>
                                        <span class="text-gray-400">→</span>
                                </div>
                        </div>

                        <!-- Desafios para iniciativas -->
                        <div
                                class="flex flex-col gap-6"
                                style="animation: fadeInUp 0.8s ease-out 0.2s both"
                        >
                                <h2 class="text-2xl sm:text-3xl font-bold text-gray-900">
                                        Desafios para as iniciativas
                                </h2>

                                <p class="text-base sm:text-lg text-gray-800 leading-relaxed">
                                        Organizações e mentores não conseguem alcançar e escalar
                                        suas iniciativas para atender a demanda de jovens no Brasil.
                                </p>

                                <ul class="flex flex-col gap-4">
                                        <li class="flex items-start gap-3">
                                                <div
                                                        class="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5"
                                                >
                                                        <div
                                                                class="w-3 h-3 rounded-full bg-gray-300"
                                                        ></div>
                                                </div>
                                                <span class="text-gray-700"
                                                        >Dificuldade de alcançar o
                                                        público-alvo</span
                                                >
                                        </li>
                                        <li class="flex items-start gap-3">
                                                <div
                                                        class="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5"
                                                >
                                                        <div
                                                                class="w-3 h-3 rounded-full bg-gray-300"
                                                        ></div>
                                                </div>
                                                <span class="text-gray-700"
                                                        >Limitações de escala e recursos</span
                                                >
                                        </li>
                                        <li class="flex items-start gap-3">
                                                <div
                                                        class="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5"
                                                >
                                                        <div
                                                                class="w-3 h-3 rounded-full bg-gray-300"
                                                        ></div>
                                                </div>
                                                <span class="text-gray-700"
                                                        >Falta de infraestrutura tecnológica</span
                                                >
                                        </li>
                                </ul>

                                <div class="flex items-center gap-3 pt-2">
                                        <span
                                                class="text-lg font-semibold bg-gradient-to-r from-[#079272] to-[#2464E8] bg-clip-text text-transparent"
                                        >
                                                Barreiras de alcance e escala
                                        </span>
                                        <span class="text-gray-400">→</span>
                                </div>
                        </div>
                </div>

                <!-- Coluna Direita - Pilares -->
                <div
                        class="w-full lg:w-1/2 flex flex-row gap-12"
                        style="animation: fadeInUp 0.8s ease-out 0.3s both"
                >
                        <div class="flex flex-row gap-8">
                                <h2 class="text-3xl sm:text-4xl font-bold text-gray-900">
                                        Nossos pilares
                                </h2>

                                <div
                                        class="flex flex-col gap-4 p-6 rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50/50 hover:shadow-lg transition-all duration-300"
                                >
                                        <div class="flex items-center gap-3">
                                                <div
                                                        class="w-10 h-10 rounded-lg bg-gradient-to-r from-[#079272]/10 to-[#2464E8]/10 flex items-center justify-center"
                                                >
                                                        <span
                                                                class="text-lg font-bold bg-gradient-to-r from-[#079272] to-[#2464E8] bg-clip-text text-transparent"
                                                        >
                                                                01
                                                        </span>
                                                </div>
                                                <h3 class="text-xl font-semibold text-gray-900">
                                                        Crescimento Em Rede
                                                </h3>
                                        </div>
                                        <p class="text-gray-700 leading-relaxed">
                                                Queremos criar a maior rede social de impacto do
                                                Brasil, conectando estudantes, mentores e
                                                oportunidades em uma plataforma simples com foco em
                                                crescimento coletivo.
                                        </p>
                                </div>

                                <div
                                        class="flex flex-col gap-4 p-6 rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50/50 hover:shadow-lg transition-all duration-300"
                                >
                                        <div class="flex items-center gap-3">
                                                <div
                                                        class="w-10 h-10 rounded-lg bg-gradient-to-r from-[#079272]/10 to-[#2464E8]/10 flex items-center justify-center"
                                                >
                                                        <span
                                                                class="text-lg font-bold bg-gradient-to-r from-[#079272] to-[#2464E8] bg-clip-text text-transparent"
                                                        >
                                                                02
                                                        </span>
                                                </div>
                                                <h3 class="text-xl font-semibold text-gray-900">
                                                        Oportunidade Prática
                                                </h3>
                                        </div>
                                        <p class="text-gray-700 leading-relaxed">
                                                Motivamos cada jovem a entrar em ação através de
                                                oportunidades que mais se encaixam no seu perfil e
                                                que incentivem novas conexões.
                                        </p>
                                </div>

                                <div
                                        class="flex flex-col gap-4 p-6 rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50/50 hover:shadow-lg transition-all duration-300"
                                >
                                        <div class="flex items-center gap-3">
                                                <div
                                                        class="w-10 h-10 rounded-lg bg-gradient-to-r from-[#079272]/10 to-[#2464E8]/10 flex items-center justify-center"
                                                >
                                                        <span
                                                                class="text-lg font-bold bg-gradient-to-r from-[#079272] to-[#2464E8] bg-clip-text text-transparent"
                                                        >
                                                                03
                                                        </span>
                                                </div>
                                                <h3 class="text-xl font-semibold text-gray-900">
                                                        Inspirar Por Referência
                                                </h3>
                                        </div>
                                        <p class="text-gray-700 leading-relaxed">
                                                Inspiramos estudantes através de pessoas movidas por
                                                propósito e dispostas a transformar suas
                                                comunidades.
                                        </p>
                                </div>
                        </div>

                        <button
                                class="w-full mt-4 px-8 py-4 rounded-lg text-white font-medium bg-gradient-to-r from-[#079272] to-[#2464E8] hover:opacity-90 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#2464E8] focus:ring-offset-2 hover:shadow-[0_8px_25px_rgba(7,146,114,0.4)] shadow-[0_4px_15px_rgba(7,146,114,0.3)]"
                                style="animation: fadeInUp 0.8s ease-out 0.4s both"
                                @click="handleJoinPlatform"
                                aria-label="Junte-se à nossa plataforma"
                        >
                                Faça parte desta rede
                                <span
                                        class="transition-transform duration-200 group-hover:translate-x-1"
                                        aria-hidden="true"
                                >
                                        →
                                </span>
                        </button>
                </div>
        </section>
</template>

<script setup>
const handleJoinPlatform = () => {
        console.log('Junte-se à plataforma')
}
</script>

<style scoped>
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
</style>
