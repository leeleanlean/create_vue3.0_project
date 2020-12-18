<template>
  <section class="meterial-table">
    <h3 class="title m-b20" v-if="config?.pages?.title">{{ config.pages.title }}</h3>
    <BaseForm class="m-b20" :config="form" @submit="submit" />
    <section class="m-b20">
      <slot name="handle"></slot>
    </section>
    <BaseTable
      :config="table"
      @handle-current-change="handleCurrentChange"
      @selection-change="sections => $emit('selection-change', sections)"
    />
  </section>
</template>
<script lang="ts">
import { onMounted, reactive } from 'vue'
import BaseTable from '@/components/BaseTable/index.vue'
import BaseForm from '@/components/BaseForm/index.vue'

export default {
  name: 'MeterialTableSearch',
  components: {
    BaseTable,
    BaseForm
  },
  props: {
    config: Object
  },
  setup (props) {
    const form = reactive(props.config?.form)
    const table = reactive(props.config?.table)

    const init = () => {
      console.log({
        ...form.form,
        ...table.pagination
      })
      table.loading = true
      setTimeout(() => {
        table.tableData = [
          { date: '2016-11-16', name: 'Robert', age: 11, address: '湖南省 衡阳市 祁东县', xxx: '#7e79f2' },
          { date: '2012-03-12', name: 'Larry', age: 21, address: '河南省 洛阳市 嵩县', xxx: '#97f279' },
          { date: '2018-06-17', name: 'Charles', age: 66, address: '山东省 东营市 河口区', xxx: '#f279ba' },
          { date: '2016-11-16', name: 'Robert', age: 11, address: '湖南省 衡阳市 祁东县', xxx: '#7e79f2' },
          { date: '2012-03-12', name: 'Larry', age: 21, address: '河南省 洛阳市 嵩县', xxx: '#97f279' },
          { date: '2018-06-17', name: 'Charles', age: 66, address: '山东省 东营市 河口区', xxx: '#f279ba' },
          { date: '2016-11-16', name: 'Robert', age: 11, address: '湖南省 衡阳市 祁东县', xxx: '#7e79f2' },
          { date: '2012-03-12', name: 'Larry', age: 21, address: '河南省 洛阳市 嵩县', xxx: '#97f279' },
          { date: '2018-06-17', name: 'Charles', age: 66, address: '山东省 东营市 河口区', xxx: '#f279ba' }
        ]
        table.pagination.total = 200
        table.loading = false
      }, 1500)
    }

    // Search
    const submit = data => {
      // Set search params
      form.form = data
      table.pagination.total = 0
      table.tableData = []
      table.pagination.pageIndex = 1

      // Init
      !table.loading && init()
    }

    const handleCurrentChange = index => {
      // Set default pagination and tableData
      table.pagination.pageIndex = index
      table.tableData = []
      // Init
      !table.loading && init()
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
