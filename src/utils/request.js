import axios from 'axios'
import { ElMessage } from 'element-plus'
import { httpStatus } from '@/utils/httpStatus'

const request = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 5000,
})

//响应拦截码
const interceptorsCode = [
  httpStatus.LOGIN_FAILED.code,
  httpStatus.ADD_FAILED.code,
  httpStatus.DELETE_FAILED.code,
  httpStatus.UPDATE_FAILED.code,
  httpStatus.FAILED.code,
]

request.interceptors.response.use(response => {
  if (interceptorsCode.includes(response.data.code)) {
    ElMessage.error(response.data.message)
  }
  return response
})

export default request
