<template>
  <div class="bg-[#f7f5f0]">

    <!-- -- ADMINISTRAÇÃO ---- -->
    <section class="pt-16 pb-12 px-6 sm:px-10 md:px-16 lg:px-24" aria-label="Administração">
      <div class="max-w-5xl mx-auto">

        <div class="flex items-center gap-3 mb-10" data-aos="fade-up">
          <div class="w-9 h-9 rounded-xl bg-[#2464E8]/10 border border-[#2464E8]/20 flex items-center justify-center flex-shrink-0">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2464E8" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <div>
            <h2 class="text-[1.1rem] font-bold text-[#111] tracking-[-0.02em]">Administração</h2>
            <p class="text-[0.72rem] text-[#aaa]">Liderança e direção estratégica</p>
          </div>
          <div class="hidden md:block ml-auto h-px w-32 bg-gradient-to-r from-[#2464E8]/25 to-transparent"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <TeamMember
            v-for="(member, i) in teamAdmin"
            :key="member.id"
            :member="member"
            :style="{ animationDelay: `${i * 90}ms` }"
          />
        </div>
      </div>
    </section>

    <!-- Divisor -->
    <div class="px-6 sm:px-10 md:px-16 lg:px-24">
      <div class="max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-[#e8e4dc] to-transparent"></div>
    </div>

    <!-- -- EMBAIXADORES --- -->
    <section class="pt-12 pb-12 px-6 sm:px-10 md:px-16 lg:px-24" aria-label="Embaixadores">
      <div class="max-w-5xl mx-auto">

        <div class="flex items-center gap-3 mb-10" data-aos="fade-up">
          <div class="w-9 h-9 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-center justify-center flex-shrink-0">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </div>
          <div>
            <h2 class="text-[1.1rem] font-bold text-[#111] tracking-[-0.02em]">Embaixadores</h2>
            <p class="text-[0.72rem] text-[#aaa]">Representando a comunidade pelo Brasil</p>
          </div>
          <div class="hidden md:block ml-auto h-px w-32 bg-gradient-to-r from-[#F59E0B]/25 to-transparent"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <TeamMember
            v-for="(member, i) in teamEmb"
            :key="member.id"
            :member="member"
            :style="{ animationDelay: `${i * 75}ms` }"
          />
        </div>
      </div>
    </section>

    <!-- Divisor -->
    <div class="px-6 sm:px-10 md:px-16 lg:px-24">
      <div class="max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-[#e8e4dc] to-transparent"></div>
    </div>

    <!-- ------ TECNOLOGIA ----- -->
    <section class="pt-12 pb-16 px-6 sm:px-10 md:px-16 lg:px-24" aria-label="Tecnologia">
      <div class="max-w-5xl mx-auto">

        <div class="flex items-center gap-3 mb-10" data-aos="fade-up">
          <div class="w-9 h-9 rounded-xl bg-[#079272]/10 border border-[#079272]/20 flex items-center justify-center flex-shrink-0">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#079272" stroke-width="2">
              <polyline points="16 18 22 12 16 6"/>
              <polyline points="8 6 2 12 8 18"/>
            </svg>
          </div>
          <div>
            <h2 class="text-[1.1rem] font-bold text-[#111] tracking-[-0.02em]">Tecnologia</h2>
            <p class="text-[0.72rem] text-[#aaa]">Quem constrói e mantém a plataforma</p>
          </div>
          <div class="hidden md:block ml-auto h-px w-32 bg-gradient-to-r from-[#079272]/25 to-transparent"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <TeamMember
            v-for="(member, i) in teamTech"
            :key="member.id"
            :member="member"
            :style="{ animationDelay: `${i * 75}ms` }"
          />
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import TeamMember from './teamMember.vue'

const teamAdmin = ref([
  {
    id: 1,
    name: 'Otávio Pinheiro',
    role: 'Diretor Geral',
    description: 'Eu sou Otávio! Gosto de programação, escrita e comunicação. Comecei minha jornada de estudos no sétimo ano e descobri olimpíadas científicas através de um vídeo no YouTube. Desde então, oportunidades transformadoras têm mudado minha vida. Agora carrego a missão de usar minhas paixões para transformar a forma com que estudantes podem impactar outros estudantes usando tecnologia!',
    skills: ['Liderança', 'Produto', 'Estratégia'],
    colorA: '#2464E8',
    colorB: '#2a76ff',
    color: 'from-[#2464E8] to-[#2a76ff]',
    avatarColor: 'bg-gradient-to-br from-[#2464E8] to-[#2a76ff]',
    image: 'src/assets/team/otavio.enc'

  },
  {
    id: 2,
    name: 'Gabriel Masterson',
    role: 'Diretor de Tecnologia',
    description: 'Cofundador do SeConecta. Responsável pela stack tecnologiaca da plataforma SeConecta. Desenvolve o backend em FastAPI e o frontend em Vue 3.',
    skills: ['FastAPI', 'Vue 3', 'PostgreSQL'],
    colorA: '#079272',
    colorB: '#0DA790',
    color: 'from-[#079272] to-[#0DA790]',
    avatarColor: 'bg-gradient-to-br from-[#079272] to-[#0DA790]',
  },
  {
    id: 3,
    name: 'Jhenifer',
    role: 'Diretora de Mídia e Embaixadores',
    description: 'À frente de toda a comunicação visual e do programa de embaixadores. Conecta a identidade do SeConecta com estudantes em todo o Brasil através de design e conteúdo.',
    skills: ['Design', 'Mídias Sociais', 'Branding'],
    colorA: '#F59E0B',
    colorB: '#D97706',
    color: 'from-[#F59E0B] to-[#D97706]',
    avatarColor: 'bg-gradient-to-br from-[#F59E0B] to-[#D97706]',
    image: 'src/assets/team/jhenifer.enc'
  },
])

