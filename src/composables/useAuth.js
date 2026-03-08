import { ref, computed } from 'vue'
import axios from 'axios'

export const BASE_URL = 'http://localhost:8000'

const TOKEN_KEY = 'conecta_token'
const TOKEN_EXPIRY_KEY = 'conecta_token_expiry'
const USER_KEY = 'conecta_user'
const TOKEN_TTL_MS = 8 * 60 * 60 * 1000 // 8 horas

const accessToken = ref(null)
const currentUser = ref(null)
const authLoading = ref(true)

const authAxios = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
})

function saveToken(token) {
  localStorage.setItem(TOKEN_KEY, token)
  localStorage.setItem(TOKEN_EXPIRY_KEY, String(Date.now() + TOKEN_TTL_MS))
}

function loadToken() {
  const token = localStorage.getItem(TOKEN_KEY)
  const expiry = localStorage.getItem(TOKEN_EXPIRY_KEY)
  if (!token || !expiry) return null
  if (Date.now() > Number(expiry)) {
    clearToken()
    return null
  }
  return token
}

function clearToken() {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(TOKEN_EXPIRY_KEY)
}

function saveUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user))
}

function loadUser() {
  try {
    const raw = localStorage.getItem(USER_KEY)
    return raw ? JSON.parse(raw) : null
  } catch { return null }
}

function clearUser() {
  localStorage.removeItem(USER_KEY)
}

export function useAuth() {
  const isAuthenticated = computed(() => !!accessToken.value)

  async function login(email, password) {
    const form = new URLSearchParams()
    form.append('username', email)
    form.append('password', password)

    const res = await authAxios.post('/login/access-token', form, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })

    const token = res.data.access_token
    accessToken.value = token
    saveToken(token)

    await fetchMe()
  }

  async function register({ email, username, password, full_name }) {
    const payload = { email, username, password }
    if (full_name?.trim()) payload.full_name = full_name.trim()

    const res = await authAxios.post('/users/signup', payload)
    return res.data // UserPublic
  }

  async function fetchMe() {
    if (!accessToken.value) return null
    const res = await authAxios.get('/users/me', {
      headers: { Authorization: `Bearer ${accessToken.value}` },
    })
    currentUser.value = res.data
    saveUser(res.data)
    return res.data
  }

  async function restoreSession() {
    authLoading.value = true

    const cachedUser = loadUser()
    if (cachedUser) currentUser.value = cachedUser

    const token = loadToken()
    if (token) {
      accessToken.value = token
      try {
        await fetchMe()
      } catch {
        logout()
      }
    }

    authLoading.value = false
  }

  function logout() {
    accessToken.value = null
    currentUser.value = null
    clearToken()
    clearUser()
  }

  function getAccessToken() {
    return accessToken.value
  }

  return {
    isAuthenticated,
    currentUser,
    authLoading,
    login,
    register,
    logout,
    restoreSession,
    fetchMe,
    getAccessToken,
  }
}
