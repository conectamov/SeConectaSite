<template>
  <div
    class="group relative"
    v-animate="'fade-up'"
  >
    <div
      class="h-full bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
    >
      <div
      
        class="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"
        :class="member.avatarColor"
      ></div>

      <div class="relative">
        <div class="flex justify-center mb-6">
          <div
            class="w-24 h-24 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg"
            :class="member.avatarColor"
          >
            {{ getInitials(member.name) }}
          </div>
        </div>

        <div class="text-center mb-4">
          <h3 class="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
            {{ member.name }}
          </h3>
          <div
            class="inline-flex items-center gap-2 mt-2 px-3 py-1 rounded-full text-sm font-medium"
            :class="`bg-gradient-to-r ${member.color} bg-clip-text text-transparent`"
          >
            <div class="w-2 h-2 rounded-full bg-current"></div>
            {{ member.role }}
          </div>
        </div>

        <p class="text-gray-600 text-center mb-6 leading-relaxed">
          {{ member.description }}
        </p>

        <div class="flex flex-wrap gap-2 justify-center">
          <span
            v-for="(skill, index) in member.skills"
            :key="index"
            class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors duration-300"
          >
            {{ skill }}
          </span>
        </div>

        <div
          class="h-1 w-0 group-hover:w-full bg-gradient-to-r rounded-full mt-6 transition-all duration-500"
          :class="member.color"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  member: {
    type: Object,
    required: true
  }
})

const getInitials = (name) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

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

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>