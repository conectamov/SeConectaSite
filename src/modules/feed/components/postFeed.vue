<script setup>
// const props = defineProps({
//   post: {
//     type: Object,
//     required: true,
//   },
// })

let post = {
        author: {
                avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6LXNJFTmLzCoExghcATlCWG85kI8dsnhJng&s',
                id: 0,
                name: 'Marcos Vinicios',
                public_title: 'Marcos Vinicios',
                username: '@marcosvinicios',
                position: 'Game Developer',
        },
        content_md: 'Antes de tudo, deixa eu me apresentar. Me chamo Marcos Vinicio, sou carioca e desenvolvedor de jogos no Cumbuca Labs e AfroGames, medalhista em olimpíadas e aluno do programa Behring Academy. Também alguém que acredita no poder da tecnologia de',
        cover_url: null,
        created_at: '2025-12-29T19:12:40.725Z',
        excerpt: 'string',
        id: 0,
        likes: 10,
        meta: null,
        slug: 'Antes de tudo, deixa eu me apresentar. Me chamo Marcos Vinicio, sou carioca e desenvolvedor de jogos no Cumbuca Labs e AfroGames, medalhista em olimpíadas e aluno do programa Behring Academy. Também alguém que acredita no poder da tecnologia de',
        title: 'Como criar jogos mudou a minha vida e pode mudar a sua também',
}
</script>

<template>
        <div class="relative mx-auto w-[90%] bg-white rounded-xl shadow-lg p-8">
                <div class="flex flex-row justify-between items-center gap-6">
                        <div class="flex items-center gap-6">
                                <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6LXNJFTmLzCoExghcATlCWG85kI8dsnhJng&s"
                                        alt="Avatar"
                                        class="w-16 h-16 rounded-full object-cover ring-4 ring-white bg-white"
                                />

                                <div>
                                        <h1 class="text-lg font-bold text-gray-900">
                                                {{ post.author.name }}
                                        </h1>
                                        <p class="text-gray-500 text-sm">
                                                {{ post.author.username }} ·
                                                {{ post.author.position }}
                                        </p>
                                </div>
                        </div>

                        <div class="ml-4">
                                <span class="px-5 py-3 text-green-800 text-md font-semibold"
                                        >Seguir +</span
                                >
                        </div>
                </div>

                <div class="mt-6 text-gray-700 leading-relaxed w-full">
                        <h1 class="text-2xl font-bold mb-4">
                                {{ post.title }}
                        </h1>
                        <p>
                                {{ post.slug }}...
                                <span class="font-bold text-blue-600">Leia mais</span>
                        </p>
                </div>

                <div class="w-full flex justify-end mt-20 border-t border-gray-200 my-8">
                        <span class="text-sm text-gray-500">
                                Publicado em
                                {{
                                        new Date(post.created_at).toLocaleDateString('pt-BR', {
                                                day: '2-digit',
                                                month: 'long',
                                                year: 'numeric',
                                        })
                                }}
                        </span>
                </div>

                <div class="flex items-center justify-between mt-4">
                        <div
                                class="flex items-center gap-12 text-gray-600 hover:text-blue-600 transition"
                        >
                                <button
                                        class="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
                                >
                                        <i class="fa-solid fa-thumbs-up"></i>
                                        <span>{{ post.likes }} Curtidas</span>
                                </button>

                                <button
                                        class="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
                                >
                                        <i class="fa-solid fa-comment"></i>
                                        <span>Comentar</span>
                                </button>

                                <button
                                        class="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
                                >
                                        <i class="fa-solid fa-share"></i>
                                        <span>Compartilhar</span>
                                </button>
                        </div>

                        <div>
                                <button
                                        class="px-4 py-2 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
                                >
                                        Ver post completo
                                </button>
                        </div>
                </div>
        </div>
</template>
