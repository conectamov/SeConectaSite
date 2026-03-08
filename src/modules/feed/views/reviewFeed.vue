<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Hero     from '../components/heroReviewFeed.vue'
import PostCard from '../components/postFeed.vue'
import { useAxios } from '@/composables/useAxios'
import { useAuth  } from '@/composables/useAuth'

function debounce(fn, delay) {
  let t
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), delay) }
}

const router = useRouter()
const { get } = useAxios()
const { currentUser, isAuthenticated } = useAuth()

const posts       = ref([])
const loading     = ref(true)
const loadingMore = ref(false)
const error       = ref(null)
const searchQuery = ref('')
const activeTag   = ref('')
const page        = ref(1)
const totalCount  = ref(0)
const LIMIT       = 8

const feedMode = ref('general') // 'general' | 'personalized'


const hasMore = computed(() => posts.value.length < totalCount.value)

const hasInterests = computed(() => (currentUser.value?.interests?.length ?? 0) > 0)

const popularTags = ['carreira', 'tecnologia', 'startup', 'design', 'produto', 'python', 'gestão']

async function fetchPosts(reset = true) {
  if (reset) { page.value = 1; loading.value = true }
  else loadingMore.value = true
  error.value = null

  try {
    let res
    const params = { page: page.value, limit: LIMIT }
    if (searchQuery.value.trim()) params.search = searchQuery.value.trim()
    if (activeTag.value)          params.tag    = activeTag.value
    res = await get('/posts/pending', { params })

    const data  = res.data.data  ?? []
    const count = res.data.count ?? 0

    if (reset) { posts.value = data; totalCount.value = count }
    else         posts.value.push(...data)
  } catch {
    error.value = 'Não foi possível carregar os posts.'
  } finally {
    loading.value = loadingMore.value = false
  }
}

async function loadMore() {
  if (!hasMore.value || loadingMore.value) return
  page.value++
  await fetchPosts(false)
}

function setTag(tag) {
  activeTag.value   = activeTag.value === tag ? '' : tag
  feedMode.value    = 'general'
  searchQuery.value = ''
  fetchPosts(true)
}

function setFeedMode(mode) {
  feedMode.value    = mode
  activeTag.value   = ''
  searchQuery.value = ''
  fetchPosts(true)
}

watch(searchQuery, debounce(() => {
  if (feedMode.value === 'personalized') feedMode.value = 'general'
  activeTag.value = ''
  fetchPosts(true)
}, 400))

onMounted(() => {
  if (isAuthenticated.value && hasInterests.value) feedMode.value = 'personalized'
  fetchPosts()
})

function openArticle(post) {
  router.push({ name: 'article', params: { slug: post.slug } })
}
</script>

