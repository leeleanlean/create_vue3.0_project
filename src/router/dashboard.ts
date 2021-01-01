/**
 * Dashboard
 */

// 异步加载组件
const _import = (file: string) => () => import('@/views/' + file)
const _importLayout = () => () => import('@/components/Layout/index.vue')

export default {
  path: '/Dashboard',
  name: 'Dashboard',
  redirect: '/Dashboard/Index',
  component: _importLayout(),
  meta: { title: '框架介绍' },
  children: [
    {
      path: 'Index',
      name: 'DashboardIndex',
      component: _import('Dashboard/Index'),
      meta: {
        title: '框架介绍',
        icon: 'el-icon-menu'
      }
    },
    {
      path: 'GitHub',
      name: 'DashboardGitHub',
      component: _import('Dashboard/GitHub'),
      meta: {
        title: 'GitHub',
        icon: 'el-icon-service'
      }
    }
  ]
}
