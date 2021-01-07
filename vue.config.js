/*
 * @Description: 使用vue-cli自带的环境变量配置文件 + 额外的自定义yaml配置的环境变量（目的为了熟练这两种情况）
 * 将参数放到了系统自带的 process.env 对象 和 自定义的全局变量对象里
 * @Author: xiehuaqiang
 * @FilePath: \helloVue3\vue.config.js
 * @Date: 2020-11-25 15:06:46
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const fs = require('fs')
const yaml = require('js-yaml')
const webpack = require('webpack')
const path = require('path')
const { name, version } = require('./package.json')

const projectDir = __dirname
const env = process.env.NODE_ENV || 'development'
const isProduction = process.env.NODE_ENV === 'production'
const configDir = path.join(projectDir, './config')
const defaultEnvFilename = path.resolve(configDir, 'env.yaml')
const configFilename = path.resolve(configDir, `env.${env}.yaml`)
// 将yaml文件内容转换成对象
const defaultEnvObj = yaml.safeLoad(fs.readFileSync(defaultEnvFilename, 'utf8'))
const envConfig = configFilename ? yaml.safeLoad(fs.readFileSync(configFilename, 'utf8')) : {}

const globalConfig = Object.assign({}, defaultEnvObj, envConfig)
const publicPath = isProduction ? '/helloVue3/' : '/'

console.log('===================================start')
console.log('globalConfig: ', globalConfig)
console.log('===================================end')

function resolve(dir) {
  return path.join(__dirname, dir)
}

globalConfig.VUE_APP_VERSION = version
process.env.VUE_APP_VERSION = version

const splitChunksObj = {
  cacheGroups: {
    common: {
      name: "chunk-common",
      chunks: "initial",
      minChunks: 2,
      maxInitialRequests: 5,
      minSize: 0,
      priority: 1,
      reuseExistingChunk: true,
      enforce: true
    },
    vendors: {
      name: "chunk-vendors",
      test: /[\\/]node_modules[\\/]/,
      chunks: "initial",
      priority: 2,
      reuseExistingChunk: true,
      enforce: true
    },
    elementUI: {
      name: "chunk-element-plus",
      test: /[\\/]node_modules[\\/]element-plus[\\/]/,
      chunks: "all",
      priority: 3,
      reuseExistingChunk: true,
      enforce: true
    },
    moment: {
      name: "chunk-moment",
      test: /[\\/]node_modules[\\/]moment[\\/]/,
      chunks: "all",
      priority: 4,
      reuseExistingChunk: true,
      enforce: true
    },
    dayjs: {
      name: "chunk-dayjs",
      test: /[\\/]node_modules[\\/]dayjs[\\/]/,
      chunks: "all",
      priority: 5,
      reuseExistingChunk: true,
      enforce: true
    }
  }
}

module.exports = {
  devServer: {
    // proxy: 'http://localhost:8899', // will proxy all request 与mock.js里的端口号保持一致
    proxy: {
      '/authority': { target: 'http://10.0.10.65/' },
      '/cooperation': { target: 'http://10.0.10.65/' },
      '/*': { target: 'http://localhost:8899' }
    },
    https: false
  },
  publicPath,
  chainWebpack: (config) => {
    // console.log('🚀 config.toString()', config.toString())
    const mapType = isProduction ? '' : 'source-map'
    config.devtool(mapType)
    config.resolve.alias
      .set('@', resolve('src'))
    // config.optimization.splitChunks(splitChunksObj)
    config
      .optimization
        .minimizer('terser')
          .tap(args => {
            // 经过测试得出结论： 这玩意儿只在生产环境才会生效！！
            if (process.env.NODE_ENV === 'production') {
              args[0].terserOptions.compress.drop_console = true
              args[0].terserOptions.compress.drop_debugger = true
            }
            return args
          })
  // https://v4.webpack.docschina.org/guides/caching/
    // 使用 HashedModuleIdsPlugin || runtimeChunk 进行优化
    config
      .optimization
        .runtimeChunk('single')
    config
      .plugin('DefinePlugin')
        .use(webpack.DefinePlugin, [{
          VUE_APP_NAME: JSON.stringify(name),
          GLOBALE_CONFIG: JSON.stringify(globalConfig)
        }])
        .end()
      .plugin('HtmlWebpackPlugin')
        .use(HtmlWebpackPlugin, [{
          template: 'public/index.html',
          BASE_URL: publicPath,
          VUE_APP_TITLE: globalConfig.VUE_APP_TITLE
        }])
        .end()
      .plugin('ProvidePlugin')
        .use(webpack.ProvidePlugin, [{
          axios: 'axios'
        }])
        .end()
  },
}