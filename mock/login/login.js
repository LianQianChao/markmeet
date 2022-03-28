import Mock from 'mockjs'

const result = ops =>{
    console.log(ops)
    return{
        username:'admin',
        password: '123434'
    }
}

Mock.mock('/mock/login','get',result)