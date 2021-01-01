<template>
  <section class="dashboard">
    Vue.js3.x + Element Plus + TypeScript
  </section>
</template>
<script lang="ts">
import { ref } from 'vue'
export default {
  name: 'Dashboard',
  components: {},
  setup () {
    const counter = ref(0)
    return {
      counter
    }
  }
}
</script>
