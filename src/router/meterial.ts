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
        title: '基本表格',
        icon: 'el-icon-tickets'
      },
      component: _import('Material/Table')
    },
    {
      path: 'TableSearch',
      name: 'MaterialTableSearch',
      meta: {
        keepAlive: true,
        title: '带搜索表格',
        icon: 'el-icon-search'
      },
      component: _import('Material/TableSearch')
    },
    {
      path: 'Form',
      name: 'MaterialForm',
      meta: {
        keepAlive: true,
        title: '通用表单',
        icon: 'el-icon-postcard'
      },
      component: _import('Material/Form')
    }
  ]
}
