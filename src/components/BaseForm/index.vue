<template>
  <section class="base-form">
    <h3>表单业务组件</h3>
    {{ props }}
    <!-- <a-form layout="inline">
      <a-row
        :align="config.row.align"
        :gutter="config.row.gutter"
        :justify="config.row.justify"
        :type="config.row.type">
        <a-col :span="8">
          <a-input v-model:value="form.name" placeholder="plase input name" />
        </a-col>
        <a-col :span="8">col-3</a-col>
        <a-col :span="8">col-3</a-col>
      </a-row>
    </a-form> -->
  </section>
</template>
<script lang="ts">
// import { ref } from 'vue'

export default {
  components: {
  },
  props: {
  },
  setup (props, context) {
    console.log(context.attrs)
  }
}
</script>
