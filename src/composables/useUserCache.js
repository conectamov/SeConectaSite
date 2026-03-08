import { useAxios } from '@/composables/useAxios'

// Cache compartilhado entre instâncias
const _cache = new Map()

export function useUserCache() {
  const { get } = useAxios()

  async function getUser(id) {
    if (!id) return null
    if (_cache.has(id)) return _cache.get(id)

    _cache.set(id, null)

    try {
      const res = await get(`/users/${id}`)
      _cache.set(id, res.data)
      return res.data
    } catch {
      // 401/403: não autenticado ou sem permissão — retorna null silenciosamente
      return null
    }
  }

  function getCached(id) {
    return _cache.get(id) ?? null
  }

  function displayName(user) {
    if (!user) return 'Autor'
    return user.full_name || user.username || 'Autor'
  }

  function displayInitial(user) {
    if (!user) return '?'
    const name = user.full_name || user.username || ''
    return name.charAt(0).toUpperCase() || '?'
  }

  return { getUser, getCached, displayName, displayInitial }
}
