<template>
  <section class="container">
    <Aside :asideMenu="asideMenu" />
    <section class="main">
      <Header
        :headerMenu="headerMenu"
        @change-header-menu="changeHeaderMenu"
      />
      <Main />
      <Footer />
    </section>
  </section>
</template>
<script lang="ts">
import Aside from './components/Aside.vue'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
export default {
  name: 'Layout',
  components: {
    Aside,
    Header,
    Main,
    Footer
  },
  setup () {
    const route = useRoute()
    const router = useRouter()
    console.log('router:::', router)

    // 左侧菜单
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const asideMenu: any = ref([])

    // 顶部菜单
    const headerMenu = router.options.routes.filter(item => !['/', '/Login'].includes(item.path))

    // 默认左侧菜单
    asideMenu.value = headerMenu.filter(item => route.path.includes(item.path))[0]

    // 切换顶部菜单
    const changeHeaderMenu = (path: string) => {
      asideMenu.value = router.options.routes.filter(item => {
        return item.path === path
      })[0]
    }

    return {
      headerMenu,
      changeHeaderMenu,

      asideMenu
    }
  }
}
</script>
