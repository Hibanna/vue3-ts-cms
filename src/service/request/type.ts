import type { AxiosRequestConfig, AxiosResponse } from 'axios'
export interface HYRequestInterceptors {
  HYRequestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  HYRequestInterceptorCatch?: (error: any) => any
  HYResponseInterceptor?: (config: AxiosResponse) => AxiosResponse
  HYResponseInterceptorCatch?: (error: any) => any
}

export interface HYRequestConfig extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors
}