const teamEmb = ref([
  {
    id: 1,
    name: 'Marcos Vinicius',
    role: 'Embaixador',
    description: 'Iniciei na computação aos 13 anos, desenvolvendo jogos ao mesmo tempo que aprendia a ligar um computador. Aos 16 anos criei um game educativo reconhecido como a Melhor Solução Ambiental do Rio de Janeiro na maior competição da NASA, a Space Apps Challenge. No mesmo ano fui convidado pelo IMPA para palestrar no Festival Nacional da Matemática sobre "O Poder dos Jogos". Retornei ao projeto social que me formou, dessa vez não como aluno, mas como desenvolvedor, criando games que podem inspirar jovens, assim como uma vez fui inspirado.',
    skills: [],
    colorA: '#F59E0B',
    colorB: '#D97706',
    color: 'from-[#F59E0B] to-[#D97706]',
    avatarColor: 'bg-gradient-to-br from-[#F59E0B] to-[#D97706]',
  },
  {
    id: 2,
    name: 'Malu Azevedo',
    role: 'Embaixadora',
    description: 'Meu nome é Malu e estou no segundo ano do ensino médio, cursando o técnico integrado em eletrotécnica. Sou apaixonada por matemática, física e programação, desde programação competitiva até ciência de dados e inteligência artificial. Tenho um carinho especial por eletrônica e sistemas embarcados (é onde meu coração realmente mora!). Também tenho uma curiosidade enorme por linguística. Sou uma pessoa muito curiosa e adoro aprender coisas novas e explorar diferentes áreas do conhecimento. Além da ciência e da tecnologia, também amo me expressar através da arte: toco violino, gosto de desenhar e pintar, ler, fazer crochê entre outros. Como embaixadora do seConecta, espero compartilhar um pouco dessa curiosidade e entusiasmo.',
    skills: [],
    colorA: '#F59E0B',
    colorB: '#D97706',
    color: 'from-[#F59E0B] to-[#D97706]',
    avatarColor: 'bg-gradient-to-br from-[#F59E0B] to-[#D97706]',
  },
  {
    id: 4,
    name: 'Isabela Fonseca',
    role: 'Embaixadora',
    description: 'Sou estudante de programação, matemática e inglês, movida pela curiosidade e pela vontade de aprender. Sempre busco desafios que me façam crescer, tanto na área acadêmica quanto pessoal. Também sou apaixonada por esportes, todos os tipos, menos futebol. Natural de Divinópolis, Minas Gerais,  acredito que dedicação e esforço constroem resultados melhores que talento. Como embaixadora, quero representar esses valores e inspirar outros jovens a acreditarem no próprio potencial.',
    skills: [],
    colorA: '#F59E0B',
    colorB: '#D97706',
    color: 'from-[#F59E0B] to-[#D97706]',
    avatarColor: 'bg-gradient-to-br from-[#F59E0B] to-[#D97706]',
  },
  {
    id: 5,
    name: 'Luís Miguel',
    role: 'Embaixador',
    description: 'Nasci em Salvador, Bahia, onde entrei no Colégio Militar de Salvador onde comecei minha jornada olimpica, e graças ao meu desempenho consegui uma bolsa no colégio Farias Brito em Fortaleza. Sou entusiasta de matemática e física e gostaria de ajudar a disseminar o conhecimento para outros jovens.',
    skills: [],
    colorA: '#F59E0B',
    colorB: '#D97706',
    color: 'from-[#F59E0B] to-[#D97706]',
    avatarColor: 'bg-gradient-to-br from-[#F59E0B] to-[#D97706]',
  },
  {
    id: 6,
    name: 'Pedro Henrique',
    role: 'Embaixador',
    description: 'Olá! Eu me chamo Pedro Henrique! Gosto de matemática, física, computação, ler, tocar piano e ajudar pessoas. Comecei a fazer olimpíadas desde os 10 anos e, desde então, obtive medalhas em diversas olimpíadas. Também, tenho orgulho de fazer parte da Behring Academy desde 2025.',
    skills: [],
    colorA: '#F59E0B',
    colorB: '#D97706',
    color: 'from-[#F59E0B] to-[#D97706]',
    avatarColor: 'bg-gradient-to-br from-[#F59E0B] to-[#D97706]',
  },
])

const teamTech = ref([
  {
    id: 1,
    name: 'Gabriel Masterson',
    role: 'Dev Full-stack',
    description: 'Backend em FastAPI e frontend em Vue 3 com Tailwind CSS. Focado em interfaces rápidas e acessíveis.',
    skills: ['Python', 'Vue 3', 'Tailwind CSS'],
    colorA: '#079272',
    colorB: '#0DA790',
    color: 'from-[#079272] to-[#0DA790]',
    avatarColor: 'bg-gradient-to-br from-[#079272] to-[#0DA790]',
  },
  {
    id: 2,
    name: 'Otávio Pinheiro',
    role: 'Dev Backend',
    description: 'Backend em FastAPI de Bot de whatsapp com algoritmos de recomendação',
    skills: ['Python', 'FastAPI',],
    colorA: '#079272',
    colorB: '#0DA790',
    color: 'from-[#079272] to-[#0DA790]',
    avatarColor: 'bg-gradient-to-br from-[#079272] to-[#0DA790]',
    image: 'src/assets/team/otavio.enc'
  },
])
</script>
