
import axios from 'axios'
import { useAuth, BASE_URL } from './useAuth'

const axiosInstance = axios.create({
  baseURL: BASE_URL, // '/api/v1'
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
})

axiosInstance.interceptors.request.use(
  (config) => {
    const { getAccessToken } = useAuth()
    const token = getAccessToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      const { logout } = useAuth()
      logout()
      if (!window.location.pathname.startsWith('/login')) {
        window.location.href = '/login'
      }
    }
    return Promise.reject(error)
  }
)

export function useAxios() {
  const request = async (method, url, data = null, config = {}) => {
    try {
      if (method === 'get' || method === 'delete') {
        return await axiosInstance[method](url, config)
      } else {
        return await axiosInstance[method](url, data, config)
      }
    } catch (error) {
      console.error(`[useAxios] ${method.toUpperCase()} ${url}:`, error.message)
      throw error
    }
  }

  const get    = (url, config = {})       => request('get',    url, null, config)
  const post   = (url, data, config = {}) => request('post',   url, data, config)
  const put    = (url, data, config = {}) => request('put',    url, data, config)
  const patch  = (url, data, config = {}) => request('patch',  url, data, config)
  const del    = (url, config = {})       => request('delete', url, null, config)

  return { axiosInstance, get, post, put, patch, del }
}
