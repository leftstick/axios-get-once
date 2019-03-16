import axios from 'axios'

export function create() {
  let previousCall = null

  return function request(config) {
    if (previousCall) {
      previousCall.cancel('Only one request allowed at a time.')
    }
    previousCall = axios.CancelToken.source()

    return new Promise((resolve, reject) => {
      axios({
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
