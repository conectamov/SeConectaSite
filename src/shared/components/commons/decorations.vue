<template>
  <div class="pointer-events-none absolute inset-0 overflow-hidden z-0">
    <!-- Blob esquerda -->
    <div
      class="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-teal-400 opacity-55 blur-[120px]"
    ></div>

    <!-- Blob direita -->
    <div
      class="absolute top-0 -right-48 w-[36rem] h-[36rem] rounded-full bg-cyan-400 opacity-55 blur-[130px]"
    ></div>

    <!-- Blob inferior -->
    <div
      class="absolute bottom-[-12rem] left-1/4 w-[32rem] h-[32rem] rounded-full bg-emerald-400 opacity-50 blur-[140px]"
    ></div>

    <!-- Blob extra -->
    <div
      class="absolute bottom-24 right-1/3 w-[24rem] h-[24rem] rounded-full bg-sky-400 opacity-40 blur-[100px]"
    ></div>
  </div>
</template>
