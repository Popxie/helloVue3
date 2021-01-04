/*
 * @Description: 
 * @Author: xiehuaqiang
 * @FilePath: \helloVue3\src\router\index.js
 * @Date: 2020-11-26 09:24:19
 */
import { createRouter, createWebHashHistory } from 'vue-router'
// console.log('createRouter: ', createRouter)

const routes = [
  { path: '/', component: () => import('@/components/NewMethods.vue') },
  { path: '/form', component: () => import('@/components/Form.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

// console.log('router: ', router)
export default router