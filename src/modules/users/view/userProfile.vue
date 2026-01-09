<script setup>
const user = {
  name: 'Gabriel Masterson',
  username: '@gabrielmasterson',
  bio: 'Estudante, desenvolvedor e entusiasta de tecnologia. Programação, design e olimpíadas científicas.',
  stats: {
    posts: 42,
    followers: 1280,
    following: 310,
  },
}
</script>

<template>
  <section class="min-h-screen w-full mb-20">
    <div class="relative">
      <img
        src="https://png.pngtree.com/thumb_back/fh260/back_pic/00/02/44/5056179b42b174f.jpg"
        alt="Banner"
        class="h-[40vh] w-full object-cover"
      />
    </div>

    <div class="relative -mt-24 mx-auto w-[90%] bg-white rounded-xl shadow-lg p-8">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div class="flex items-center gap-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6LXNJFTmLzCoExghcATlCWG85kI8dsnhJng&s"
            alt="Avatar"
            class="w-36 h-36 rounded-full object-cover ring-4 ring-white -mt-20 bg-white"
          />

          <div>
            <h1 class="text-2xl font-bold text-gray-900">
              {{ user.name }}
            </h1>
            <p class="text-gray-500">
              {{ user.username }}
            </p>
          </div>
        </div>

        <div class="flex gap-3">
          <button
            class="px-5 py-2 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
          >
            Seguir
          </button>
          <button
            class="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
          >
            Mensagem
          </button>
        </div>
      </div>

      <p class="mt-6 text-gray-700 leading-relaxed max-w-2xl">
        {{ user.bio }}
      </p>

      <div class="mt-8 flex gap-8">
        <div class="text-center">
          <p class="text-xl font-bold text-gray-900">
            {{ user.stats.posts }}
          </p>
          <p class="text-sm text-gray-500">Posts</p>
        </div>

        <div class="text-center">
          <p class="text-xl font-bold text-gray-900">
            {{ user.stats.followers }}
          </p>
          <p class="text-sm text-gray-500">Seguidores</p>
        </div>

        <div class="text-center">
          <p class="text-xl font-bold text-gray-900">
            {{ user.stats.following }}
          </p>
          <p class="text-sm text-gray-500">Seguindo</p>
        </div>
      </div>

      <div class="my-8 border-t"></div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="i in 6" :key="i" class="h-40 bg-gray-200 rounded-lg animate-pulse" />
      </div>
    </div>
  </section>
</template>
