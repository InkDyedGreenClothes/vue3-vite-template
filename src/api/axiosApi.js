import axios from 'axios'
import { TIMEOUT, OTHER, NOLOGIN } from './error-code'
import { getToken, clear } from 'utils'
// import { Base64 } from 'js-base64'
import { ElNotification, ElMessageBox } from 'element-plus'
{{{ importInfo }}}

console.log(TIMEOUT)

axios.defaults.timeout = 10000 // 默认超时时间

axios.defaults.headers.post['Content-Type'] = 'application/json'

// 接口请求处理
axios.interceptors.request.use((config) => {
  const isToken =
    config.headers['X-token'] === false ? config.headers['x-isToken'] : true
  const token = getToken()
  if (token && isToken) {
    config.headers.token = `Bearer${token}`
  }
  return config
})

// 接口返回处理
axios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
)

function handleError(error, reject, opts) {
  let isAlert = opts.custom ? opts.custom['isAlert'] : true
  isAlert = isAlert === undefined ? true : isAlert
  if (isAlert) {
    if (error.code == TIMEOUT) {
      {{{ fn }}}
    } else if (error.response && error.response.data) {
      if (error.response.status === 500) {
      {{{ fn1 }}}
      } else {
        const resData = error.response.data
        if (OTHER.includes(resData.code)) {
        {{{ fn2 }}}
        } else if (resData.msg) {
        {{{ fn3 }}}
          
        } else if (resData.message) {
        {{{ fn4 }}}
         
        }
      }
    } else if (error.message) {
        {{{ fn5 }}}
      
    }
  }
  reject(error)
}

function handleSuccess(res, resolve, opts) {
  let isAlert = opts.custom ? opts.custom['isAlert'] : true
  isAlert = isAlert === undefined ? true : isAlert
  const resData = res.data
  if (resData.isSuccess === false) {
    // 未登录
    if (NOLOGIN.includes(resData.code)) {
        {{{ fn6 }}}
     
    }
  } else {
    if (isAlert) {
        {{{ fn7 }}}
    }
  }
  resolve(res.data)
}

// http 请求

const httpServer = (opts) => {
  // 公共参数
  const publicParams = {
    ts: Date.now()
  }
  //   http 默认配置
  const method = opts.method.toUpperCase()
  let baseURL = ''
  let protocol = window.location.protocol
  let host = window.location.host
  // let hostname = window.location.hostname
  // let port = window.location.port
  let nowType = import.meta.env.VITE_APP_TYPE
  console.log(nowType, 'now')
  if (nowType == 'local') {
    baseURL = '/api'
  } else {
    baseURL = `${protocol}//${host}${import.meta.env.VITE_APP_BASE_API}`
  }

  const httpDefaultOpts = {
    method,
    baseURL,
    url: opts.url,
    responseType: opts.responseType || '',
    timeout: (opts.custom && opts.custom['timeout']) || 30000
  }
  if (opts['meta']) {
    httpDefaultOpts.headers = opts['meta']
  }
  const dataRequest = ['PUT', 'POST', 'PATCH']
  if (dataRequest.includes(method)) {
    if (opts.params) {
      httpDefaultOpts.params = opts.params || {}
    } else {
      httpDefaultOpts.data = opts.data || {}
    }
  } else {
    httpDefaultOpts.params = {
      ...publicParams,
      ...(opts.data || {})
    }
  }
  // formData 转换
  if (opts.formData) {
    httpDefaultOpts.transformRequest = [
      (data) => {
        const formData = new FormData()
        if (data) {
          Object.entries(data).forEach((item) => {
            formData.append(item[0], item[1])
          })
        }
        return formData
      }
    ]
  }

  const promise = new Promise((resolve, reject) => {
    axios(httpDefaultOpts)
      .then((response) => {
        handleSuccess(response, resolve, opts)
      })
      .catch((error) => {
        handleError(error, reject, opts)
      })
  })
  return promise
}

export default httpServer
