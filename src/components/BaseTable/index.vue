<template>
  <h3 class="title m-b20" v-if="config?.pages?.title">{{ config.pages.title }}</h3>
  <el-table
    v-loading="config?.loading"
    :data="config?.tableData"
    @selection-change="sections => $emit('selection-change', sections)"
    empty-text="暂无数据"
    style="width: 100%">
    <!-- selection -->
    <el-table-column
      v-if="config?.config?.selection"
      type="selection"
      width="55">
    </el-table-column>

    <!-- # -->
    <el-table-column
      v-if="config?.config?.index ?? true"
      type="index"
      label="#"
      width="55"
      align="center">
    </el-table-column>

    <!-- header -->
    <slot name="header" />

    <!-- column -->
    <el-table-column
      v-for="(item, key) in config?.tableColumn"
      :key="key"
      :prop="item.prop"
      :fixed="item.fixed"
      :align="item.align"
      :label="item.label"
      :width="item.width ?? ''"
      :min-width="item.minWidth ?? ''"
      :show-overflow-tooltip="item.showTooltip"
      :sortable="item.sortable || false">
      <template #default="scope">
        <!-- 文字显示 -->
        <span v-if="!item.type">
          {{ scope.row[item.prop] }}
        </span>
        <!-- 自定义 -->
        <template v-if="item.type === 'slot'">
          <slot :name="item.prop" v-bind:scope="scope" />
        </template>
      </template>
    </el-table-column>

    <!-- footer -->
    <slot name="footer" />
  </el-table>

  <el-pagination
    align="right"
    class="m-tb20"
    @current-change="index => $emit('handle-current-change', index)"
    :small="config.pagination.small"
    :background="config.pagination.background"
    :page-size="config.pagination.pageSize"
    :total="config.pagination.total"
    :page-count="config.pagination.pageCount"
    :pager-count="config.pagination.pagerCount"
    :current-page="config.pagination.currentPage"
    :layout="config.pagination.layout ?? 'prev, pager, next, sizes, total'"
    :page-sizes="config.pagination.pageSizes"
    :popper-class="config.pagination.popperClass"
    :prev-text="config.pagination.prevText"
    :next-text="config.pagination.nextText"
    :disabled="config.pagination.disabled"
    :hide-on-single-page="config.pagination.hideOnSinglePage">
  </el-pagination>
</template>
<script lang="ts">
export default {
  props: {
    config: Object
  },
  emits: [
    'handle-current-change',
    'handleCurrentChange',
    'selection-change',
    'selectionChange'
  ]
}
</script>
