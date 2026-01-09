<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import conectaLogo from '../../../assets/conectaLogo.png'

const isOpen = ref(false)
const isMobileMenuOpen = ref(false)
let hoverTimer = null

const toggleDropdown = () => {
        isOpen.value = !isOpen.value
}

const hoverDropdown = () => {
        clearTimeout(hoverTimer)
        isOpen.value = true
}

const leaveDropdown = () => {
        hoverTimer = setTimeout(() => {
                isOpen.value = false
        }, 200)
}

const closeDropdown = () => {
        isOpen.value = false
}

const toggleMobileMenu = () => {
        isMobileMenuOpen.value = !isMobileMenuOpen.value
        // Fechar dropdown se estiver aberto
        if (isOpen.value) {
                isOpen.value = false
        }
}

// Fechar menu ao clicar fora (para mobile)
const handleClickOutside = (event) => {
        const header = document.querySelector('header')
        if (header && !header.contains(event.target)) {
                isMobileMenuOpen.value = false
                isOpen.value = false
        }
}

onMounted(() => {
        document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
        document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
        <header
                class="w-full z-50 py-4 px-4 md:px-8 lg:px-12 xl:px-20 flex justify-between items-center relative"
        >
                <!-- Logo -->
                <a href="/" class="logo-container z-50">
                        <img :src="conectaLogo" class="w-28 md:w-36 lg:w-40" alt="Logo Conecta" />
                </a>

                <!-- Desktop Navigation -->
                <nav class="nav-links hidden lg:flex items-center space-x-6 xl:space-x-8">
                        <a
                                href="/sobre"
                                class="nav-link text-gray-700 font-medium hover:text-[#079272] transition-colors duration-300 px-2 py-1"
                        >
                                Sobre
                        </a>

                        <div class="dropdown-container relative">
                                <button
                                        @click="toggleDropdown"
                                        @mouseenter="hoverDropdown"
                                        @mouseleave="leaveDropdown"
                                        class="dropdown-button flex items-center gap-1 px-2 py-1"
                                        :class="{ 'dropdown-open': isOpen }"
                                        aria-haspopup="true"
                                        :aria-expanded="isOpen"
                                        aria-label="Menu de Programas"
                                >
                                        <span class="nav-link text-gray-700 font-medium"
                                                >Programas</span
                                        >
                                        <span
                                                class="button-icon text-lg transition-transform duration-300"
                                                :class="{ 'rotate-180': isOpen }"
                                        >
                                                ⌄
                                        </span>
                                </button>

                                <div
                                        v-if="isOpen"
                                        @mouseenter="hoverDropdown"
                                        @mouseleave="leaveDropdown"
                                        class="dropdown-menu absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 overflow-hidden"
                                >
                                        <div
                                                class="dropdown-arrow absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100"
                                        ></div>

                                        <div class="p-4 space-y-2">
                                                <a
                                                        href="/mentorias"
                                                        class="dropdown-item group"
                                                        @click="closeDropdown"
                                                >
                                                        <span class="item-text">Mentorias</span>
                                                </a>

                                                <a
                                                        href="/embaixadores"
                                                        class="dropdown-item group"
                                                        @click="closeDropdown"
                                                >
                                                        <span class="item-text">Embaixadores</span>
                                                </a>

                                                <a
                                                        href="/comunidades"
                                                        class="dropdown-item group"
                                                        @click="closeDropdown"
                                                >
                                                        <span class="item-text">Comunidades</span>
                                                </a>
                                        </div>
                                </div>
                        </div>

                        <a
                                href="/equipe"
                                class="nav-link text-gray-700 font-medium hover:text-[#079272] transition-colors duration-300 px-2 py-1"
                        >
                                Equipe
                        </a>
                </nav>

                <!-- Desktop CTA Button -->
                <a href="/feed" class="cta-button hidden lg:block">
                        <button
                                class="relative w-28 md:w-32 font-semibold text-lg px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300 active:scale-95 group"
                        >
                                <div class="relative z-10">Feed</div>
                                <div
                                        class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#079272] to-[#2464E8] rounded-full transition-all duration-300 group-hover:w-20"
                                ></div>
                        </button>
                </a>

                <!-- Mobile Menu Button -->
                <button
                        @click="toggleMobileMenu"
                        class="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center space-y-1.5 z-50"
                        aria-label="Toggle menu"
                        :aria-expanded="isMobileMenuOpen"
                >
                        <span
                                class="block w-6 h-0.5 bg-gray-700 transition-all duration-300"
                                :class="{ 'rotate-45 translate-y-2': isMobileMenuOpen }"
                        ></span>
                        <span
                                class="block w-6 h-0.5 bg-gray-700 transition-all duration-300"
                                :class="{ 'opacity-0': isMobileMenuOpen }"
                        ></span>
                        <span
                                class="block w-6 h-0.5 bg-gray-700 transition-all duration-300"
                                :class="{ '-rotate-45 -translate-y-2': isMobileMenuOpen }"
                        ></span>
                </button>

                <!-- Mobile Menu Overlay -->
                <div
                        v-if="isMobileMenuOpen"
                        class="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                        @click="toggleMobileMenu"
                ></div>

                <!-- Mobile Menu Content -->
                <div
                        v-if="isMobileMenuOpen"
                        class="lg:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-40 transform transition-transform duration-300"
                        :class="{ 'translate-x-0': isMobileMenuOpen }"
                >
                        <div class="pt-20 px-6 pb-6 h-full flex flex-col">
                                <nav class="flex-1 space-y-6">
                                        <a
                                                href="/sobre"
                                                class="block text-lg font-medium text-gray-700 hover:text-[#079272] transition-colors py-2"
                                                @click="toggleMobileMenu"
                                        >
                                                Sobre
                                        </a>

                                        <div class="space-y-2">
                                                <div class="text-lg font-medium text-gray-700 py-2">
                                                        Programas
                                                </div>
                                                <div class="pl-4 space-y-4">
                                                        <a
                                                                href="/mentorias"
                                                                class="block text-gray-600 hover:text-[#079272] transition-colors py-1"
                                                                @click="toggleMobileMenu"
                                                        >
                                                                Mentorias
                                                        </a>
                                                        <a
                                                                href="/embaixadores"
                                                                class="block text-gray-600 hover:text-[#079272] transition-colors py-1"
                                                                @click="toggleMobileMenu"
                                                        >
                                                                Embaixadores
                                                        </a>
                                                        <a
                                                                href="/comunidades"
                                                                class="block text-gray-600 hover:text-[#079272] transition-colors py-1"
                                                                @click="toggleMobileMenu"
                                                        >
                                                                Comunidades
                                                        </a>
                                                </div>
                                        </div>

                                        <a
                                                href="/equipe"
                                                class="block text-lg font-medium text-gray-700 hover:text-[#079272] transition-colors py-2"
                                                @click="toggleMobileMenu"
                                        >
                                                Equipe
                                        </a>
                                </nav>

                                <div class="pt-6 border-t border-gray-100">
                                        <a href="/feed" class="block" @click="toggleMobileMenu">
                                                <button
                                                        class="w-full px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-[#079272] to-[#2464E8] hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-2"
                                                >
                                                        <span>Acessar Feed</span>
                                                        <span>→</span>
                                                </button>
                                        </a>
                                </div>
                        </div>
                </div>
        </header>
</template>

<style scoped>
/* Mantenha os estilos existentes e adicione estes */
.dropdown-button {
        @apply text-gray-700 font-medium px-2 py-1 rounded-lg transition-all duration-300
    hover:bg-gradient-to-r hover:from-[#079272]/10 hover:to-[#2464E8]/10;
}

.dropdown-open {
        @apply bg-gradient-to-r from-[#079272]/10 to-[#2464E8]/10;
}

.button-icon.rotate-180 {
        transform: rotate(180deg);
}

.dropdown-menu {
        animation: dropdownFade 0.2s ease-out;
}

@keyframes dropdownFade {
        from {
                opacity: 0;
                transform: translate(-50%, -10px);
        }
        to {
                opacity: 1;
                transform: translate(-50%, 0);
        }
}

.dropdown-item {
        @apply flex items-center gap-3 p-3 rounded-lg transition-all duration-200
    hover:bg-gradient-to-r hover:from-[#079272]/5 hover:to-[#2464E8]/5
    text-gray-700;
}

.item-text {
        @apply font-medium group-hover:text-[#079272] transition-colors duration-200;
}

/* Mobile menu animation */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
        transition: transform 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
        transform: translateX(100%);
}

/* Hamburger menu animation */
.hamburger-line {
        transition: all 0.3s ease;
}
</style>
