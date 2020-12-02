// 异步加载组件
const _import = (file: string) => () => import('@/views/' + file)
const _importLayout = () => () => import('@/components/Layout/index.vue')

export default {
  path: '/Material',
  name: 'Material',
  component: _importLayout(),
  redirect: '/Material/Table',
  meta: {
    title: 'Material'
  },
  children: [
    {
      path: 'Table',
      name: 'MaterialTable',
      meta: {
        keepAlive: true,
        title: 'Table'
      },
      component: _import('Material/Table')
    },
    {
      path: 'Form',
      name: 'MaterialForm',
      meta: {
        keepAlive: true,
        title: 'Form'
      },
      component: _import('Material/Form')
    }
  ]
}
