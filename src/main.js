/*
 * @Description: 
 * @Author: xiehuaqiang
 * @FilePath: /hellovue3/src/main.js
 * @Date: 2020-11-25 20:11:58
 */
import { createApp } from 'vue'
// import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue'

import './styles/reset.scss'

import { ElButton } from 'element-plus';
const components = [ ElButton ]
const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
})


app
.use(ElementPlus, { size: 'mini' })
.mount('#app')