<template>
  <section class="github">
    <el-link type="primary">
      <a href="https://github.com/leeleanlean/create_vue3.0_project" target="_blank">GitHub</a>
    </el-link>
  </section>
</template>
<script lang="ts">
import { ref } from 'vue'
export default {
  name: 'DashboardGitHub',
  components: {},
  setup () {
    const counter = ref(0)
    return {
      counter
    }
  }
}
</script>
