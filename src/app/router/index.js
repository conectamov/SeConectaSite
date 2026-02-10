import { createRouter, createWebHistory } from 'vue-router'
import { homeRoutes } from '@/modules/home/routes.js'
import { userRoutes } from '@/modules/users/routes.js'
import { feedRoutes } from '@/modules/feed/routes.js'
import { aboutRoutes } from '@/modules/about/routes.js'
import { embaixadoresRoutes } from '@/modules/embaixadores/routes.js'
import { teamRoutes } from '@/modules/team/routes'


const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),

   routes: [...homeRoutes, ...userRoutes, ...feedRoutes, ...aboutRoutes, ...embaixadoresRoutes, ...teamRoutes],
})


export default router
