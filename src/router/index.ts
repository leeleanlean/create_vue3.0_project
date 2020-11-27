import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import authority from './authority'
import dashboard from './dashboard'
import others from './others'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'Dashboard'
  },

  dashboard, // Dashboard
  authority, // 权限管理
  others // 框架路由
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
