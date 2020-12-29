/*
 * @Description: 
 * @Author: xiehuaqiang
 * @FilePath: \helloVue3\src\main.js
 * @Date: 2020-12-09 17:19:37
 */
import { createApp } from 'vue'
// import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css'
import router from './router'
import App from './App.vue'

import '@/utils/fetch.js'
import './styles/reset.scss'

import moment from 'moment'
console.log('🚀 moment', moment)

import { ElButton } from 'element-plus';
const components = [ ElButton ]
const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
})

app.use(router)
app.mount('#app')