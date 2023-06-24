import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/test-tab'
  },
  {
    path: '/test-tab',
    component: () => import('@/views/test-tab/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
