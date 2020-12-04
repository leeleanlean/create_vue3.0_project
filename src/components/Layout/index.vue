<template>
  <section class="layout">
    <!-- left -->
    <section class="left">
      <h1 class="title">
        <span>Vue.js3.0 后台管理系统</span>
      </h1>
      <!-- aside-menu -->
      <div class="aside-menu">
        <ul v-if="children?.length">
          <li
            v-for="(item, index) in children"
            :key="index"
            :class="{active: asideActive.includes(item.path)}"
            @click="changeAsideActive(item)">
            <router-link :to="{ name: item.name }">
              <i v-if="item.meta.icon" :class="item.meta.icon"></i>
              <span>{{ item.meta.title }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </section>

    <!-- right -->
    <section class="right">
      <!-- menu -->
      <div class="menu">
        <div class="menu-left">
          <ul>
            <li
              v-for="(item, index) in menu"
              :key="index"
              :class="{active: active.includes(item.path)}"
              @click="changeActive(item)">
              <router-link :to="{ name: item.name }">
                <i v-if="item.meta.icon" :class="item.meta.icon"></i>
                <span>{{ item.meta.title }}</span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="menu-right">
          <el-dropdown size="medium">
            <span class="el-dropdown-link">
              Admin<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>退出</el-dropdown-item>
                <el-dropdown-item>修改信息</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
      <!-- container -->
      <div class="container">
        <router-view v-slot="{ Component }" v-if="keepAlive">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
        <router-view v-else />
      </div>
    </section>
  </section>
</template>
<script lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default {
  name: 'Layout',
  setup () {
    // menu
    const menu = useRouter().options.routes.filter(route => {
      const list = ['/', '/Login']
      return !list.includes(route.path)
    })

    // children
    const children = ref(
      useRoute().matched.filter(item => item.redirect)[0].children
    )

    // active
    const active = ref(useRoute().path)
    const asideActive = ref(useRoute().path)
    const changeActive = (route: { path: string; children: never; redirect: string }) => {
      // 顶部菜单active
      active.value = route.path
      // 左侧菜单active
      asideActive.value = route.redirect
      // 默认左侧菜单
      children.value = route.children
    }
    const changeAsideActive = (route: { path: string; children: never }) => {
      asideActive.value = route.path
    }

    // keep-alive
    const keepAlive = useRoute().meta?.keepAlive

    return {
      // 顶部菜单
      menu,
      // 左侧菜单
      children,
      // 当前路由
      active,
      asideActive,
      // 切换路由
      changeActive,
      changeAsideActive,
      // 缓存
      keepAlive
    }
  }
}
</script>