<template>
  <div class="min-h-screen">
    <Hero />

    <div class="bg-white">
      <div class="max-w-[900px] mx-auto px-4 md:px-8 pt-10 pb-4">

        <!-- Cabeçalho + toggle de feed -->
        <div class="flex items-center justify-between mb-6 flex-wrap gap-3">
          <h2 class="text-2xl font-bold text-[#111] tracking-[-0.02em]">
            {{ feedMode === 'personalized' ? 'Para você' : activeTag ? `#${activeTag}` : 'Explorar' }}
          </h2>

          <div v-if="isAuthenticated && hasInterests"
            class="flex gap-1 bg-[#f7f5f0] border border-[#e8e4dc] rounded-xl p-1">
            <button
              v-for="m in [{ key: 'personalized', label: 'Para você' }, { key: 'general', label: 'Explorar' }]"
              :key="m.key"
              class="text-[0.75rem] font-semibold px-3 py-1.5 rounded-lg transition-all border-none cursor-pointer"
              :class="feedMode === m.key
                ? 'bg-white text-[#111] shadow-sm'
                : 'bg-transparent text-[#aaa] hover:text-[#555]'"
              @click="setFeedMode(m.key)"
            >{{ m.label }}</button>
          </div>
        </div>

        <!-- Busca -->
        <div class="relative mb-4">
          <svg class="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
            width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Buscar posts, títulos..."
            class="w-full h-11 pl-11 pr-5 bg-white border border-[#e8e4dc] rounded-xl text-sm text-[#111] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#079272] focus:border-transparent transition-all"
          />
          <svg v-if="loading && searchQuery"
            class="absolute right-4 top-1/2 -translate-y-1/2 animate-spin text-[#079272]"
            width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
          </svg>
        </div>

        <!-- Tags chips -->
        <div v-if="feedMode === 'general'" class="flex items-center gap-2 flex-wrap mb-2">
          <button
            v-for="tag in popularTags" :key="tag"
            class="text-[0.72rem] font-semibold px-2.5 py-1 rounded-full border transition-all cursor-pointer"
            :class="activeTag === tag
              ? 'bg-[#0d0d0d] text-white border-[#0d0d0d]'
              : 'bg-white text-[#666] border-[#e8e4dc] hover:border-[#079272] hover:text-[#079272]'"
            @click="setTag(tag)"
          >#{{ tag }}</button>
          <button v-if="activeTag"
            class="text-[0.72rem] text-[#aaa] hover:text-red-500 transition-colors cursor-pointer border-none bg-transparent"
            @click="setTag('')">✕ limpar</button>
        </div>
      </div>

      <main class="max-w-[900px] mx-auto px-4 md:px-8 pb-24 pt-2 flex flex-col gap-4">

        <!-- Skeleton -->
        <template v-if="loading">
          <div v-for="i in 4" :key="i"
            class="bg-white rounded-2xl border border-[#e8e4dc] p-8 animate-pulse flex flex-col gap-3">
            <div class="flex gap-3">
              <div class="h-3 w-20 bg-[#f0ece5] rounded-full"></div>
              <div class="h-3 w-16 bg-[#f0ece5] rounded-full"></div>
            </div>
            <div class="h-5 w-3/4 bg-[#f0ece5] rounded-lg"></div>
            <div class="h-3.5 w-full bg-[#f0ece5] rounded"></div>
            <div class="h-3.5 w-4/5 bg-[#f0ece5] rounded"></div>
            <div class="flex justify-between mt-1">
              <div class="flex gap-2">
                <div class="h-8 w-16 bg-[#f0ece5] rounded-lg"></div>
                <div class="h-8 w-8 bg-[#f0ece5] rounded-lg"></div>
              </div>
              <div class="h-8 w-20 bg-[#f0ece5] rounded-lg"></div>
            </div>
          </div>
        </template>

        <!-- Erro -->
        <div v-else-if="error" class="flex flex-col items-center py-20 gap-4 text-center">
          <div class="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e53e3e" stroke-width="2">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <p class="text-sm font-light text-[#666]">{{ error }}</p>
          <button
            class="text-sm font-semibold px-5 py-2 bg-[#0d0d0d] text-white rounded-lg hover:bg-[#079272] transition-colors border-none cursor-pointer"
            @click="fetchPosts()">Tentar novamente</button>
        </div>

        <!-- Vazio -->
        <div v-else-if="posts.length === 0" class="flex flex-col items-center py-20 gap-3 text-center">
          <div class="w-14 h-14 rounded-2xl bg-[#f7f5f0] flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="1.5">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </div>
          <p class="text-sm font-light text-[#666]">
            <span v-if="feedMode === 'personalized'">Nenhum post corresponde aos seus interesses ainda.</span>
            <span v-else-if="activeTag">Nenhum post com a tag <strong>#{{ activeTag }}</strong>.</span>
            <span v-else-if="searchQuery">Nenhum resultado para "<strong>{{ searchQuery }}</strong>".</span>
            <span v-else>Nenhum post encontrado.</span>
          </p>
          <button
            v-if="feedMode === 'personalized' || activeTag || searchQuery"
            class="text-xs text-[#079272] underline border-none bg-transparent cursor-pointer"
            @click="setFeedMode('general'); activeTag = ''; searchQuery = ''"
          >Ver todos os posts</button>
        </div>

        <!-- Posts -->
        <template v-else>
          <PostCard
            v-for="(post, index) in posts"
            :key="post.id"
            :post="post"
            :index="index"
            @read="openArticle"
          />

          <div v-if="hasMore" class="flex justify-center pt-2">
            <button
              class="flex items-center gap-2 text-sm font-semibold px-8 py-3 border border-[#e8e4dc] text-[#666] rounded-xl hover:border-[#0d0d0d] hover:text-[#111] transition-all disabled:opacity-40 cursor-pointer bg-transparent"
              :disabled="loadingMore"
              @click="loadMore"
            >
              <svg v-if="loadingMore" class="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
              </svg>
              {{ loadingMore ? 'Carregando...' : `Carregar mais (${totalCount - posts.length} restantes)` }}
            </button>
          </div>
        </template>

      </main>
    </div>
  </div>
</template>
