<template>
        <section
                class="min-h-[80vh] flex items-center px-4 md:px-8 lg:px-20"
                aria-labelledby="hero-heading"
        >
                <div
                        class="w-full lg:w-1/2 flex flex-col items-start max-w-2xl"
                        style="animation: slideInLeft 0.8s ease-out"
                >
                        <h1
                                id="hero-heading"
                                class="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900"
                                style="animation: fadeInUp 0.8s ease-out 0.1s both"
                        >
                                Já tentou criar impacto na sua escola ou comunidade?
                        </h1>

                        <p
                                class="mt-6 text-base sm:text-lg text-gray-800 leading-relaxed"
                                style="animation: fadeInUp 0.8s ease-out 0.2s both"
                        >
                                Estamos formando a primeira turma de estudantes que querem
                                transformar iniciativa em impacto real.
                        </p>

                        <button
                                class="w-full mt-8 px-8 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-[#079272] to-[#2464E8] hover:opacity-90 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#2464E8] focus:ring-offset-2 hover:shadow-[0_8px_25px_rgba(7,146,114,0.4)] shadow-[0_4px_15px_rgba(7,146,114,0.3)]"
                                style="animation: fadeInUp 0.8s ease-out 0.3s both"
                                @click="handleBotAccess"
                                aria-label="quero ser embaixador"
                        >
                                Quero ser embaixador
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
const handleBotAccess = () => {
        console.log('Bot acessado')
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
