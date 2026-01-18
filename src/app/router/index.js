import { createRouter, createWebHistory } from 'vue-router'
import { homeRoutes } from '@/modules/home/routes.js'
import { userRoutes } from '@/modules/users/routes.js'
import { feedRoutes } from '@/modules/feed/routes.js'
import { aboutRoutes } from '@/modules/about/routes.js'
import { embaixadoresRoutes } from '@/modules/embaixadores/routes'

import AOS from 'aos'
import 'aos/dist/aos.css'

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [...homeRoutes, ...userRoutes, ...feedRoutes, ...aboutRoutes, ...embaixadoresRoutes],
})

router.beforeEach((to, from, next) => {
   AOS.init()
   next()
})

export default router
