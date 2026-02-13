<template>
   <section
      class="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8"
      aria-label="Desafios e pilares da nossa plataforma"
   >
      <div
         class="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#079272]/5 to-[#2464E8]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"
      ></div>
      <div
         class="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-[#2464E8]/5 to-[#079272]/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"
      ></div>

      <div class="relative max-w-7xl mx-auto">
         <div class="text-center mb-16 lg:mb-24" data-aos="fade-up">
            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
               Conectando
               <span
                  class="bg-gradient-to-r from-[#079272] to-[#2464E8] bg-clip-text text-transparent"
                  >talentos</span
               >
               a
               <span
                  class="bg-gradient-to-r from-[#2464E8] to-[#079272] bg-clip-text text-transparent"
                  >oportunidades</span
               >
            </h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
               Uma plataforma dedicada a superar barreiras e criar pontes entre jovens talentosos e
               organizações transformadoras.
            </p>
         </div>

         <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20 lg:mb-32"
            data-aos="fade-up-left"
         >
            <div class="group">
               <div
                  class="h-full bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
               >
                  <div
                     class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#079272]/5 to-transparent rounded-full -translate-y-16 translate-x-16"
                  ></div>

                  <div class="relative">
                     <div class="flex items-center gap-4 mb-8">
                        <div
                           class="w-14 h-14 rounded-xl bg-gradient-to-br from-[#079272]/10 to-[#079272]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        >
                           <svg
                              class="w-7 h-7 text-[#079272]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                           >
                              <path
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 stroke-width="2"
                                 d="M12 14l9-5-9-5-9 5 9 5z"
                              />
                              <path
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 stroke-width="2"
                                 d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                              />
                           </svg>
                        </div>
                        <div>
                           <h2 class="text-2xl lg:text-3xl font-bold text-gray-900">
                              Desafios para os estudantes
                           </h2>
                           <div
                              class="h-1 w-20 bg-gradient-to-r from-[#079272] to-[#079272]/50 rounded-full mt-2"
                           ></div>
                        </div>
                     </div>

                     <p class="text-gray-700 text-lg mb-10 leading-relaxed">
                        Milhões de jovens talentosos não conseguem acessar oportunidades que
                        poderiam transformar suas trajetórias por falta de orientação, mentoria e
                        conexões. Mesmo com potencial e dedicação, muitos estudam sozinhos, sem
                        referências claras de caminho, o que gera frustração e impede que esse
                        talento se converta em impacto real.
                     </p>

                     <ul class="space-y-6 mb-10">
                        <li
                           v-for="(challenge, index) in studentChallenges"
                           :key="index"
                           class="flex items-center gap-4 group/item"
                        >
                           <div class="relative flex-shrink-0">
                              <div
                                 class="w-6 h-6 rounded-full border-2 border-[#079272]/30 group-hover/item:border-[#079272] transition-colors duration-300 flex items-center justify-center"
                              >
                                 <div
                                    class="w-2 h-2 rounded-full bg-[#079272] group-hover/item:scale-125 transition-transform duration-300"
                                 ></div>
                              </div>
                           </div>
                           <span
                              class="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300"
                              >{{ challenge.text }}</span
                           >
                        </li>
                     </ul>
                  </div>
               </div>
            </div>

            <div class="group" :style="{ animationDelay: '0.2s' }" v-animate="'fade-up'">
               <div
                  class="h-full bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
               >
                  <div
                     class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#2464E8]/5 to-transparent rounded-full -translate-y-16 translate-x-16"
                  ></div>

                  <div class="relative">
                     <div class="flex items-center gap-4 mb-8">
                        <div
                           class="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2464E8]/10 to-[#2464E8]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        >
                           <svg
                              class="w-7 h-7 text-[#2464E8]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                           >
                              <path
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 stroke-width="2"
                                 d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                              />
                           </svg>
                        </div>
                        <div>
                           <h2 class="text-2xl lg:text-3xl font-bold text-gray-900">
                              Desafios para as iniciativas
                           </h2>
                           <div
                              class="h-1 w-20 bg-gradient-to-r from-[#2464E8] to-[#2464E8]/50 rounded-full mt-2"
                           ></div>
                        </div>
                     </div>

                     <p class="text-gray-700 text-lg mb-10 leading-relaxed">
                        Iniciativas educacionais e mentores criam oportunidades valiosas, mas
                        enfrentam dificuldades para alcançar os jovens certos e escalar seu impacto.
                        A falta de integração e visibilidade faz com que projetos relevantes atuem
                        de forma isolada, deixando oportunidades transformadoras fora do alcance de
                        quem mais precisa.
                     </p>

                     <ul class="space-y-6 mb-10">
                        <li
                           v-for="(challenge, index) in initiativeChallenges"
                           :key="index"
                           class="flex items-center gap-4 group/item"
                        >
                           <div class="relative flex-shrink-0">
                              <div
                                 class="w-6 h-6 rounded-full border-2 border-[#2464E8]/30 group-hover/item:border-[#2464E8] transition-colors duration-300 flex items-center justify-center"
                              >
                                 <div
                                    class="w-2 h-2 rounded-full bg-[#2464E8] group-hover/item:scale-125 transition-transform duration-300"
                                 ></div>
                              </div>
                           </div>
                           <span
                              class="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300"
                              >{{ challenge.text }}</span
                           >
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>

         <div class="mb-20 lg:mb-32" data-aos="flip-up">
            <div class="text-center mb-12 lg:mb-16">
               <div :style="{ animationDelay: '0.3s' }" v-animate="'fade-up'">
                  <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                     Nossos
                     <span
                        class="bg-gradient-to-r from-[#079272] to-[#2464E8] bg-clip-text text-transparent"
                        >pilares</span
                     >
                     fundamentais
                  </h2>
                  <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                     Os princípios que guiam nossa missão de transformar vidas através da conexão e
                     oportunidade.
                  </p>
               </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8" data-aos="fade-up">
               <div
                  v-for="(pillar, index) in pillars"
                  :key="index"
                  class="group"
                  :style="{ animationDelay: `${0.4 + index * 0.1}s` }"
                  v-animate="'fade-up'"
               >
                  <div
                     class="h-full bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#079272]/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden"
                  >
                     <div class="absolute top-6 right-6">
                        <div
                           class="text-6xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors duration-300"
                        >
                           {{ pillar.number }}
                        </div>
                     </div>

                     <div class="relative">
                        <h3
                           class="text-xl font-semibold text-gray-900 mb-4 mt-16 group-hover:text-[#079272] transition-colors duration-300"
                        >
                           {{ pillar.title }}
                        </h3>
                        <p class="text-gray-600 leading-relaxed">
                           {{ pillar.description }}
                        </p>
                     </div>

                     <div
                        class="h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#079272] to-[#2464E8] rounded-full mt-6 transition-all duration-500"
                     ></div>
                  </div>
               </div>
            </div>
         </div>

         <div class="max-w-2xl mx-auto" data-aos="zoom-in-up">
            <div class="relative group">
               <div
                  class="absolute inset-0 bg-gradient-to-r from-[#079272] to-[#2464E8] rounded-2xl blur-xl opacity-70 group-hover:opacity-90 transition-opacity duration-300 animate-gradient"
               ></div>

               <a
                  class="relative w-full px-8 py-6 rounded-2xl text-white font-semibold text-lg bg-gradient-to-r from-[#079272] to-[#2464E8] hover:from-[#0aab8a] hover:to-[#2a76ff] transition-all duration-300 flex items-center justify-center gap-3 focus:outline-none focus:ring-4 focus:ring-[#2464E8]/30 focus:ring-offset-2 transform hover:-translate-y-1 active:scale-98 shadow-xl hover:shadow-2xl group"
                  href="https://chat.whatsapp.com/HisXkEFGq4v5jEBn8hTM3o"
                  aria-label="Junte-se à nossa plataforma"
               >
                  <span class="relative z-10">Faça parte desta rede transformadora</span>
                  <svg
                     class="w-5 h-5 relative z-10 transform group-hover:translate-x-2 transition-transform duration-300"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                     />
                  </svg>
               </a>
            </div>

            <p class="text-center text-gray-500 mt-6">
               Junte-se a jovens e organizações que querem transformar realidades
            </p>
         </div>
      </div>
   </section>
