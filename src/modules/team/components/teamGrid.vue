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
            Administração
          </span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <TeamMember
          v-for="member in teamMembersAdmin"
          :key="member.id"
          :data-aos="'fade-up'"
          :style="{ animationDelay: `${0.1 + member.id * 0.1}s` }"
          :member="member"
        />
      </div>
    </div>
    <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#2464E8]/5 to-transparent rounded-full -translate-y-16 translate-x-16 blur-3xl"></div>

    <div class="relative max-w-7xl mx-auto">
      <div class="text-center mb-16 lg:mb-20" data-aos="fade-up">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          <span class="bg-gradient-to-r from-[#079272] to-[#2464E8] bg-clip-text text-transparent">
            Embaixadores
          </span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <TeamMember
          v-for="member in teamMembersEmb"
          :key="member.id"
          :data-aos="'fade-up'"
          :style="{ animationDelay: `${0.1 + member.id * 0.1}s` }"
          :member="member"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import TeamMember from './teamMember.vue'

const teamMembersAdmin = ref([
  {
    id: 1,
    name: 'Otavio Pinheiro',
    role: 'Diretor Geral',
    description: 'Colocar descrição pessoal da pessoa atrás (dê uma olhada no NOIC)',
    color: 'from-[#2464E8] to-[#2a76ff]',
    skills: [],
    avatarColor: 'bg-gradient-to-br from-[#2464E8] to-[#2a76ff]'
  },
  {
    id: 2,
    name: 'Gabriel Masterson',
    role: 'Diretor de Tecnologia',
    description: 'Colocar descrição pessoal da pessoa atrás (dê uma olhada no NOIC)',
    color: 'from-[#079272] to-[#0DA790]',
    skills: [],
    avatarColor: 'bg-gradient-to-br from-[#079272] to-[#0DA790]'
  },
  {
    id: 3,
    name: 'Jhenifer',
    role: 'Diretora de Mídia e Embaixadores',
    description: 'Colocar descrição pessoal da pessoa atrás (dê uma olhada no NOIC)',
    color: 'from-[#F59E0B] to-[#D97706]',
    skills: [],
    avatarColor: 'bg-gradient-to-br from-[#F59E0B] to-[#D97706]'
  },
])

const teamMembersEmb = ref([
  {
    id: 1,
    name: 'Otavio Pinheiro',
    role: 'Diretor Geral',
    description: 'Colocar descrição pessoal da pessoa atrás (dê uma olhada no NOIC)',
    color: 'from-[#2464E8] to-[#2a76ff]',
    skills: [],
    avatarColor: 'bg-gradient-to-br from-[#2464E8] to-[#2a76ff]'
  },
  {
    id: 2,
    name: 'Gabriel Masterson',
    role: 'Diretor de Tecnologia',
    description: 'Colocar descrição pessoal da pessoa atrás (dê uma olhada no NOIC)',
    color: 'from-[#079272] to-[#0DA790]',
    skills: [],
    avatarColor: 'bg-gradient-to-br from-[#079272] to-[#0DA790]'
  },
  {
    id: 3,
    name: 'Jhenifer',
    role: 'Diretora de Mídia e Embaixadores',
    description: 'Colocar descrição pessoal da pessoa atrás (dê uma olhada no NOIC)',
    color: 'from-[#F59E0B] to-[#D97706]',
    skills: [],
    avatarColor: 'bg-gradient-to-br from-[#F59E0B] to-[#D97706]'
  },
])
</script>