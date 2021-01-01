<template>
  <el-aside width="220px">
    <h1 class="title">
      <span>{{ title }}</span>
    </h1>
    <el-menu
      background-color="#052a5f"
      text-color="#fff"
      active-text-color="#fff"
      :default-active="active"
      :uniqueOpened="true">
      <template
        v-for="route in asideMenu?.children ?? []"
        :key="route.path">
        <!-- 三级菜单 -->
        <template v-if="route.children && Array.isArray(item.children)"></template>

        <!-- 二级菜单 -->
        <template v-else>
          <el-menu-item
            :index="route.path"
            @click="changeActive(route)">
            <i v-if="route?.meta?.icon" :class="route?.meta?.icon"></i>
            <template #title>{{ route?.meta?.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </el-aside>
</template>
<script lang="ts">
import { ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default {
  props: {
    asideMenu: {
      type: Object,
      default: () => ({})
    }
  },
  setup () {
    const route = useRoute()
    const router = useRouter()
    const active = ref(route.path.split('/').reverse()[0])
    const title = ref(process.env?.VUE_APP_TITLE ?? '')

    // 切换左侧菜单
    const changeActive = route => router.push(route.path)

    // 顶部路由切换设置左侧默认菜单
    watchEffect(() => (active.value = route.path.split('/').reverse()[0]))

    return {
      title,
      active,
      changeActive
    }
  }
}
</script>
