import axios from 'axios'
import { ElNotification } from 'element-plus'

// eslint-disable-next-line no-sequences
axios.defaults.baseURL = process.env.BASE_API, // api 的 base_url
axios.defaults.timeout = 60000

const toLogin = () => {}
// response 拦截器
/**
 * @param {Function} response Any status code that lie within the range of 2xx cause this function to trigger
 */
axios.interceptors.response.use(
  response => {
    const { data } = response
    return { isSuccess: true, ...data, response }
  },
  error => {
    // 当为下载的情况
    const message = error.response.data.message || '请求异常'
    if (error.response.data instanceof Blob) {
      const reader = new FileReader()
      reader.readAsText(error.response.data) // 读取blob中的数据
      reader.onload = (event) => {
        const message = JSON.parse(event.target.result)
        console.log('message: ', message)
        ElNotification.error({
          title: '下载出错',
          message
        })
      }
    } else { // 正常情况
      let code
      if (error.response && error.response.status) {
        code = error.response.status
      }
      switch (code) {
        case 401:
          toLogin()
          break
        default:
          ElNotification.warning({ message, duration: 2500 })
      }
    }
    return { isSuccess: false, response: error.response || {}}
  }
)
export default axios
