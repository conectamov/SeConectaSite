// postService.js
import api from './api'

export const postService = {
  async getPosts(page = 1, limit = 5) {
    return api.get(`/posts?page=${page}&limit=${limit}`)
  },
  async getPost(slug) {
    return api.get(`/posts/${slug}`)
  },
  async postById(id) {
    return api.get(`/posts/${id}`)
  },
  async createPost(data) {
    return api.post('/posts', data)
  },
  async updatePost(postId, data) {
    return api.put(`/posts/${postId}`, data)
  },
  async deletePost(postId) {
    return api.delete(`/posts/${postId}`)
  },
}
