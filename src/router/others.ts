// 异步加载组件
const _import = (file: string) => () => import('@/views/' + file)

export default {
  path: '/Login',
  name: 'Login',
  component: _import('Login')
}
