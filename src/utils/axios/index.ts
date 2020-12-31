import axios from 'axios'
import { Notification } from 'element-ui'

// BASE_URL
const BASE_URL = process.env.VUE_APP_BASE_URL
const CancelToken = axios.CancelToken
const service = axios.create({
  timeout: 30000,
  baseURL: BASE_URL
})

const loginPath = () => {
  window.location.href = window.location.origin + window.location.pathname + '#/login'
}

// 拦截请求数据
service.interceptors.request.use(config => {
  // 登录
  if (config.url.includes('/rest/auth')) return config

  // 其他
  const _token = JSON.parse(localStorage.getItem('CETC_INFO'))
  _token
    ? config.headers.common.authToken = _token.authToken
    : loginPath()

  // 设置权限信息
  return config
}, error => {
  Promise.reject(error)
})

// 拦截返回数据
service.interceptors.response.use(response => {
  return new Promise((resolve, reject) => {
    // 如果是下载的流
    if (response.request.responseType === 'blob') {
      resolve(response)
      return
    }
    // 如果没有data
    if (!response.data) reject(response)
    if (response.data.retCode) {
      // 返回状态码业务逻辑处理
      switch (response.data.retCode) {
        case '000000':
          resolve(response.data)
          break
        default:
          Notification.error({
            title: `状态码: ${response.data.retCode}`,
            message: response.data.retMsg
          })
          reject(response)
      }
    } else {
      resolve(response)
    }
  })
}, error => {
  if (axios.isCancel(error)) { // 手动取消的请求
    return Promise.reject(new Error({ cancel: true }))
  }
  // 拿不到response弹出报错信息
  if (!error.response) {
    Notification.error({
      title: '请求接口出错',
      message: error
    })
  }
  // 处理请求出错业务逻辑
  const status = error.response.status
  const text = error.response.statusText
  if (!status) return Promise.reject(error)
  // 状态码异常提示处理提示
  if (status >= 400 && status < 500) {
    Notification.error({
      title: `状态码: ${status}`,
      message: text
    })
    status === 401 && loginPath()
  } else if (status >= 500) {
    Notification.error({
      title: `状态码: ${status}`,
      message: '系统异常请稍后'
    })
  }
  return Promise.reject(error)
})

export default function ({
  url = '', params = {}, method = 'GET',
  RequestPayload = false, CancelTokenFn = () => {},
  ...args
} = {}) {
  const _config = {
    url,
    method,
    cancelToken: new CancelToken(CancelTokenFn), // 取消请求
    ...args
  }

  // 下载是为流, 取消timeout
  if (params.blob) _config.responseType = 'blob'
  _config.responseType === 'blob' && (service.defaults.timeout = 0)

  // 资料送审上传附件大容量
  if (_config.headers && _config.headers['Content-Type'].includes('multipart/form-data')) {
    service.defaults.timeout = 0
  }

  // POST请求需要RequestPayload时配置
  method.toUpperCase() === 'GET'
    ? _config.params = params
    : (RequestPayload ? _config.data = params : _config.params = params)

  // 发送请求
  return service(_config)
}
