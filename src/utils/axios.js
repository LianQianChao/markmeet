import axios from 'axios'

const instance = axios.create({
  baseURL: '/mock',
  timeout: 1000,
})

instance.get = (url, data) => {
  return new Promise(function (resolve, reject) {
    instance({
      method: 'get',
      url: url,
      data: data,
    })
      .then(res => resolve(res.data))
      .catch(error => reject(error))
  })
}

export default instance
