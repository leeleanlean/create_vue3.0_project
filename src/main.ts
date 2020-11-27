import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

/**
 * Antd
 */
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

/**
 * Base styles
 */
import './assets/styles/index.scss'

/**
 * Create app
 */
createApp(App)
  .use(store)
  .use(router)
  .use(Antd)
  .mount('#app')
