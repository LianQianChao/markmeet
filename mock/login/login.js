import Mock from 'mockjs'
import {success,failure} from '../utils/result'


const loginResult = {
    token: 'tokeljdjofdafljlbdjljie'
}

const result = ops =>{
    
    const body = JSON.parse(ops.body)
    if(body.username === 'admin' && body.password === 'admin'){
        return success(200,'登录成功',loginResult)
    }else{
        return failure(400,'登录失败')
    }
    
}

Mock.mock('/mock/login','get',result)