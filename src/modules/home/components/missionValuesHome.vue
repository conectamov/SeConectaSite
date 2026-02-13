<template>
   <section
      class="flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-16 md:py-24 relative overflow-hidden"
      data-aos="flip-right"
   >
      <!-- Decorative blurs -->
      <div
         class="hidden md:block absolute right-24 top-16 w-40 h-40 bg-teal-300/40 rounded-full blur-xl"
      ></div>
      <div
         class="hidden md:block absolute right-10 bottom-20 w-56 h-56 bg-teal-400/30 rounded-full blur-2xl"
      ></div>

      <div
         class="w-full max-w-6xl rounded-2xl bg-white/35 backdrop-blur-xl border border-white/40 shadow-xl overflow-hidden"
      >
         <!-- Tabs Navigation -->
         <div class="flex overflow-x-auto px-3 pt-4 pb-2 gap-1 sm:gap-2">
            <button
               v-for="tab in tabs"
               :key="tab.id"
               @click="activeTab = tab.id"
               class="flex-shrink-0 px-3 sm:px-4 py-2 text-sm sm:text-base rounded-md transition whitespace-nowrap"
               :class="
                  activeTab === tab.id
                     ? 'bg-gradient-to-r from-[#079272] to-[#2464E8] text-white shadow-md'
                     : 'text-gray-700 hover:bg-white/40 bg-white/20'
               "
            >
               {{ tab.label }}
            </button>
         </div>

         <!-- Browser Address Bar (Desktop) -->
         <div
            class="hidden md:flex mt-2 mx-4 rounded-md bg-white/60 px-3 py-2 text-sm text-gray-600 items-center gap-2"
         >
            <span class="text-gray-400">&lt;</span>
            <span class="text-gray-400">&gt;</span>
            <span class="ml-2 text-gray-700 truncate"> www.conecta.com/{{ activeTab }} </span>
         </div>

         <!-- Content Area -->
         <div class="p-4 sm:p-6 md:p-8 min-h-[300px] sm:min-h-[350px]">
            <Transition name="fade-slide" mode="out-in">
               <div :key="activeTab" class="text-gray-800 leading-relaxed">
                  <p
                     v-for="(p, i) in content[activeTab]"
                     :key="i"
                     class="mb-4 text-sm sm:text-base md:text-lg"
                  >
                     {{ p }}
                  </p>
               </div>
            </Transition>
         </div>

         <!-- Mobile Pagination Dots -->
         <div class="md:hidden flex justify-center pb-4">
            <div class="flex space-x-2">
               <div
                  v-for="tab in tabs"
                  :key="tab.id"
                  class="w-2 h-2 rounded-full transition-all"
                  :class="
                     activeTab === tab.id
                        ? 'bg-gradient-to-r from-[#079272] to-[#2464E8] w-4'
                        : 'bg-gray-300'
                  "
               ></div>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('quem-somos')

const tabs = [
   { id: 'quem-somos', label: 'Quem somos' },
   { id: 'missao', label: 'Nossa missão' },
   { id: 'valores', label: 'Nossos valores' },
   { id: 'visao', label: 'Nossa visão' },
]

const content = {
   'quem-somos': [
      'Somos uma iniciativa educacional construída a partir da vivência direta no ambiente escolar, do diálogo constante com estudantes e educadores e da observação dos desafios reais enfrentados ao longo da trajetória acadêmica.',
      'Nascemos do propósito de fortalecer o interesse pelos estudos, estimular a autonomia intelectual e ampliar horizontes para estudantes que, muitas vezes, não encontram apoio suficiente em seus contextos sociais e educacionais.',
      'Acreditamos que muitos estudantes possuem alto potencial acadêmico e humano, mas carecem de incentivo contínuo, orientação estruturada e acesso a oportunidades que transformem esse potencial em resultados concretos.',
      'Atuamos para reduzir distâncias entre estudantes e oportunidades, construindo redes de apoio que valorizam o conhecimento, a troca de experiências e o crescimento coletivo.',
   ],

   missao: [
      'Conectar estudantes a mentores, referências inspiradoras e oportunidades educacionais, acadêmicas e profissionais.',
      'Oferecer orientação e apoio que auxiliem na tomada de decisões conscientes sobre estudos, carreira e desenvolvimento pessoal.',
      'Criar pontes entre o potencial acadêmico dos estudantes e caminhos reais de crescimento, aprendizado contínuo e realização.',
   ],

   valores: [
      'Colaboração como base para a construção de soluções educacionais mais eficazes, inclusivas e sustentáveis.',
      'Empatia no entendimento das diferentes realidades, desafios e contextos individuais de cada estudante.',
      'Compromisso com a educação como direito fundamental e motor de transformação social.',
      'Crença no poder do conhecimento, da orientação e do acesso a oportunidades como ferramentas capazes de mudar trajetórias.',
   ],

   visao: [
      'Ser uma referência em apoio educacional colaborativo, reconhecida pela qualidade, impacto social e consistência de suas ações.',
      'Contribuir para a formação de estudantes mais confiantes, informados e preparados para os desafios acadêmicos e profissionais.',
      'Impactar positivamente a trajetória de milhares de estudantes, ampliando o acesso a oportunidades e promovendo mobilidade educacional e social.',
   ],
}
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
   transition: all 0.25s ease;
}

.fade-slide-enter-from {
   opacity: 0;
   transform: translateY(8px);
}

.fade-slide-leave-to {
   opacity: 0;
   transform: translateY(-8px);
}

.hide-scrollbar {
   -ms-overflow-style: none;
   scrollbar-width: none; 
}

.hide-scrollbar::-webkit-scrollbar {
   display: none; 
}

@media (max-width: 640px) {
   .rounded-2xl {
      border-radius: 1rem;
   }

   .min-h-\[300px\] {
      min-height: 300px;
   }
}

@media (max-width: 768px) {
   .backdrop-blur-xl {
      backdrop-filter: blur(20px);
   }
}
</style>
