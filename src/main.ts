import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

/**
 * Element plus
 */
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

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
  .use(ElementPlus)
  .mount('#app')
