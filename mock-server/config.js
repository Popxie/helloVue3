// mock 数据存放的目录
exports.dataFile = './local-develop-mock-data'
/**
 * 键： method +空格+ api
 * 值：文件路径，相对于localDevelopMockData
 */

// 'DELETE /unit/del?*': (req, res) => {
//   res.status(400).send({ message: '出错啦~!' })
// }

/**
 * 课程管理模块
 */
const courseManage = {
  'GET /kaka/demo/list?*': 'module-1/list.json',
  'POST /cooperation/api/v1/course/lesson/upload-resource': 'upload-success.json',
  'DELETE /cooperation/api/v1/course/mixSource/*?*': 'success.json'
}

exports.api = {
  ...courseManage,
}