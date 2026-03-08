import { createRouter, createWebHistory } from 'vue-router'
import { homeRoutes } from '@/modules/home/routes.js'
import { userRoutes } from '@/modules/users/routes.js'
import { feedRoutes } from '@/modules/feed/routes.js'
import { aboutRoutes } from '@/modules/about/routes.js'
import { embaixadoresRoutes } from '@/modules/embaixadores/routes.js'
import { teamRoutes } from '@/modules/team/routes'
import { useAuth } from '@/composables/useAuth.js'
import { authRoutes } from '@/modules/auth/routes'
import { dashboardRoutes } from '@/modules/dashboard/routes'
import { profileRoutes } from '@/modules/perfil/routes'


const routes = [
  ...(Array.isArray(homeRoutes) ? homeRoutes : []),
  ...(Array.isArray(userRoutes) ? userRoutes : []),
  ...(Array.isArray(feedRoutes) ? feedRoutes : []),
  ...(Array.isArray(aboutRoutes) ? aboutRoutes : []),
  ...(Array.isArray(embaixadoresRoutes) ? embaixadoresRoutes : []),
  ...(Array.isArray(teamRoutes) ? teamRoutes : []),
  ...(Array.isArray(authRoutes) ? authRoutes : []),
  ...(Array.isArray(dashboardRoutes) ? dashboardRoutes : []),
  ...(Array.isArray(profileRoutes) ? profileRoutes : []),
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  },
})


router.beforeEach(async (to, from, next) => {
  const { isAuthenticated, authLoading, restoreSession } = useAuth()

  if (authLoading.value) {
    await restoreSession()
  }

  if (to.meta.requiresAuth && !isAuthenticated.value) {
    return next({ name: 'login', query: { redirect: to.fullPath } })
  }

  if (to.meta.public && to.name === 'login' && isAuthenticated.value) {
    return next({ name: 'feed' })
  }

  next()
})

router.afterEach((to) => {
  document.title = to.meta?.title || 'Conecta'
})

export default router
