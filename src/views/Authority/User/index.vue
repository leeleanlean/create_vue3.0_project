<template>
  <section class="user">
    user
  </section>
</template>
<script lang="ts">
import { ref } from 'vue'
export default {
  name: 'AuthorityUser',
  components: {},
  setup () {
    const counter = ref(0)
    return {
      counter
    }
  }
}
</script>
