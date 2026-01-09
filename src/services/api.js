import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export function useAxios() {
  const request = async (method, url, data = null, config = {}) => {
    try {
      if (method === 'get' || method === 'delete') {
        return await axiosInstance[method](url, config)
      } else {
        return await axiosInstance[method](url, data, config)
      }
    } catch (error) {
      console.error(error.message)
      throw error
    }
  }

  const get = (url, config = {}) => request('get', url, null, config)
  const post = (url, data, config = {}) => request('post', url, data, config)
  const put = (url, data, config = {}) => request('put', url, data, config)
  const del = (url, config = {}) => request('delete', url, null, config)

  return {
    axiosInstance,
    get,
    post,
    put,
    del,
  }
}
