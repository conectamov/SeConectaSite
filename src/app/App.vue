<script setup>
import AppFooter from '@/shared/components/layouts/appFooter.vue'
import AppHeader from '@/shared/components/layouts/appHeader.vue'
import { RouterView } from 'vue-router'
import BgFx from '@/shared/components/commons/bgFx.vue'
</script>

<template>
   <section class="bg-gradient-to-r from-[#D0FAFE] to-[#8DE5BF] min-h-screen">
      <AppHeader />
      <BgFx />
      <RouterView />
      <AppFooter />
   </section>
</template>

<style scoped></style>
