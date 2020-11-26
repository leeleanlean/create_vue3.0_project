# create_vue3.0_project

## ant-design-vue
安装组件
```
yarn add ant-design-vue@next --save
```
全局引入组件
```
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

app.use(Antd)
```

## 多环境配置
package.json
```
"scripts": {
  "serve": "vue-cli-service serve --mode develop",
  "build": "vue-cli-service build --mode production",
  "lint": "vue-cli-service lint"
},
```
.env.develop
```
NODE_ENV = 'development'
VUE_APP_VERSION = 'develop'

VUE_APP_BASE_URL = '/develop'
```
.env.production
```
NODE_ENV = 'production'
VUE_APP_VERSION = 'production'

VUE_APP_BASE_URL = '/production'
```
使用方法
```
{{ process.env.VUE_APP_BASE_URL }}
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
