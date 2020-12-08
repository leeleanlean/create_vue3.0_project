export default {
  tableData: [{
    header: 'header',
    date: '2016-05-02',
    name: '王小虎',
    slot: 'slot',
    address: '上海市普陀区金沙江路 1518 弄',
    footer: 'footer'
  }, {
    header: 'header',
    date: '2016-05-04',
    name: '王小虎',
    slot: 'slot',
    address: '上海市普陀区金沙江路 1517 弄',
    footer: 'footer'
  }, {
    header: 'header',
    date: '2016-05-01',
    name: '王小虎',
    slot: 'slot',
    address: '上海市普陀区金沙江路 1519 弄',
    footer: 'footer'
  }, {
    header: 'header',
    date: '2016-05-01',
    name: '王小虎',
    slot: 'slot',
    address: '上海市普陀区金沙江路 1519 弄',
    footer: 'footer'
  }, {
    header: 'header',
    date: '2016-05-01',
    name: '王小虎',
    slot: 'slot',
    address: '上海市普陀区金沙江路 1519 弄',
    footer: 'footer'
  }],
  tableColumn: [
    { label: '日期', prop: 'date' },
    { label: '名称', prop: 'name' },
    { label: '地址', minWidth: 200, prop: 'address' },
    { type: 'slot', label: 'xxx', prop: 'xxx' }
  ],
  pagination: {
    pageIndex: 1,
    pageSize: 10,
    pageTotal: 100
  }
}
