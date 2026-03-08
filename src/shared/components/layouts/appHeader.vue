<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuth } from '@/composables/useAuth.js'
import { useAxios } from '@/composables/useAxios.js'


const router  = useRouter()
const route   = useRoute()
const { currentUser, logout } = useAuth()
const { get, patch }          = useAxios()

// ── Menus ────────────────────────────────────────────────────────────────────
const showProgramas  = ref(false)   // dropdown desktop "Programas"
const showUserMenu   = ref(false)   // dropdown desktop usuário
const showNotifs     = ref(false)   // dropdown desktop notificações
const isMobileOpen   = ref(false)   // drawer mobile
let programasTimer   = null

// Fecha tudo — usado pelo handler de click externo
function closeAll() {
  showProgramas.value = false
  showUserMenu.value  = false
  showNotifs.value    = false
}

// Handler único para clicks fora de qualquer menu
function onDocClick(e) {
  if (!e.target.closest('[data-menu]')) closeAll()
}

onMounted(() => {
  document.addEventListener('click', onDocClick)
  fetchNotifications()
  // Poll a cada 60s para manter o badge atualizado
  pollInterval = setInterval(fetchNotifications, 60_000)
})
onUnmounted(() => {
  document.removeEventListener('click', onDocClick)
  clearInterval(pollInterval)
  clearTimeout(programasTimer)
})

// Fecha drawer ao mudar de rota
watch(() => route.path, () => {
  isMobileOpen.value  = false
  closeAll()
})

// ── Programas hover/click (desktop) ──────────────────────────────────────────
function hoverProgramas()  { clearTimeout(programasTimer); showProgramas.value = true }
function leaveProgramas()  { programasTimer = setTimeout(() => { showProgramas.value = false }, 180) }
function toggleProgramas() { showProgramas.value = !showProgramas.value; showUserMenu.value = false; showNotifs.value = false }

// ── Logout ────────────────────────────────────────────────────────────────────
function handleLogout() {
  closeAll()
  isMobileOpen.value = false
  logout()
  router.push({ name: 'login' })
}

// ── Navegar e fechar ──────────────────────────────────────────────────────────
function go(name, params) {
  closeAll()
  isMobileOpen.value = false
  router.push(params ? { path: '/' + name, params } : { path: '/' + name })
}

// ── NOTIFICAÇÕES ─────────────────────────────────────────────────────────────
const notifications  = ref([])
const unreadCount    = ref(0)
const totalNotifs    = ref(0)
const notifsLoading  = ref(false)
let   pollInterval   = null

async function fetchNotifications() {
  if (!currentUser.value) return
  try {
    const res = await get('/notifications/?limit=15')
    notifications.value = res.data.data   ?? []
    unreadCount.value   = res.data.unread_count ?? 0
    totalNotifs.value   = res.data.count   ?? 0
  } catch { /* silencioso — não quebra o header */ }
}

async function markAllRead() {
  try {
    await patch('/notifications/read-all', {})
    notifications.value.forEach(n => { n.read = true })
    unreadCount.value = 0
  } catch {}
}

async function markOneRead(notif) {
  if (notif.read) return
  try {
    await patch(`/notifications/${notif.id}/read`, {})
    notif.read = true
    if (unreadCount.value > 0) unreadCount.value--
  } catch {}
}

function openNotifDropdown() {
  showNotifs.value   = !showNotifs.value
  showUserMenu.value = false
  showProgramas.value = false
}

// Ícone por tipo de notificação
const notifIconMap = {
  comment_on_post:  { icon: 'comment',  color: '#2464E8' },
  reply_on_comment: { icon: 'reply',    color: '#7C3AED' },
  like_on_post:     { icon: 'heart',    color: '#e53e3e' },
  like_on_comment:  { icon: 'heart',    color: '#e53e3e' },
  post_approved:    { icon: 'check',    color: '#079272' },
  post_rejected:    { icon: 'x',        color: '#d97706' },
}
function notifMeta(type) {
  return notifIconMap[type] ?? { icon: 'bell', color: '#aaa' }
}

