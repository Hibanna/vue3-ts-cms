import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

export const HYRequest1 = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})
export default new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    HYRequestInterceptor: (config) => {
      console.log('实例的请求拦截')
      return config
    },
    HYRequestInterceptorCatch: (error) => {
      console.log('实例的请求错误拦截')
      return error
    },
    HYResponseInterceptor: (config) => {
      console.log('实例的响应拦截')
      return config
    },
    HYResponseInterceptorCatch: (error) => {
      console.log('实例的响应错误拦截')
      return error
    }
  }
})
