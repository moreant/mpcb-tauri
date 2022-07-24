import axios from 'axios'
// @ts-ignore
import httpAdapter from 'axios/lib/adapters/http'

axios.defaults.adapter = httpAdapter

axios.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.code !== 200) {
      return Promise.reject(new Error(res.message || '错误'))
    } else {
      return res
    }
  },
  (error) => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default axios
