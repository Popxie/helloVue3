/*
 * @Description: 另起一个服务 用于提供mock数据
 * @Author: xiehuaqiang
 * @Date: 2020-04-09 16:36:53
 */
const path = require('path')
const Mock = require('cf-mock-server')

const app = new Mock({
  config: path.join(__dirname, './mock-server/config.js'), // 配置文件
  port: 8899,
  watch: true // 观察模式，监听配置文件改动自动应用
})

app.run()
