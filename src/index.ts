import axios, { AxiosRequestConfig, AxiosPromise, AxiosInstance } from 'axios'

export function create(apiInstance?: AxiosInstance) {
  let previousCall = null

  return function request(config: AxiosRequestConfig) {
    const api = apiInstance || axios

    if (previousCall) {
      previousCall.cancel('Only one request allowed at a time.')
    }
    previousCall = axios.CancelToken.source()

    return new Promise((resolve, reject) => {
      api({
        ...config,
        cancelToken: previousCall.token
      })
        .then(resolve)
        .catch(err => {
          if (!axios.isCancel(err)) {
            reject(err)
          }
        })
    })
  }
}
