<template>
  <BaseSearch :config="config" @selection-change="selectionChange">
    <template #handle>
      <el-button type="primary" size="medium" @click="() => {
        this.$notify({
          title: '操作提示',
          message: '这是一条Primary提示消息',
          type: 'success'
        })
      }">新增数据</el-button>
      <el-button type="danger" size="medium" @click="() => {
        this.$notify({
          title: '操作提示',
          message: '这是一条Danger提示消息',
          type: 'error'
        })
      }">删除数据</el-button>
    </template>
  </BaseSearch>
</template>
<script lang="ts">
import BaseSearch from '@/components/BaseSearch/index.vue'
import config from './config'

export default {
  name: 'MeterialTableSearch',
  components: {
    BaseSearch
  },
  setup () {
    const selectionChange = sections => {
      console.log(sections)
    }
    return {
      config,
      selectionChange
    }
  }
}
</script>
