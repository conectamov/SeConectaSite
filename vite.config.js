import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {          // ← tudo dentro de server
    port: 8081,
    proxy: {
      '/api': {
        target: 'https://api.seconecta.org/',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  base: '/',
})
