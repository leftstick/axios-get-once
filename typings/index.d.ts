import axios, { AxiosRequestConfig, AxiosPromise } from 'axios'

export function create() {
  return function request(config: AxiosRequestConfig): AxiosPromise<any> {
    return axios()
  }
}
