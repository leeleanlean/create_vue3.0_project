<template>
  <section class="about">
    about
  </section>
</template>
<script lang="ts">
import { ref } from 'vue'
export default {
  name: 'DashboardDemo',
  components: {},
  setup () {
    const counter = ref(0)
    return {
      counter
    }
  }
}
</script>
