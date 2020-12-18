<template>
  <section class="meterial-table">
    <BaseTable :config="config">
      <!-- header -->
      <template v-slot:header>
        <el-table-column label="header" prop="header">
          <template v-slot="scope">
            {{scope.row.header}}
          </template>
        </el-table-column>
      </template>

      <!-- footer -->
      <template v-slot:footer>
        <el-table-column label="footer" prop="footer">
          <template v-slot="scope">
            {{scope.row.footer}}
          </template>
        </el-table-column>
      </template>

      <!-- slot -->
      <template v-slot:xxx="{ scope }">
        {{ scope.row.slot }}
      </template>
    </BaseTable>
  </section>
</template>
<script lang="ts">
import BaseTable from '@/components/BaseTable/index.vue'
import data from './config'
import { onMounted, reactive } from 'vue'

export default {
  name: 'MeterialTable',
  components: {
    BaseTable
  },
  setup () {
    const config = reactive(data)

    const init = () => {
      setTimeout(() => {
        config.tableData.push({
          header: 'header',
          date: '2016-05-01',
          name: '王小虎',
          slot: 'slot',
          address: '上海市普陀区金沙江路 1519 弄',
          footer: 'footer'
        })
        config.pagination.pageTotal = 600
      }, 1500)
    }

    onMounted(() => {
      init()
    })
    return {
      config
    }
  }
}
</script>