</template>

<script setup>
import { ref } from 'vue'

const studentChallenges = ref([
   { text: 'Falta de orientação profissional' },
   { text: 'Acesso limitado a oportunidades' },
   { text: 'Falta de referências e mentores' },
])

const initiativeChallenges = ref([
   { text: 'Dificuldade de alcançar o público-alvo' },
   { text: 'Limitações de escala e recursos' },
   { text: 'Falta de infraestrutura tecnológica' },
])

const pillars = ref([
   {
      number: '01',
      title: 'Crescimento Em Rede',
      description:
         'Queremos criar a maior rede social de impacto do Brasil, conectando estudantes, mentores e oportunidades em uma plataforma simples com foco em crescimento coletivo.',
   },
   {
      number: '02',
      title: 'Oportunidade Prática',
      description:
         'Motivamos cada jovem a entrar em ação através de oportunidades personalizadas que incentivem novas conexões e desenvolvimento real.',
   },
   {
      number: '03',
      title: 'Inspirar Por Referência',
      description:
         'Inspiramos estudantes através de pessoas movidas por propósito e dispostas a transformar suas comunidades com ações concretas.',
   },
])

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
@keyframes gradient-shift {
   0%,
   100% {
      background-position: 0% 50%;
   }
   50% {
      background-position: 100% 50%;
   }
}

.animate-gradient {
   background-size: 200% 200%;
   animation: gradient-shift 3s ease infinite;
}

[v-animate] {
   opacity: 0;
}

[v-animate].animated {
   animation: fadeUp 0.6s ease forwards;
}

[v-animate='fade-left'].animated {
   animation: fadeLeft 0.6s ease forwards;
}

@keyframes fadeUp {
   from {
      opacity: 0;
      transform: translateY(30px);
   }
   to {
      opacity: 1;
      transform: translateY(0);
   }
}

@keyframes fadeLeft {
   from {
      opacity: 0;
      transform: translateX(-20px);
   }
   to {
      opacity: 1;
      transform: translateX(0);
   }
}

.transition-all {
   transition-property: all;
   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
   transition-duration: 300ms;
}
@media (max-width: 640px) {
   .text-4xl {
      font-size: 2rem;
   }

   .text-5xl {
      font-size: 2.5rem;
   }

   .p-8 {
      padding: 1.5rem;
   }
}
</style>
