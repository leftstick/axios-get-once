import axios, { AxiosRequestConfig, AxiosPromise, AxiosInstance } from 'axios'

export function create(apiInstance?: AxiosInstance) {
  return function request(config: AxiosRequestConfig): AxiosPromise<any> {
    return axios()
  }
}
