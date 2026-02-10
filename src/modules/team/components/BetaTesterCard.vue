<template>
  <div
    class="group"
    v-animate="'fade-up'"
  >
    <div
      class="h-full bg-white rounded-xl p-6 border border-gray-200 hover:border-[#2464E8]/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg relative overflow-hidden"
    >
      <div class="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#2464E8]/5 to-transparent rounded-full -translate-x-6 -translate-y-6"></div>

      <div class="relative">
        <!-- Ícone de Beta Tester -->
        <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#2464E8]/10 to-[#2464E8]/20">
          <svg class="w-8 h-8 text-[#2464E8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <div class="text-center">
          <h4 class="text-lg font-semibold text-gray-900 mb-1">
            {{ tester.name }}
          </h4>
          <div class="inline-flex items-center gap-1 px-3 py-1 bg-[#2464E8]/10 text-[#2464E8] rounded-full text-xs font-medium mb-4">
            <div class="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></div>
            {{ tester.role }}
          </div>
          
          <p class="text-gray-600 text-sm leading-relaxed">
            {{ tester.feedback }}
          </p>
        </div>

        <div class="flex justify-center mt-6">
          <div class="w-8 h-0.5 bg-gradient-to-r from-[#2464E8]/0 via-[#2464E8] to-[#2464E8]/0 rounded-full group-hover:w-12 transition-all duration-300"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  tester: {
    type: Object,
    required: true
  }
})

const vAnimate = {
  mounted(el) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('animated')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.1 },
    )
    observer.observe(el)
  },
}
</script>

<style scoped>
[v-animate] {
  opacity: 0;
}

[v-animate].animated {
  animation: fadeUp 0.6s ease forwards;
}
</style>