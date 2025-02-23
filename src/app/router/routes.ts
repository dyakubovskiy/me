import type { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/pages/main')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Main' }
  }
]
