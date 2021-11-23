import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { HYRequestInterceptors, HYRequestConfig } from './type'

class HYRequest {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors
  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.instance.interceptors?.request.use(
      this.interceptors?.HYRequestInterceptor,
      this.interceptors?.HYRequestInterceptorCatch
    )
    this.instance.interceptors?.response.use(
      this.interceptors?.HYResponseInterceptor,
      this.interceptors?.HYResponseInterceptorCatch
    )
  }
  request(config: AxiosRequestConfig) {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}
export default HYRequest
