/*
 * @Description: 
 * @Author: xiehuaqiang
 * @FilePath: \helloVue3\src\main.js
 * @Date: 2020-12-09 17:19:37
 */
import { createApp } from 'vue'
// import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css'

import moment from 'moment'

// import dayjs from 'dayjs'
import * as dayjs from 'dayjs'
// console.log('🚀 dayjs', dayjs)


import router from './router'
console.log('🚀 router', router)
import App from './App.vue'

import '@/utils/fetch.js'
import directives  from './directives'
import './styles/reset.scss'

// console.log('🚀 moment', moment)

import { ElButton } from 'element-plus'
const components = [ ElButton ]
const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
})

app.use(directives)
app.use(router)
app.mount('#app')