import request from '../utils/request'

export function findAllUser(params){
    return request({
        url: 'users',
        method: 'get',
        params
    })
}