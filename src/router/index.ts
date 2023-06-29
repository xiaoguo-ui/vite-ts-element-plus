import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '',
    redirect: '/test-form'
  },
  {
    path: '/test-tab',
    component: () => import('@/views/test-tab/index.vue')
  },
  {
    path: '/test-dialog',
    component: () => import('@/views/test-dialog/index.vue')
  },
  {
    path: '/test-message',
    component: () => import('@/views/test-message/index.vue')
  },
  {
    path: '/test-message-box',
    component: () => import('@/views/test-message-box/index.vue')
  },
  {
    path: '/test-echarts',
    component: () => import('@/views/test-echarts/index.vue')
  },
  {
    path: '/test-form',
    component: () => import('@/views/test-form/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
