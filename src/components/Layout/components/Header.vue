<template>
  <el-header>
    <div class="left" v-if="headerMenu">
      <ul>
        <template
          v-for="(route, index) in headerMenu"
          :key="route.path">
          <li
            :class="{active: active.includes(route.path)}"
            @click="changeActive(index, route)">
            <a>{{route?.meta?.title}}</a>
          </li>
        </template>
      </ul>
    </div>
    <div class="right">right</div>
  </el-header>
</template>
<script lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default {
  props: {
    headerMenu: {
      type: Array,
      default: () => []
    }
  },
  setup (props, { emit }) {
    const active = ref(useRoute().path)
    const router = useRouter()

    // 切换顶部菜单
    const changeActive = (index, route) => {
      active.value = route.path
      router.push(route.path)
      emit('change-header-menu', route.path)
    }

    return {
      active,
      changeActive
    }
  }
}
</script>
