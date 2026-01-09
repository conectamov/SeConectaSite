<template>
        <section class="hero-section" aria-labelledby="hero-heading">
                <div class="hero-content">
                        <h1 id="hero-heading" class="hero-title">Sobre nos</h1>

                        <p class="hero-description">
                                Somos uma organização sem fim lucrativos que visa uma revolução no
                                ambiente educacional atual, incentivando o protagonismo e senso de
                                comunidade entre os estudantes.
                        </p>
                </div>
        </section>
</template>

<script setup></script>

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

.hero-section {
        @apply min-h-[80vh] flex items-center px-4 md:px-8 lg:px-20;
}

.hero-content {
        @apply w-full lg:w-screen flex flex-col items-start max-w-2xl;
        animation: slideInLeft 0.8s ease-out;
}

.hero-title {
        @apply text-4xl sm:text-6xl lg:text-6xl font-bold leading-tight text-gray-900 text-start;
        animation: fadeInUp 0.8s ease-out 0.1s both;
}

.gradient-text {
        @apply bg-gradient-to-r from-[#079272] to-[#2464E8] bg-clip-text text-transparent;
        background-size: 200% 200%;
        animation: gradientShift 3s ease infinite;
}

.hero-description {
        @apply mt-6 text-base sm:text-xl text-gray-800 leading-relaxed text-start;
        animation: fadeInUp 0.8s ease-out 0.2s both;
}
</style>
