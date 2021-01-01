<template>
  <el-main>
    <router-view v-slot="{ Component, route }">
      <keep-alive v-if="route?.meta?.keepAlive">
        <component :is="Component" />
      </keep-alive>
      <component :is="Component" v-else />
    </router-view>
  </el-main>
</template>
<script lang="ts">
export default {}
</script>
