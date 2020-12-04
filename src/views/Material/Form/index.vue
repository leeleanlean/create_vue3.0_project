<template>
  <section class="meterial-form">
    <BaseForm :config="config" @submit="submit" />
  </section>
</template>
<script lang="ts">
import BaseForm from '@/components/BaseForm/index.vue'
import { ElNotification } from 'element-plus'
import config from './config'

export default {
  name: 'MeterialForm',
  components: {
    BaseForm
  },
  setup () {
    const submit = forms => {
      const r = JSON.stringify(forms, null, 2)
      ElNotification({
        title: '响应数据',
        type: 'success',
        message: r
      })
    }

    return {
      submit,
      config
    }
  }
}
</script>
