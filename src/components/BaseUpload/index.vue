<template>
  <el-upload
    action=""
    :headers="col.config.headers ?? headers"
    :multiple="col.config.multiple"
    :data="col.config.data"
    :name="col.config.name"
    :with-credentials="col.config.withCredentials"
    :show-file-list="col.config.showFileList"
    :drag="col.config.drag"
    :accept="col.config.accept"
    :on-preview="col.config.onPreview"
    :on-remove="col.config.onRemove"
    :on-success="col.config.onSuccess"
    :on-error="col.config.onError"
    :on-progress="col.config.onProgress"
    :on-change="col.config.onChange"
    :before-upload="col.config.beforeUpload"
    :before-remove="col.config.beforeRemove"
    :list-type="col.config.listType"
    :auto-upload="col.config.autoUpload"
    :file-list="col.config.fileList"
    :http-request="col.config.httpRequest"
    :disabled="col.config.disabled"
    :limit="col.config.limit"
    :on-exceed="col.config.onExceed"
    @clearFiles="col.config.clearFiles"
    @abort="col.config.abort"
    @submit="col.config.submit">
    <el-button
      :size="col.config?.button?.size ?? 'small'"
      :type="col.config?.button?.type ?? 'primary'">
      {{ col.config?.button?.message ?? '点击上传' }}
    </el-button>
    <template #tip>
      <div class="el-upload__tip">{{ col.config.tip }}</div>
    </template>
  </el-upload>
</template>
<script lang="ts">
export default {
  props: {
    col: {
      type: Object,
      required: true
    }
  },
  setup () {
    const headers = {
      token: 'token'
    }
    return {
      headers
    }
  }
}
</script>
