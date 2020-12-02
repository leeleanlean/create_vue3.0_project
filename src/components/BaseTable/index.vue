<template>
  <section class="base-table">
    <Search />
    <List />
  </section>
</template>
<script lang="ts">
import { ref } from 'vue'

import Search from './components/Search.vue'
import List from './components/List.vue'

export default {
  components: {
    Search,
    List
  },
  setup () {
    const counter = ref(0)
    return {
      counter
    }
  }
}
</script>
