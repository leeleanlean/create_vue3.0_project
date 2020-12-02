<template>
  <a-row>
    <a-col :span="24" align="right">
      <a-form
        layout="inline"
        :model="form"
        v-bind="formItemLayout">
        <a-form-item>
          <a-input v-model:value="form.fieldA" placeholder="input placeholder" />
        </a-form-item>
        <a-form-item>
          <a-input v-model:value="form.fieldB" placeholder="input placeholder" />
        </a-form-item>
        <a-form-item>
          <a-button type="primary">
            Submit
          </a-button>
        </a-form-item>
      </a-form>
    </a-col>
  </a-row>
</template>
<script lang="ts">
import { ref } from 'vue'
export default {
  setup () {
    const form = ref({
      fieldA: '',
      fieldB: ''
    })
    return {
      form
    }
  }
}
</script>
