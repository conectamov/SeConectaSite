<template>
        <section
                class="relative min-h-[90vh] flex items-center justify-center px-4 md:px-8 lg:px-20 overflow-hidden"
                aria-labelledby="hero-heading"
        >
                <!-- Background Elements -->
                <div class="absolute inset-0 overflow-hidden -z-10">
                        <!-- Gradient Orbs -->
                        <div
                                class="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-gradient-to-r from-[#079272]/20 to-[#2464E8]/20 blur-3xl"
                                style="animation: float 15s ease-in-out infinite"
                        ></div>
                        <div
                                class="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-gradient-to-r from-[#2464E8]/20 to-[#079272]/20 blur-3xl"
                                style="animation: float 18s ease-in-out infinite reverse"
                        ></div>

                        <!-- Grid Pattern -->
                        <div class="absolute inset-0 opacity-5">
                                <div
                                        class="absolute inset-0"
                                        style="
                                                background-image:
                                                        linear-gradient(
                                                                to right,
                                                                #079272 1px,
                                                                transparent 1px
                                                        ),
                                                        linear-gradient(
                                                                to bottom,
                                                                #2464e8 1px,
                                                                transparent 1px
                                                        );
                                                background-size: 60px 60px;
                                        "
                                ></div>
                        </div>
                </div>

                <div class="relative w-full max-w-6xl flex flex-col items-center">
                        <div class="text-center max-w-4xl">
                                <h1
                                        id="hero-heading"
                                        class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                                        style="animation: fadeInUp 0.8s ease-out 0.3s both"
                                >
                                        <span class="block text-gray-900"> Seja um </span>
                                        <span class="gradient-text inline-block mt-2">
                                                EMBAIXADOR
                                        </span>
                                        <span class="gradient-text inline-block ml-2 relative">
                                                CONECTA
                                                <span
                                                        class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#079272] to-[#2464E8] rounded-full opacity-50"
                                                ></span>
                                        </span>
                                </h1>

                                <p
                                        class="hero-description mt-8 text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-2xl mx-auto"
                                        style="animation: fadeInUp 0.8s ease-out 0.4s both"
                                >
                                        Faça a diferença e deixe seu impacto na sua comunidade e
                                        além.
                                        <span class="block text-gray-600 text-base sm:text-lg mt-2">
                                                Junte-se à rede que transforma talento em impacto
                                                real.
                                        </span>
                                </p>
                        </div>

                        <div
                                class="flex flex-col sm:flex-row gap-4 mt-12"
                                style="animation: fadeInUp 0.8s ease-out 0.6s both"
                        >
                                <button
                                        class="group px-8 py-4 rounded-lg text-white font-semibold bg-gradient-to-r from-[#079272] to-[#2464E8] hover:from-[#067a61] hover:to-[#1d55d6] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#2464E8] focus:ring-offset-2 hover:shadow-[0_8px_30px_rgba(7,146,114,0.4)] shadow-[0_4px_20px_rgba(7,146,114,0.3)] min-w-[200px]"
                                        @click="handleApply"
                                        aria-label="Candidate-se para ser embaixador"
                                >
                                        <span>Candidate-se Agora</span>
                                </button>

                                <a
                                        class="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-lg font-medium border-2 border-[#079272] text-[#079272] hover:bg-[#079272] hover:text-white transition-all duration-200"
                                        href="/sobre"
                                        aria-label="Explorar mais sobre o Conecta"
                                >
                                        Saiba mais
                                </a>
                        </div>
                </div>
        </section>
</template>

<script setup>
const handleApply = () => {
        console.log('Candidatar-se para ser embaixador')
}

const handleLearnMore = () => {
        console.log('Saiba mais sobre o programa')
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

@keyframes fadeInDown {
        from {
                opacity: 0;
                transform: translateY(-20px);
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

@keyframes bounce {
        0%,
        20%,
        50%,
        80%,
        100% {
                transform: translateY(0) translateX(-50%);
        }
        40% {
                transform: translateY(-10px) translateX(-50%);
        }
        60% {
                transform: translateY(-5px) translateX(-50%);
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

.hero-content {
        animation: slideInLeft 0.8s ease-out;
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

.hero-description {
        animation: fadeInUp 0.8s ease-out 0.2s both;
}
</style>
