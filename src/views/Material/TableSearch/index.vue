<template>
  <section class="meterial-table">
    <BaseForm class="m-b20" :config="form" @submit="submit" />
    <BaseTable :config="table" @handle-current-change="handleCurrentChange" />
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
      table.loading = true
      setTimeout(() => {
        table.tableData = [{
          header: 'header',
          date: '2016-05-02',
          name: '王小虎',
          slot: 'slot',
          address: '上海市普陀区金沙江路 1518 弄',
          footer: 'footer'
        }]
        table.pagination.total = 600
        table.loading = false
      }, 1500)
    }

    // 表单搜索
    const submit = forms => {
      console.log({
        ...forms,
        ...table.pagination
      })
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
      submit,
      handleCurrentChange
    }
  }
}
</script>
