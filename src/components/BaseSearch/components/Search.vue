<template>
  <BaseForm :config="config" />
</template>
<script lang="ts">
import BaseForm from '@/components/BaseForm/index.vue'

export default {
  components: {
    BaseForm
  },
  setup () {
    const config = {
      row: {
        gutter: 20,
        type: 'flex',
        justify: 'end'
      },
      form: {
        search: true
      },
      cols: [
        { type: 'input', span: 6, prop: 'name', config: { placeholder: '请输入名称' } },
        { type: 'input', span: 6, prop: 'age', config: { placeholder: '请输入年龄' } },
        { type: 'input', span: 6, prop: 'height', config: { placeholder: '请输入身高' } }
      ]
    }

    return {
      config
    }
  }
}
</script>
