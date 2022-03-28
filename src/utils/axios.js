import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000/mock/',
    timeout: 1000
})

export default instance