// 异步加载组件
const _import = (file: string) => () => import('@/views/' + file)
const _importLayout = () => () => import('@/components/Layout/index.vue')

export default {
  path: '/Dashboard',
  name: 'Dashboard',
  redirect: '/Dashboard/Index',
  component: _importLayout(),
  meta: { title: 'Dashboard' },
  children: [
    {
      path: 'Index',
      name: 'DashboardIndex',
      component: _import('Dashboard/Index'),
      meta: { title: 'Dashboard', icon: 'el-icon-data-line' }
    },
    {
      path: 'Demo',
      name: 'DashboardDemo',
      component: _import('Dashboard/Demo'),
      meta: { title: 'Demo', icon: 'el-icon-wind-power' }
    }
  ]
}
