export default {
  // 配置整体表单
  form: {
    // 默认数据
    data: {
      text: 'text',
      input: 'input'
    },
    // 验证规则
    rules: {
      input: [
        { required: true, message: '请输入活动名称' }
      ]
    }
  },
  // 配置布局
  row: {
    gutter: 20
  },

  // 配置不同类型的表单
  cols: [
    { type: 'slot', prop: 'header' },
    { type: 'text', span: 8, label: '文本', prop: 'text', config: { text: '我是一个文本' } },
    {
      type: 'link',
      span: 8,
      label: '链接',
      prop: 'link',
      config: {
        text: '我是一个连接',
        type: 'primary',
        click: () => console.log('link click')
      }
    },
    {
      type: 'input',
      span: 8,
      label: '输入框',
      prop: 'input',
      config: {
        maxlength: 10,
        showWordLimit: true,
        blur: (v: Event) => console.log('blur', v),
        focus: (v: Event) => console.log('focus', v),
        change: (v: string) => console.log('change', v),
        input: (v: string) => console.log('input', v),
        clear: () => console.log('clear')
      }
    },
    {
      type: 'radio',
      span: 8,
      label: '单选框',
      prop: 'radio',
      config: {
        options: [
          { label: 'aaa' },
          { label: 'bbb', value: '222' },
          { label: 'ccc', value: '333' }
        ],
        change: (v: string) => console.log('change', v)
      }
    },
    {
      type: 'checkbox',
      span: 8,
      label: '多选框',
      prop: 'checkbox',
      config: {
        options: [
          { label: 'aaa' },
          { label: 'bbb', value: '222' },
          { label: 'ccc', value: '333' }
        ],
        change: (v: string) => {
          console.log('change', v)
        }
      }
    },
    {
      type: 'InputNumber',
      span: 8,
      label: '计数器',
      prop: 'InputNumber',
      config: {
        step: 2,
        change: (v: string) => console.log('change', v),
        blur: (v: Event) => console.log('blur', v),
        focus: (v: Event) => console.log('focus', v)
      }
    },
    {
      type: 'select',
      span: 8,
      label: '选择器',
      prop: 'select',
      config: {
        options: [
          { label: 'aaa', value: '111' },
          { label: 'bbb', value: '222' },
          { label: 'ccc', value: '333' }
        ],
        change: (v: string) => console.log('change', v)
      }
    },
    {
      type: 'cascader',
      span: 8,
      label: '级联选择器',
      prop: 'cascader',
      config: {
        props: { expandTrigger: 'hover' },
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }]
          }]
        }],
        change: (v: string) => console.log('change', v)
      }
    },
    {
      type: 'switch',
      span: 8,
      label: '开关',
      prop: 'switch',
      config: {
        change: (v: string) => console.log('change', v)
      }
    },
    {
      type: 'slider',
      span: 8,
      label: '滑块',
      prop: 'slider',
      config: {
        step: 20,
        inputSize: 'mini',
        change: (v: string) => console.log('change', v),
        input: (v: string) => console.log('input', v)
      }
    },
    {
      type: 'TimePicker',
      span: 8,
      label: '时间选择器',
      prop: 'TimePicker',
      config: {
        change: (v: string) => console.log('change', v)
      }
    },
    {
      type: 'TimeSelect',
      span: 8,
      label: '时间选择器',
      prop: 'TimeSelect',
      config: {
        pickerOptions: {
          start: '08:30',
          step: '00:15',
          end: '18:30'
        },
        change: (v: string) => console.log('change', v)
      }
    },
    {
      type: 'DatePicker',
      span: 8,
      label: '日期选择器',
      prop: 'DatePicker',
      config: {
        change: (v: string) => console.log('change', v)
      }
    },
    {
      type: 'DatePicker',
      span: 8,
      label: '日期时间选择器',
      prop: 'DateTimePicker',
      config: {
        type: 'datetime',
        format: 'YYYY-MM-DD hh:mm:ss',
        change: (v: string) => console.log('change', v)
      }
    },
    {
      type: 'rate',
      span: 8,
      label: '评分',
      prop: 'rate',
      config: {
        showText: true,
        texts: ['1', '2', '3', '4', '5'],
        change: (v: string) => console.log('change', v)
      }
    },
    {
      type: 'color',
      span: 8,
      label: '颜色选择器',
      prop: 'color',
      config: {
        change: (v: string) => console.log('change', v),
        activeChange: (v: string) => console.log('activeChange', v)
      }
    },
    {
      type: 'upload',
      span: 16,
      label: '文件上传',
      prop: 'upload',
      config: {
        tip: '只能上传 jpg/png 文件，且不超过 500kb'
      }
    },
    {
      type: 'transfer',
      span: 24,
      label: '穿梭框',
      prop: 'transfer',
      config: {
        data: [
          { label: '备选项a', key: 1 },
          { label: '备选项b', key: 2 },
          { label: '备选项c', key: 3 }
        ],
        change: (v: string[], position: string, k: string[]) => console.log('change', v, position, k)
      }
    }
  ]
}