function notifTime(dateStr) {
  if (!dateStr) return ''
  const diff  = Date.now() - new Date(dateStr).getTime()
  const mins  = Math.floor(diff / 60_000)
  const hours = Math.floor(diff / 3_600_000)
  const days  = Math.floor(diff / 86_400_000)
  if (mins  < 1)  return 'agora'
  if (mins  < 60) return `${mins}min`
  if (hours < 24) return `${hours}h`
  if (days  < 7)  return `${days}d`
  return new Date(dateStr).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })
}

// ── Helpers ───────────────────────────────────────────────────────────────────
const userInitial = computed(() =>
  (currentUser.value?.full_name || currentUser.value?.username || '?').charAt(0).toUpperCase()
)
const isManager = computed(() =>
  currentUser.value?.is_manager || currentUser.value?.is_superuser
)
</script>

<template>
  <header
    v-if="$route.path !== '/login' && $route.path !== '/signup'"
    class="w-full z-50 top-0"
  >
    <div class="max-w-[1280px] mx-auto px-4 md:px-8 h-16 flex items-center justify-between gap-4">

      <!-- ── Logo ──────────────────────────────────────────────────────────── -->
      <button
        class="text-[1.6rem] font-bold tracking-[-0.03em] text-black bg-transparent border-none cursor-pointer flex-shrink-0 p-0"
        @click="go('feed')"
      >
        <span class="bg-gradient-to-r from-[#079272] to-[#2464E8] bg-clip-text text-transparent">Se</span>Conecta<span class="text-[#079272]">.</span>
      </button>

      <!-- ── Desktop Nav ────────────────────────────────────────────────────── -->
      <nav class="hidden lg:flex items-center gap-1">
        <button
          class="text-[0.88rem] text-gray-600 font-medium hover:text-[#079272] transition-colors px-3 py-2 rounded-lg hover:bg-[#f7f5f0] border-none bg-transparent cursor-pointer"
          @click="go('sobre')"
        >
          Sobre
        </button>

        <!-- Programas dropdown — FIX: sem <button> dentro de <button> -->
        <div class="relative" data-menu @mouseenter="hoverProgramas" @mouseleave="leaveProgramas">
          <button
            class="flex items-center gap-1 text-[0.88rem] text-gray-600 font-medium hover:text-[#079272] transition-colors px-3 py-2 rounded-lg hover:bg-[#f7f5f0] border-none bg-transparent cursor-pointer"
            :class="showProgramas && 'bg-[#f7f5f0] text-[#079272]'"
            @click.stop="toggleProgramas"
          >
            Programas
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
              :class="['transition-transform duration-200', showProgramas ? 'rotate-180' : '']">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>

          <Transition
            enter-from-class="opacity-0 -translate-y-1 scale-95"
            enter-active-class="transition-all duration-150 origin-top"
            leave-to-class="opacity-0 -translate-y-1 scale-95"
            leave-active-class="transition-all duration-100 origin-top"
          >
            <div
              v-if="showProgramas"
              class="absolute top-[calc(100%+6px)] left-1/2 -translate-x-1/2 w-52 bg-white border border-[#e8e4dc] rounded-xl shadow-xl py-1.5 z-50"
            >
              <!-- Seta decorativa -->
              <div class="absolute -top-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white border-t border-l border-[#e8e4dc] rotate-45"></div>
              <button
                class="w-full text-left px-4 py-2.5 text-[0.83rem] text-gray-700 hover:bg-[#f7f5f0] hover:text-[#079272] transition-colors cursor-pointer bg-transparent border-none"
                @click="go('embaixadores'); showProgramas = false"
              >
                Embaixadores
              </button>
              <div class="px-4 py-2.5 text-[0.8rem] text-[#bbb]">Em breve mais programas!</div>
            </div>
          </Transition>
        </div>

        <button
          class="text-[0.88rem] text-gray-600 font-medium hover:text-[#079272] transition-colors px-3 py-2 rounded-lg hover:bg-[#f7f5f0] border-none bg-transparent cursor-pointer"
          @click="go('equipe')"
        >
          Equipe
        </button>
      </nav>

      <!-- ── Direita: Feed + Notificações + User ────────────────────────────── -->
      <div class="flex items-center gap-1 md:gap-2">

        <!-- Feed link — desktop -->
        <button
          class="hidden lg:flex items-center gap-1.5 text-[0.85rem] font-semibold text-[#111] px-3.5 py-2 rounded-lg hover:bg-[#f7f5f0] transition-colors border-none bg-transparent cursor-pointer"
          @click="go('feed')"
        >
          Feed
        </button>

        <!-- Manager: Review button -->
        <button
          v-if="isManager"
          class="hidden md:flex items-center gap-1.5 text-[0.78rem] font-semibold text-[#079272] px-3 py-1.5 rounded-lg bg-[#079272]/10 hover:bg-[#079272]/20 transition-colors border-none cursor-pointer"
          @click="go('reviewFeed')"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          Review
        </button>

        <!-- ── Notificações ─────────────────────────────────────────────────── -->
        <div class="relative" data-menu>
          <button
            class="relative w-9 h-9 flex items-center justify-center rounded-xl hover:bg-[#f7f5f0] transition-colors border-none bg-transparent cursor-pointer"
            :class="showNotifs && 'bg-[#f7f5f0]'"
            @click.stop="openNotifDropdown"
            title="Notificações"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              :class="unreadCount > 0 ? 'stroke-[#111]' : 'stroke-[#999]'">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
            <!-- Badge de não lidos -->
            <span
              v-if="unreadCount > 0"
              class="absolute top-1 right-1 min-w-[16px] h-4 px-[3px] bg-red-500 text-white text-[0.55rem] font-bold rounded-full flex items-center justify-center leading-none"
            >
              {{ unreadCount > 99 ? '99+' : unreadCount }}
            </span>
          </button>

          <!-- Dropdown notificações -->
          <Transition
            enter-from-class="opacity-0 translate-y-1 scale-95"
            enter-active-class="transition-all duration-150 origin-top-right"
            leave-to-class="opacity-0 translate-y-1 scale-95"
            leave-active-class="transition-all duration-100 origin-top-right"
          >
            <div
              v-if="showNotifs"
              class="absolute right-0 top-[calc(100%+8px)] w-[340px] max-w-[calc(100vw-2rem)] bg-white border border-[#e8e4dc] rounded-2xl shadow-xl z-50 overflow-hidden"
            >
              <!-- Header do dropdown -->
              <div class="flex items-center justify-between px-4 py-3 border-b border-[#f7f5f0]">
                <div class="flex items-center gap-2">
                  <span class="text-[0.85rem] font-bold text-[#111]">Notificações</span>
                  <span v-if="unreadCount > 0" class="text-[0.65rem] font-semibold px-1.5 py-0.5 bg-red-50 text-red-500 rounded-full">
                    {{ unreadCount }} nova{{ unreadCount > 1 ? 's' : '' }}
                  </span>
                </div>
                <button
                  v-if="unreadCount > 0"
                  class="text-[0.72rem] text-[#079272] font-semibold hover:underline border-none bg-transparent cursor-pointer"
                  @click="markAllRead"
                >
                  Marcar todas
                </button>
              </div>

              <!-- Lista de notificações -->
              <div class="max-h-[360px] overflow-y-auto">
                <div v-if="notifications.length === 0" class="py-10 text-center">
                  <div class="w-10 h-10 mx-auto rounded-full bg-[#f7f5f0] flex items-center justify-center mb-3">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="2">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                    </svg>
                  </div>
                  <p class="text-[0.8rem] text-[#bbb]">Nenhuma notificação</p>
                </div>

                <button
                  v-for="notif in notifications"
                  :key="notif.id"
                  class="w-full text-left flex items-start gap-3 px-4 py-3 hover:bg-[#f7f5f0] transition-colors cursor-pointer border-none border-b border-[#f7f5f0] last:border-0"
                  :class="!notif.read && 'bg-[#f0faf7]'"
                  @click="markOneRead(notif); notif.post_id && go('article', { id: notif.post_id })"
                >
                  <!-- Ícone do tipo -->
                  <div
                    class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5"
                    :style="{ background: notifMeta(notif.type).color + '18' }"
                  >
                    <!-- comment -->
                    <svg v-if="notifMeta(notif.type).icon === 'comment'" width="13" height="13" viewBox="0 0 24 24" fill="none" :stroke="notifMeta(notif.type).color" stroke-width="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                    <!-- reply -->
                    <svg v-else-if="notifMeta(notif.type).icon === 'reply'" width="13" height="13" viewBox="0 0 24 24" fill="none" :stroke="notifMeta(notif.type).color" stroke-width="2">
                      <polyline points="9 17 4 12 9 7"/><path d="M20 18v-2a4 4 0 0 0-4-4H4"/>
                    </svg>
                    <!-- heart -->
                    <svg v-else-if="notifMeta(notif.type).icon === 'heart'" width="13" height="13" viewBox="0 0 24 24" fill="none" :stroke="notifMeta(notif.type).color" stroke-width="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                    <!-- check -->
                    <svg v-else-if="notifMeta(notif.type).icon === 'check'" width="13" height="13" viewBox="0 0 24 24" fill="none" :stroke="notifMeta(notif.type).color" stroke-width="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <!-- x / rejected -->
                    <svg v-else-if="notifMeta(notif.type).icon === 'x'" width="13" height="13" viewBox="0 0 24 24" fill="none" :stroke="notifMeta(notif.type).color" stroke-width="2.5">
                      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                    <!-- bell (fallback) -->
                    <svg v-else width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                    </svg>
                  </div>

                  <div class="flex-1 min-w-0">
                    <p class="text-[0.8rem] leading-snug"
                      :class="notif.read ? 'text-[#666]' : 'text-[#111] font-medium'">
                      {{ notif.message }}
                    </p>
                    <p class="text-[0.68rem] text-[#bbb] mt-1">{{ notifTime(notif.created_at) }}</p>
                  </div>

                  <!-- Ponto de não lido -->
                  <div v-if="!notif.read" class="flex-shrink-0 w-2 h-2 bg-[#079272] rounded-full mt-1.5"></div>
                </button>
              </div>

              <!-- Rodapé -->
              <div v-if="totalNotifs > notifications.length" class="border-t border-[#f7f5f0] px-4 py-2.5">
                <button
                  class="text-[0.75rem] text-[#079272] font-medium hover:underline border-none bg-transparent cursor-pointer w-full text-center"
                  @click="go('notifications'); showNotifs = false"
                >
                  Ver todas as notificações
                </button>
              </div>
            </div>
          </Transition>
        </div>

        <!-- ── User menu ─────────────────────────────────────────────────────── -->
        <div class="relative hidden lg:block" data-menu>
          <button
            class="flex items-center gap-2 px-2 py-1.5 rounded-xl hover:bg-[#f7f5f0] transition-colors border-none bg-transparent cursor-pointer"
            @click.stop="showUserMenu = !showUserMenu; showNotifs = false; showProgramas = false"
          >
            <div class="w-8 h-8 rounded-full bg-gradient-to-br from-[#079272] to-[#2464E8] flex items-center justify-center text-white text-xs font-bold select-none flex-shrink-0">
              <div class="w-12 h-8 rounded-2xl overflow-hidden bg-gradient-to-br from-[#079272] to-[#2464E8] flex items-center justify-center">
                <img
                  v-if="currentUser?.profile_picture_url"
                  :src="currentUser.profile_picture_url"
                  :alt="currentUser.full_name"
                  class="w-full h-full object-cover"
                  @error="$event.target.style.display='none'"
                />
                <span v-else class="text-3xl font-bold text-white">{{ userInitial }}</span>
              </div>
            </div>
            <span class="hidden xl:block text-[0.83rem] font-medium text-[#111] max-w-[120px] truncate">
              {{ currentUser?.full_name || currentUser?.username }}
            </span>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2.5"
              :class="['transition-transform duration-200', showUserMenu ? 'rotate-180' : '']">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>

          <Transition
            enter-from-class="opacity-0 translate-y-1 scale-95"
            enter-active-class="transition-all duration-150 origin-top-right"
            leave-to-class="opacity-0 translate-y-1 scale-95"
            leave-active-class="transition-all duration-100 origin-top-right"
          >
            <div
              v-if="showUserMenu"
              class="absolute right-0 top-[calc(100%+8px)] w-56 bg-white border border-[#e8e4dc] rounded-xl shadow-lg py-1.5 z-50"
            >
              <!-- Cabeçalho -->
              <div class="px-4 py-3 border-b border-[#f7f5f0]">
                <div class="text-[0.82rem] font-semibold text-[#111] truncate">
                  {{ currentUser?.full_name || currentUser?.username }}
                </div>
                <div class="text-[0.7rem] text-[#aaa] truncate mt-0.5">
                  @{{ currentUser?.username }}
                </div>
              </div>

              <button
                class="w-full flex items-center gap-2.5 px-4 py-2.5 text-[0.8rem] text-[#555] hover:bg-[#f7f5f0] transition-colors cursor-pointer bg-transparent border-none text-left"
                @click="go('profile'); showUserMenu = false"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
                Meu perfil
              </button>

              <button
                class="w-full flex items-center gap-2.5 px-4 py-2.5 text-[0.8rem] text-[#555] hover:bg-[#f7f5f0] transition-colors cursor-pointer bg-transparent border-none text-left"
                @click="go('new-post'); showUserMenu = false"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
                Novo post
              </button>

              <button
                v-if="isManager"
                class="w-full flex items-center gap-2.5 px-4 py-2.5 text-[0.8rem] text-[#079272] hover:bg-[#f0faf7] transition-colors cursor-pointer bg-transparent border-none text-left"
                @click="go('reviewFeed'); showUserMenu = false"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 11l3 3L22 4"/>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                </svg>
                Revisar posts
              </button>

              <div class="h-px bg-[#f7f5f0] mx-2 my-1"></div>

              <button
                class="w-full flex items-center gap-2.5 px-4 py-2.5 text-[0.8rem] text-red-500 hover:bg-red-50 transition-colors cursor-pointer bg-transparent border-none text-left"
                @click="handleLogout"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                  <polyline points="16 17 21 12 16 7"/>
                  <line x1="21" y1="12" x2="9" y2="12"/>
                </svg>
                Sair
              </button>
            </div>
          </Transition>
        </div>

        <!-- ── Hamburguer mobile ─────────────────────────────────────────────── -->
        <button
          class="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-[#f7f5f0] transition-colors border-none bg-transparent cursor-pointer flex-shrink-0"
          :aria-expanded="isMobileOpen"
          aria-label="Menu"
          @click.stop="isMobileOpen = !isMobileOpen; closeAll()"
        >
          <span class="block w-5 h-[1.5px] bg-[#333] transition-all duration-300 origin-center"
            :class="isMobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''"></span>
          <span class="block w-5 h-[1.5px] bg-[#333] transition-all duration-300"
            :class="isMobileOpen ? 'opacity-0 scale-x-0' : ''"></span>
          <span class="block w-5 h-[1.5px] bg-[#333] transition-all duration-300 origin-center"
            :class="isMobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''"></span>
        </button>
      </div>
    </div>

    <!-- ── Mobile drawer ──────────────────────────────────────────────────────── -->
    <Transition
      enter-from-class="opacity-0"
      enter-active-class="transition-opacity duration-200"
      leave-to-class="opacity-0"
      leave-active-class="transition-opacity duration-200"
    >
      <div
        v-if="isMobileOpen"
        class="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
        @click="isMobileOpen = false"
      ></div>
    </Transition>

    <Transition
      enter-from-class="translate-x-full"
      enter-active-class="transition-transform duration-300 ease-out"
      leave-to-class="translate-x-full"
      leave-active-class="transition-transform duration-250 ease-in"
    >
      <aside
        v-if="isMobileOpen"
        class="lg:hidden fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 flex flex-col"
      >
        <!-- Cabeçalho do drawer: perfil do usuário -->
        <div class="px-5 pt-6 pb-4 bg-gradient-to-br from-[#0c1b32] to-[#0d2a20]">
          <div class="flex items-center justify-between mb-4">
            <span class="text-white/60 text-xs font-medium uppercase tracking-widest">Menu</span>
            <button
              class="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center border-none cursor-pointer transition-colors"
              @click="isMobileOpen = false"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          <!-- Info do usuário -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[#079272] to-[#2464E8] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              {{ userInitial }}
            </div>
            <div class="min-w-0">
              <div class="text-white font-semibold text-sm truncate">
                {{ currentUser?.full_name || currentUser?.username }}
              </div>
              <div class="text-white/50 text-xs truncate">@{{ currentUser?.username }}</div>
            </div>
          </div>
        </div>

        <!-- Scroll area -->
        <div class="flex-1 overflow-y-auto">

          <!-- Ação rápida: notificações no mobile -->
          <button
            class="w-full flex items-center justify-between px-5 py-3.5 border-b border-[#f7f5f0] hover:bg-[#f7f5f0] transition-colors border-none bg-transparent cursor-pointer text-left"
            @click="isMobileOpen = false; openNotifDropdown()"
          >
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-lg bg-[#f7f5f0] flex items-center justify-center">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                </svg>
              </div>
              <span class="text-[0.88rem] font-medium text-[#333]">Notificações</span>
            </div>
            <span v-if="unreadCount > 0" class="text-[0.65rem] font-bold px-2 py-0.5 bg-red-500 text-white rounded-full">
              {{ unreadCount }}
            </span>
          </button>

          <!-- Nav principal -->
          <nav class="px-3 py-3 space-y-0.5">
            <button @click="go('feed')"
              class="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-[0.88rem] font-medium text-[#333] hover:bg-[#f7f5f0] hover:text-[#079272] transition-colors border-none bg-transparent cursor-pointer text-left">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
              </svg>
              Feed
            </button>

            <button @click="go('profile')"
              class="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-[0.88rem] font-medium text-[#333] hover:bg-[#f7f5f0] hover:text-[#079272] transition-colors border-none bg-transparent cursor-pointer text-left">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
              Meu perfil
            </button>

            <button @click="go('newPost')"
              class="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-[0.88rem] font-medium text-[#333] hover:bg-[#f7f5f0] hover:text-[#079272] transition-colors border-none bg-transparent cursor-pointer text-left">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
              Novo post
            </button>

            <button v-if="isManager" @click="go('reviewPosts')"
              class="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-[0.88rem] font-medium text-[#079272] hover:bg-[#f0faf7] transition-colors border-none bg-transparent cursor-pointer text-left">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 11l3 3L22 4"/>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
              </svg>
              Revisar posts
            </button>

            <div class="h-px bg-[#f7f5f0] my-2"></div>

            <button @click="go('sobre')"
              class="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-[0.88rem] font-medium text-[#555] hover:bg-[#f7f5f0] hover:text-[#079272] transition-colors border-none bg-transparent cursor-pointer text-left">
              Sobre
            </button>

            <!-- Programas (expandível no mobile) -->
            <div>
              <button
                class="w-full flex items-center justify-between gap-3 px-3 py-3 rounded-xl text-[0.88rem] font-medium text-[#555] hover:bg-[#f7f5f0] transition-colors border-none bg-transparent cursor-pointer text-left"
                @click.stop="showProgramas = !showProgramas"
              >
                Programas
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2.5"
                  :class="['transition-transform duration-200', showProgramas ? 'rotate-180' : '']">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              <div v-if="showProgramas" class="pl-6 pb-1 space-y-0.5">
                <button @click="go('embaixadores')"
                  class="w-full text-left px-3 py-2 text-[0.83rem] text-[#777] hover:text-[#079272] transition-colors border-none bg-transparent cursor-pointer rounded-lg hover:bg-[#f7f5f0]">
                  Embaixadores
                </button>
                <div class="px-3 py-2 text-[0.78rem] text-[#bbb]">Em breve mais programas!</div>
              </div>
            </div>

            <button @click="go('equipe')"
              class="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-[0.88rem] font-medium text-[#555] hover:bg-[#f7f5f0] hover:text-[#079272] transition-colors border-none bg-transparent cursor-pointer text-left">
              Equipe
            </button>
          </nav>
        </div>

        <!-- Rodapé do drawer: sair -->
        <div class="p-4 border-t border-[#f7f5f0]">
          <button
            class="w-full flex items-center justify-center gap-2 py-2.5 text-[0.85rem] font-semibold text-red-500 hover:bg-red-50 rounded-xl transition-colors border-none bg-transparent cursor-pointer"
            @click="handleLogout"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            Sair da conta
          </button>
        </div>
      </aside>
    </Transition>
  </header>
</template>
