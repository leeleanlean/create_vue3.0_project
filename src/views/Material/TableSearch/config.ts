export default {
  form: {
    search: true,

    form: {},

    // 配置布局
    row: {
      type: 'flex',
      justify: 'end',
      gutter: 20
    },

    // 配置不同类型的表单
    cols: [
      { type: 'input', span: 5, prop: 'name', config: { placeholder: '请输入姓名' } },
      { type: 'input', span: 5, prop: 'date', config: { placeholder: '请输入日期' } },
      { type: 'input', span: 5, prop: 'address', config: { placeholder: '请输入地址' } }
    ]
  },
  table: {
    loading: false,
    tableData: [],
    tableColumn: [
      { label: '日期', prop: 'date' },
      { label: '名称', prop: 'name' },
      { label: '地址', minWidth: 200, prop: 'address' },
      { type: 'slot', label: 'xxx', prop: 'xxx' }
    ],
    pagination: {
      pageIndex: 1,
      pageSize: 10,
      total: 0
    }
  }
}
