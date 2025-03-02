import type { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/pages/main')
  },
  {
    path: '/works',
    name: 'works',
    component: () => import('@/pages/works')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Main' }
  }
]
