<template>
  <section class="base-table">
    <Search @submit="submit" />
    <List ref="listRef" />
  </section>
</template>
<script lang="ts">

import Search from './components/Search.vue'
import List from './components/List.vue'
import { ref } from 'vue'

export default {
  components: {
    Search,
    List
  },
  setup () {
    const listRef = ref()
    const submit = forms => listRef.value.init(forms)

    return {
      listRef,
      submit
    }
  }
}
</script>
