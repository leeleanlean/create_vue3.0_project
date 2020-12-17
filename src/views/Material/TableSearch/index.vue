<template>
  <section class="meterial-table">
    <BaseForm class="m-b20" :config="form" @submit="data => {
      // Set search params
      form.form = data
      // Init
      init()
    }" />
    <BaseTable :config="table" @handle-current-change="index => {
      // Set default pagination and tableData
      table.pagination.pageIndex = index
      table.tableData = []
      // Init
      init()
    }" />
  </section>
</template>
<script lang="ts">
import { onMounted, reactive } from 'vue'
import BaseTable from '@/components/BaseTable/index.vue'
import BaseForm from '@/components/BaseForm/index.vue'
import config from './config'

export default {
  name: 'MeterialTableSearch',
  components: {
    BaseTable,
    BaseForm
  },
  setup () {
    const form = reactive(config.form)
    const table = reactive(config.table)

    const init = () => {
      console.log({
        ...form.form,
        ...table.pagination
      })
      table.loading = true
      setTimeout(() => {
        table.tableData = []
        table.pagination.total = Math.ceil(Math.random() * 600)
        table.loading = false
      }, 1500)
    }
    // 切换分页
    const handleCurrentChange = index => {
      table.pagination.pageIndex = index
      table.tableData = []

      init()
    }

    onMounted(() => init())

    return {
      form,
      table,
      init,
      handleCurrentChange
    }
  }
}
</script>
