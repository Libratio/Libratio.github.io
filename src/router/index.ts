import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      title:'首页',
      component: () => import('@/views/home.vue')
    },
    {
      path: '/mine',
      title:'个人中心',
      component: () => import('@/views/mine.vue')
    },
  ]
})
export default router
