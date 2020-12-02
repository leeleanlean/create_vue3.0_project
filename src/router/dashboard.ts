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
      meta: { title: 'Dashboard' }
    },
    {
      path: 'About',
      name: 'DashboardAbout',
      component: _import('Dashboard/About'),
      meta: { title: 'About' }
    }
  ]
}
