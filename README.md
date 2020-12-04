# create_vue3.0_project
Vue.js3.0 + TypeScript 项目搭建过程，以及通用业务组件封装

## 1. 分支说明
|  分支名称  |  说明  |
|  ----  | ----  |
| main  | 主分支 |
| step_1_init  | 初始化Vue.js3.0+TypeScript项目 |
| step_2_element  | 安装element-plus插件 |
| step_3_env  | 多环境配置 |
| step_4_framework  | 基础框架样式/菜单/路由 |
| step_5_docs  | 打包在线预览文件 |
| step_6_meterial  | 通用业务组件封装 |

## 2. 安装element-plus插件
```
# 安装插件
npm install element-plus --save
or
yarn add element-plus --save

# 全局引入
/**
 * Element plus
 */
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

createApp(App).use(ElementPlus)
```

## 3. 多环境配置
```
# package.json
"scripts": {
  "serve": "vue-cli-service serve --mode develop",
  "build": "vue-cli-service build --mode production",
  "lint": "vue-cli-service lint"
},

# .env.develop
NODE_ENV = 'development'
VUE_APP_VERSION = 'develop'

VUE_APP_BASE_URL = '/develop'

# .env.production
NODE_ENV = 'production'
VUE_APP_VERSION = 'production'

VUE_APP_BASE_URL = '/production'

# 使用方法
{{ process.env.VUE_APP_BASE_URL }}
```
## 4/5. 基础框架样式/菜单/路由/预览
在线预览: [Vue.js3.0 后台管理系统](https://leeleanlean.github.io/create_vue3.0_project/)
## 6. 通用业务组件封装
### 6.1 通用表单组件
[预览通用表单组件](https://leeleanlean.github.io/create_vue3.0_project/#/Material/Form)
#### 6.1.1 可配置表单类型
| 表单类型  | 说明  |
|  ----  | ----  |
| slot | 自定义组件 |
| text | 文本 |
| link | 链接 |
| input | 输入框 |
| radio | 单选框 |
| checkbox | 多选框 |
| InputNumber | 计数器 |
| select | 选择器 |
| cascader | 级联选择器 |
| switch | 开关 |
| slider | 滑块 |
| TimePicker | 时间选择器 |
| TimeSelect | 时间选择器 |
| DatePicker | 日期选择器 |
| DatePicker | 日期时间选择器 |
| rate | 评分 |
| color | 颜色选择器 |
| upload | 上传 |
| transfer | 穿梭框 |
#### 6.1.2 Import
```
import BaseForm from '@/components/BaseForm/index.vue'
```
#### 6.1.3 Usage
引入配置文件，传参给通用表单组件
```
// import config from './config.ts'
<BaseForm :config="config" @submit="forms => console.log(forms)" />
```
#### 6.1.4 Config
config.ts

每个type下的config可以配置element-plus的官方属性
```
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
        blur: (v: string) => console.log('blur', v),
        focus: (v: string) => console.log('focus', v),
        change: (v: string) => console.log('change', v),
        input: (v: string) => console.log('input', v),
        clear: (v: string) => console.log('clear', v)
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
        blur: (v: string) => console.log('blur', v),
        focus: (v: string) => console.log('focus', v)
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
        change: (v: string) => console.log('change', v),
        blur: (v: string) => console.log('blur', v),
        focus: (v: string) => console.log('focus', v)
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
        change: (v: string) => console.log('change', v),
        blur: (v: string) => console.log('blur', v),
        focus: (v: string) => console.log('focus', v)
      }
    },
    {
      type: 'DatePicker',
      span: 8,
      label: '日期选择器',
      prop: 'DatePicker',
      config: {
        change: (v: string) => console.log('change', v),
        blur: (v: string) => console.log('blur', v),
        focus: (v: string) => console.log('focus', v)
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
        change: (v: string) => console.log('change', v),
        blur: (v: string) => console.log('blur', v),
        focus: (v: string) => console.log('focus', v)
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
        change: (v: string) => console.log('change', v)
      }
    }
  ]
}
```
