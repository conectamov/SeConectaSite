export const feedRoutes = [
  {
    path: '/feed',
    name: 'feed',
    component: () => import('./views/feedPage.vue'),
  },

  {
   path: '/new-post',
   name: 'new-post',
   component: () => import('./views/newPostPage.vue'),
  },

  {
    path: '/article/:slug',
    name: 'article',
    component: () => import('./views/articlePage.vue'),
    meta: {
      title: 'Artigo'
    }
  },

  {
    path: '/reviewFeed',
    name: 'review feed',
    component: () => import('./views/reviewFeed.vue'),
  },

]
