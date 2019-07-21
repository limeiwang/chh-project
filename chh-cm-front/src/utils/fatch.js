import axios from 'axios'

const fatch = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  timeout: 60000 // 请求超时时间，1分钟
  // headers: { 'X-Custom-Header': 'foobar' }
})

// 添加请求拦截器
fatch.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
fatch.interceptors.response.use((response) => {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default fatch
