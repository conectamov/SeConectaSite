import axios from 'axios'
// Import the "raw" functions and refs directly from the file, 
// not the useAuth hook itself.
import { getAccessToken, logout, BASE_URL } from './useAuth'

const axiosInstance = axios.create({
  baseURL: BASE_URL, // Now '/api/v1/'
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
})

axiosInstance.interceptors.request.use(
  (config) => {
    // Call the exported function directly
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
      // Call logout directly
      logout()
      
      // Use leading slash for URL checking/redirecting
      if (!window.location.pathname.startsWith('/login')) {
        window.location.href = '/login'
      }
    }
    return Promise.reject(error)
  }
)

export function useAxios() {
  const request = async (method, url, data = null, config = {}) => {
    // Clean the URL: if it starts with '/', remove it to avoid // in path
    const cleanUrl = url.startsWith('/') ? url.substring(1) : url;
    
    try {
      if (method === 'get' || method === 'delete') {
        return await axiosInstance[method](cleanUrl, config)
      } else {
        return await axiosInstance[method](cleanUrl, data, config)
      }
    } catch (error) {
      console.error(`[useAxios] ${method.toUpperCase()} ${cleanUrl}:`, error.message)
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