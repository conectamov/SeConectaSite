<template>
  <section
    class="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-16 px-4 sm:px-6 lg:py-24 lg:px-8"
    aria-label="Membros da equipe"
  >
    <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#2464E8]/5 to-transparent rounded-full -translate-y-16 translate-x-16 blur-3xl"></div>

    <div class="relative max-w-7xl mx-auto">
      <div class="text-center mb-16 lg:mb-20" data-aos="fade-up">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          <span class="bg-gradient-to-r from-[#079272] to-[#2464E8] bg-clip-text text-transparent">
            Time de Desenvolvimento
          </span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Os talentos por trás da construção da nossa plataforma
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <TeamMember
          v-for="member in teamMembers"
          :key="member.id"
          :member="member"
          :data-aos="'fade-up'"
          :style="{ animationDelay: `${0.1 + member.id * 0.1}s` }"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import TeamMember from './TeamMember.vue'

const teamMembers = ref([
  {
    id: 1,
    name: 'Gabriel Masterson',
    role: 'Desenvolvedor Frontend',
    description: 'Responsável pela experiência do usuário e interfaces visuais da plataforma.',
    color: 'from-[#079272] to-[#0DA790]',
    skills: ['Vue.js', 'Tailwind CSS', 'UI/UX'],
    avatarColor: 'bg-gradient-to-br from-[#079272] to-[#0DA790]'
  },
  {
    id: 2,
    name: 'Otavio',
    role: 'Desenvolvedor Backend',
    description: 'Responsavel pelo desenvolvimento do Bot, Match inteligente, recomendações e Api inicial',
    color: 'from-[#2464E8] to-[#2a76ff]',
    skills: ['Python', 'APIs', 'Banco de Dados'],
    avatarColor: 'bg-gradient-to-br from-[#2464E8] to-[#2a76ff]'
  },
  {
    id: 3,
    name: 'Jhenifer',
    role: 'Mídias e Comunicação',
    description: 'Gestão de redes sociais, conteúdo e comunicação visual da marca.',
    color: 'from-[#F59E0B] to-[#D97706]',
    skills: ['Redes Sociais', 'Design Gráfico', 'Marketing'],
    avatarColor: 'bg-gradient-to-br from-[#F59E0B] to-[#D97706]'
  },
  {
    id: 4,
    name: 'Augustus',
    role: 'Desenvolvedor Backend',
    description: 'Atua como mentor na equipe guiando decisões técnicas, ajudando principalmente no desenvolvimento do bot ',
    color: 'from-[#7C3AED] to-[#8B5CF6]',
    skills: ['DevOps', 'Segurança', 'Arquitetura'],
    avatarColor: 'bg-gradient-to-br from-[#7C3AED] to-[#8B5CF6]'
  }
])
</script>