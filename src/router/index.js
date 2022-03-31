import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/Index.vue'),
      meta: {
        requireAuth: true,
      },
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
  //判断是否需要登录 && 是否登录
  if (to.meta.requireAuth && !isLoginIn()) {
    router.push('/login')
  }
})

function isLoginIn() {
  if (localStorage.getItem('token') !== null) {
    return true
  } else {
    return false
  }
}
export default router
