// 异步加载组件
const _import = (file: string) => () => import('@/views/' + file)
const _importLayout = () => () => import('@/components/Layout/index.vue')

export default {
  path: '/Authority',
  name: 'Authority',
  component: _importLayout(),
  redirect: '/Authority/User',
  meta: {
    title: '权限管理'
  },
  children: [
    {
      path: 'User',
      name: 'AuthorityUser',
      meta: {
        keepAlive: true,
        title: '用户管理'
      },
      component: _import('Authority/User')
    },
    {
      path: 'Role',
      name: 'AuthorityRole',
      meta: {
        keepAlive: true,
        title: '角色管理'
      },
      component: _import('Authority/Role')
    },
    {
      path: 'Group',
      name: 'AuthorityGroup',
      meta: {
        keepAlive: true,
        title: '用户组管理'
      },
      component: _import('Authority/Group')
    }
  ]
}
