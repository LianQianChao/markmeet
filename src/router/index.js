import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/Index.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/Error404.vue'),
    },
  ],
})

router.afterEach(to => {
  if (!router.hasRoute(to.name)) {
    router.push('/404')
  }
})
export default router
