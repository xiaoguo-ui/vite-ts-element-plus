import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/components/HelloWorld.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
