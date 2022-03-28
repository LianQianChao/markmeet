import axios from 'axios'

const instance = axios.create({
    baseURL: '/mock',
    timeout: 1000
})

export default instance