import { createRouter, createWebHistory } from 'vue-router'

const general = component => {
  return {
    default: component,
    HeaderView: () => import('@/components/Header.vue'),
    AsideView: () => import('@/components/Aside.vue'),
  }
}
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      components: general(() => import('@/views/Index.vue')),
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
    },
    {
      path: '/setting',
      name: 'setting',
      components: general(()=>import('@/views/Setting.vue'))
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/views/Error404.vue'),
    },
  ],
})

router.beforeResolve(to => {
  if (!router.hasRoute(to.name)) {
    router.push('/404')
  }
  //判断是否需要登录 && 是否登录
  if (to.meta.requireAuth && !isLoginIn()) {
    router.replace('/login')
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
