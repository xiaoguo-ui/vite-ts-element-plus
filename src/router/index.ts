import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '',
    redirect: '/test-dialog'
  },
  {
    path: '/test-tab',
    component: () => import('@/views/test-tab/index.vue')
  },
  {
    path: '/test-dialog',
    component: () => import('@/views/test-dialog/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
