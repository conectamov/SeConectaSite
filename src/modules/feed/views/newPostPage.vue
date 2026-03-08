<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAxios } from '@/composables/useAxios'
import { useAuth  } from '@/composables/useAuth'
import { marked   } from 'marked'
import DOMPurify   from 'dompurify'

const router            = useRouter()
const { post: apiPost } = useAxios()
const { isAuthenticated } = useAuth()

// Redireciona se não estiver logado
onMounted(() => {
  if (!isAuthenticated.value) router.replace({ name: 'login' })
})

const form = ref({
  title:      '',
  content_md: '',
  excerpt:    '',
  cover_url:  '',
  tags:       [],
})
const tagInput = ref('')
const tagInputEl = ref(null)
const submitting = ref(false)
const error      = ref(null)
const success    = ref(false)
const activeTab  = ref('write')
const errors     = ref({})
const active     = ref(null)

// ── Tags ─────────────────────────────────────────────

function slugify(text) {
  return text
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

function addTag() {
  const t = slugify(tagInput.value)

  if (t && !form.value.tags.includes(t) && form.value.tags.length < 5) {
    form.value.tags.push(t)
  }

  tagInput.value = ''
}

function removeTag(tag) {
  form.value.tags = form.value.tags.filter(t => t !== tag)
}

function onTagKeydown(e) {
  if (e.key === 'Enter' || e.key === ',') {
    e.preventDefault()
    addTag()
  }

  if (e.key === 'Backspace' && !tagInput.value && form.value.tags.length) {
    form.value.tags.pop()
  }
}

// ── Validação ────────────────────────────────────────
function validate() {
  errors.value = {}
  if (!form.value.title.trim())        errors.value.title = 'O título é obrigatório.'
  else if (form.value.title.length > 256) errors.value.title = 'Máximo 256 caracteres.'
  if (!form.value.content_md.trim())   errors.value.content_md = 'O conteúdo é obrigatório.'
  if (form.value.cover_url && !/^https?:\/\/.+/.test(form.value.cover_url))
    errors.value.cover_url = 'URL inválida. Use http:// ou https://'
  return !Object.keys(errors.value).length
}

watch(() => form.value.title,      () => delete errors.value.title)
watch(() => form.value.content_md, () => delete errors.value.content_md)
watch(() => form.value.cover_url,  () => delete errors.value.cover_url)

const wordCount     = computed(() => form.value.content_md.trim().split(/\s+/).filter(Boolean).length)
const readTime      = computed(() => Math.max(1, Math.ceil(wordCount.value / 200)))
const excerptPreview = computed(() =>
  form.value.excerpt ||
  form.value.content_md.replace(/[#*`>\-_~[\]()]/g, '').trim().slice(0, 160)
)
const markdownPreview = computed(() => DOMPurify.sanitize(marked.parse(form.value.content_md || '')))

// ── Submit ────────────────────────────────────────────
async function handleSubmit() {
  if (!validate()) return
  submitting.value = true
  error.value      = null

  const payload = {
    title:      form.value.title.trim(),
    content_md: form.value.content_md.trim(),
  }
  if (form.value.excerpt.trim())   payload.excerpt   = form.value.excerpt.trim()
  if (form.value.cover_url.trim()) payload.cover_url = form.value.cover_url.trim()
  if (form.value.tags.length)      payload.tags      = form.value.tags

  try {
    await apiPost('/posts/', payload)
    success.value = true
    // FIX: post entra em análise (approved=false), redirecionar para o feed
    setTimeout(() => router.push({ name: 'feed' }), 2500)
  } catch (err) {
    const status = err?.response?.status
    if (status === 401 || status === 403) error.value = 'Sem permissão para publicar.'
    else if (status === 422)              error.value = 'Dados inválidos. Verifique os campos.'
    else                                  error.value = 'Erro ao publicar. Tente novamente.'
  } finally {
    submitting.value = false
  }
}

// ── Guia Markdown ─────────────────────────────────────
const topics = [
  { title: 'Títulos',           content: ['# Título principal', '## Subtítulo', '### Seção menor'] },
  { title: 'Negrito',           content: ['**Texto em negrito**'] },
  { title: 'Itálico',           content: ['*Texto em itálico*'] },
  { title: 'Negrito + Itálico', content: ['***Negrito e itálico***'] },
  { title: 'Texto riscado',     content: ['~~Texto riscado~~'] },
  { title: 'Lista simples',     content: ['- Item 1', '- Item 2'] },
  { title: 'Lista numerada',    content: ['1. Primeiro', '2. Segundo'] },
  { title: 'Checklist',         content: ['- [ ] Pendente', '- [x] Concluída'] },
  { title: 'Links',             content: ['[Texto](https://url.com)'] },
  { title: 'Imagens',           content: ['![Alt](https://img.url)'] },
  { title: 'Código inline',     content: ['`console.log("olá")`'] },
  { title: 'Bloco de código',   content: ['```javascript', 'console.log("olá")', '```'] },
  { title: 'Citações',          content: ['> Esta é uma citação'] },
  { title: 'Linha horizontal',  content: ['---'] },
]
function toggle(i) { active.value = active.value === i ? null : i }
</script>

<template>
  <div class="min-h-screen bg-[#f7f5f0] flex gap-5 px-4 md:px-8 py-6 max-w-[1400px] mx-auto">

    <!-- Guia Markdown -->
    <aside class="hidden xl:flex flex-col w-52 flex-shrink-0">
      <div class="bg-white rounded-2xl border border-[#e8e4dc] p-5 sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto">
        <h2 class="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[#aaa] mb-4">Guia Markdown</h2>
        <div v-for="(topic, i) in topics" :key="i" class="border-b border-[#f7f5f0] last:border-0 pb-2 mb-2">
          <button
            class="w-full text-left text-[0.78rem] font-semibold text-[#555] hover:text-[#079272] transition-colors cursor-pointer border-none bg-transparent py-1"
            @click="toggle(i)"
          >{{ topic.title }}</button>
          <div v-if="active === i" class="mt-1.5 space-y-1">
            <code v-for="(line, j) in topic.content" :key="j"
              class="block text-[0.68rem] bg-[#f7f5f0] text-[#079272] px-2 py-0.5 rounded font-mono">{{ line }}</code>
          </div>
        </div>
      </div>
    </aside>

    <!-- Formulário -->
    <div class="flex-1 min-w-0">
      <div class="bg-white rounded-2xl border border-[#e8e4dc] px-6 md:px-10 py-8">

        <div class="mb-8">
          <h1 class="text-2xl font-bold text-[#111] tracking-[-0.02em] mb-1">Novo post</h1>
          <p class="text-sm font-light text-[#aaa]">Compartilhe sua história com a comunidade Conecta.</p>
        </div>

        <!-- FIX: mensagem de sucesso correta — post vai para análise, não direto ao ar -->
        <div v-if="success"
          class="flex items-start gap-3 bg-amber-50 border border-amber-200 text-amber-700 rounded-xl px-5 py-4 mb-6 text-sm font-medium">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="flex-shrink-0 mt-0.5">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
          <div>
            <div class="font-semibold">Post enviado para análise!</div>
            <div class="font-light text-[0.8rem] mt-0.5">Um diretor irá revisar e publicar em breve. Redirecionando...</div>
          </div>
        </div>

        <!-- Erro -->
        <div v-if="error"
          class="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl px-5 py-4 mb-6 text-sm font-medium">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          {{ error }}
          <button class="ml-auto text-red-400 hover:text-red-600 border-none bg-transparent cursor-pointer" @click="error = null">✕</button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-8 items-start">

          <!-- Campos principais -->
          <div class="flex flex-col gap-6">

            <!-- Título -->
            <div>
              <label class="block text-xs font-semibold uppercase tracking-[0.1em] text-[#aaa] mb-2">
                Título <span class="text-red-500">*</span>
              </label>
              <input
                v-model="form.title"
                type="text"
                placeholder="Escreva um título cativante..."
                maxlength="256"
                class="w-full h-14 px-5 text-xl font-bold text-[#111] bg-white border rounded-xl placeholder:text-[#ccc] placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[#079272] focus:border-transparent transition-all"
                :class="errors.title ? 'border-red-400' : 'border-[#e8e4dc]'"
              />
              <div class="flex justify-between mt-1">
                <span class="text-xs text-red-500">{{ errors.title || '' }}</span>
                <span class="text-xs text-[#aaa]">{{ form.title.length }}/256</span>
              </div>
            </div>

            <!-- Conteúdo -->
            <div>
              <div class="flex items-center justify-between mb-2">
                <label class="text-xs font-semibold uppercase tracking-[0.1em] text-[#aaa]">
                  Conteúdo <span class="text-red-500">*</span>
                </label>
                <div class="flex gap-1 bg-[#f7f5f0] border border-[#e8e4dc] rounded-lg p-0.5">
                  <button
                    v-for="tab in ['write', 'preview']" :key="tab"
                    class="text-[0.72rem] font-semibold px-3 py-1 rounded-md transition-all duration-150 border-none cursor-pointer"
                    :class="activeTab === tab ? 'bg-white text-[#111] shadow-sm' : 'bg-transparent text-[#aaa] hover:text-[#555]'"
                    @click="activeTab = tab"
                  >{{ tab === 'write' ? 'Escrever' : 'Preview' }}</button>
                </div>
              </div>

              <div v-if="activeTab === 'write'"
                class="flex items-center gap-1 bg-[#f7f5f0] border border-b-0 border-[#e8e4dc] rounded-t-xl px-3 py-2">
                <button
                  v-for="t in [
                    { l:'B',  ins:'**texto**' },
                    { l:'I',  ins:'*texto*' },
                    { l:'H2', ins:'\n## ' },
                    { l:'❝',  ins:'\n> ' },
                    { l:'<>', ins:'`código`' },
                  ]" :key="t.l"
                  class="text-[0.72rem] font-semibold w-7 h-7 rounded flex items-center justify-center text-[#666] hover:bg-white hover:text-[#111] transition-all border-none bg-transparent cursor-pointer"
                  @click="form.content_md += t.ins"
                >{{ t.l }}</button>
                <span class="ml-auto text-[0.68rem] text-[#aaa]">Markdown</span>
              </div>

              <textarea
                v-if="activeTab === 'write'"
                v-model="form.content_md"
                placeholder="Escreva em Markdown..."
                rows="18"
                class="w-full p-5 font-mono text-[0.9rem] text-[#333] leading-relaxed bg-white border border-[#e8e4dc] rounded-b-xl resize-y focus:outline-none focus:ring-2 focus:ring-[#079272] focus:border-transparent transition-all"
                :class="errors.content_md ? '!border-red-400' : ''"
              ></textarea>

              <div v-else class="w-full min-h-[360px] p-6 bg-white border border-[#e8e4dc] rounded-xl">
                <div v-if="form.content_md" class="prose max-w-none article-body" v-html="markdownPreview"></div>
                <p v-else class="text-[#ccc] font-light text-sm italic">O preview aparece aqui...</p>
              </div>

              <div class="flex justify-between mt-1">
                <span class="text-xs text-red-500">{{ errors.content_md || '' }}</span>
                <span class="text-xs text-[#aaa]">{{ wordCount }} palavras · ~{{ readTime }} min</span>
              </div>
            </div>

            <!-- Tags — campo novo -->
            <div>
    <label class="block text-xs font-semibold uppercase tracking-[0.1em] text-[#aaa] mb-2">
      Tags
      <span class="text-[#ccc] font-normal normal-case tracking-normal">
        (até 5, opcional)
      </span>
    </label>

    <div
      class="flex flex-wrap items-center gap-1.5 min-h-[44px] px-3 py-2 bg-white border border-[#e8e4dc] rounded-xl focus-within:ring-2 focus-within:ring-[#079272] transition-all cursor-text"
      @click="tagInputEl?.focus()"
    >
      <span
        v-for="tag in form.tags"
        :key="tag"
        class="flex items-center gap-1 text-[0.72rem] font-semibold px-2 py-0.5 bg-[#f0faf7] border border-[#079272]/30 text-[#079272] rounded-full"
      >
        #{{ tag }}

        <button
          class="text-[#079272]/50 hover:text-red-500 transition-colors border-none bg-transparent cursor-pointer p-0 leading-none"
          @click.stop="removeTag(tag)"
        >
          ×
        </button>
      </span>

      <input
        v-if="form.tags.length < 5"
        ref="tagInputEl"
        v-model="tagInput"
        type="text"
        placeholder="Adicionar tag..."
        class="flex-1 min-w-[120px] text-[0.85rem] text-[#333] border-none outline-none bg-transparent placeholder:text-[#ccc]"
        @keydown="onTagKeydown"
        @blur="addTag"
      />
    </div>

    <p class="text-[0.68rem] text-[#aaa] mt-1.5">
      Enter ou vírgula para adicionar · Ex: carreira, tecnologia
    </p>
  </div>
          </div>

          <!-- Sidebar direita -->
          <div class="flex flex-col gap-5 lg:sticky lg:top-24">

            <div class="bg-amber-50 border border-amber-200 rounded-2xl p-4">
              <div class="flex items-center gap-2 mb-1.5">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                  <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
                <span class="text-[0.72rem] font-semibold text-amber-700">Análise obrigatória</span>
              </div>
              <p class="text-[0.72rem] text-amber-600 leading-relaxed font-light">
                Posts passam por revisão de um diretor antes de aparecer no feed.
              </p>
            </div>

            <div class="bg-white border border-[#e8e4dc] rounded-2xl p-5">
              <label class="block text-xs font-semibold uppercase tracking-[0.1em] text-[#aaa] mb-3">
                Resumo <span class="text-[#ccc] font-normal normal-case tracking-normal">(opcional)</span>
              </label>
              <textarea
                v-model="form.excerpt"
                :placeholder="excerptPreview || 'Gerado automaticamente...'"
                rows="3"
                class="w-full text-[0.85rem] font-light text-[#333] bg-[#f7f5f0] border border-transparent rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#079272] transition-all"
              ></textarea>
            </div>

            <div class="bg-white border border-[#e8e4dc] rounded-2xl p-5">
              <label class="block text-xs font-semibold uppercase tracking-[0.1em] text-[#aaa] mb-3">
                Capa <span class="text-[#ccc] font-normal normal-case tracking-normal">(opcional)</span>
              </label>
              <input
                v-model="form.cover_url"
                type="url"
                placeholder="https://..."
                class="w-full text-[0.85rem] font-light text-[#333] bg-[#f7f5f0] border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#079272] transition-all"
                :class="errors.cover_url ? 'border-red-400' : 'border-transparent'"
              />
              <p v-if="errors.cover_url" class="text-xs text-red-500 mt-1">{{ errors.cover_url }}</p>
              <div v-if="form.cover_url && !errors.cover_url" class="mt-3 rounded-lg overflow-hidden border border-[#e8e4dc]">
                <img :src="form.cover_url" alt="Preview" class="w-full h-28 object-cover"
                  @error="errors.cover_url = 'Não foi possível carregar a imagem.'" />
              </div>
            </div>

            <div class="bg-white border border-[#e8e4dc] rounded-2xl p-5">
              <div class="text-xs font-semibold uppercase tracking-[0.1em] text-[#aaa] mb-3">Checklist</div>
              <div class="flex flex-col gap-2">
                <div
                  v-for="item in [
                    { label: 'Título preenchido',       done: !!form.title.trim() },
                    { label: 'Conteúdo com +100 chars', done: form.content_md.length > 100 },
                    { label: 'Pelo menos 1 tag',        done: form.tags.length > 0 },
                    { label: 'Imagem de capa',          done: !!form.cover_url && !errors.cover_url },
                    { label: 'Resumo personalizado',    done: !!form.excerpt },
                  ]"
                  :key="item.label"
                  class="flex items-center gap-2 text-[0.8rem]"
                  :class="item.done ? 'text-[#079272]' : 'text-[#ccc]'"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" :stroke="item.done ? '#079272' : '#ddd'" stroke-width="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {{ item.label }}
                </div>
              </div>
            </div>

            <button
              class="w-full flex items-center justify-center gap-2 text-sm font-semibold px-5 py-3 bg-[#0d0d0d] text-white rounded-xl cursor-pointer hover:bg-[#079272] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              :disabled="submitting || success"
              @click="handleSubmit"
            >
              <svg v-if="submitting" class="animate-spin" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
              </svg>
              {{ success ? '✓ Enviado!' : submitting ? 'Enviando...' : 'Enviar para análise' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.article-body h1 { font-size:1.5rem;font-weight:800;color:#111;margin:1.8rem 0 .9rem;line-height:1.2; }
.article-body h2 { font-size:1.25rem;font-weight:700;color:#111;margin:1.8rem 0 .8rem;line-height:1.3; }
.article-body h3 { font-size:1.05rem;font-weight:600;color:#111;margin:1.4rem 0 .6rem; }
.article-body p  { font-size:.95rem;font-weight:300;color:#555;line-height:1.9;margin-bottom:1.3rem; }
.article-body code { background:#f7f5f0;border:1px solid #e8e4dc;padding:.15rem .45rem;border-radius:4px;font-size:.88em;color:#079272;font-family:monospace; }
.article-body blockquote { border-left:3px solid #079272;padding:1rem 1.5rem;margin:1.5rem 0;background:#e8f5f2;border-radius:0 10px 10px 0; }
</style>
