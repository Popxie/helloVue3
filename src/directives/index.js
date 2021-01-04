/*
 * @Description: 自定义指令出口
 * @Author: xiehuaqiang
 * @FilePath: \helloVue3\src\directives\index.js
 * @Date: 2021-01-04 22:40:49
 */
import copy from './copy'

const directives = {
  copy
}
Object.keys(directives)

export default {
  install(app) {
    Object.keys(directives).forEach((key) => {
      app.directive(key, directives[key])
    })
  },
}