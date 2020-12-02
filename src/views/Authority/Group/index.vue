<template>
  <section class="group">
    group
  </section>
</template>
<script lang="ts">
import { ref } from 'vue'
export default {
  name: 'AuthorityGroup',
  components: {},
  setup () {
    const counter = ref(0)
    return {
      counter
    }
  }
}
</script>
