<script>
import { reactive } from 'vue'
import { login } from '@/api/login'
import { ElMessage } from 'element-plus'
import router from '@/router'
import { httpStatus } from '@/utils/httpStatus'

export default {
  setup() {
    const formData = reactive({
      username: 'aaa',
      password: '123456',
      remember: false,
    })

    const onSubmit = () => {
      login(formData).then(
        value => {
          if (value.data.code === httpStatus.success) {
            ElMessage.success('登录成功')
            router.replace('/')
          }
        },
        error => console.log(error)
      )
    }
    return {
      formData,
      onSubmit,
    }
  },
}
</script>
<template>
  <div class="main">
    <div class="content">
      <div class="login-body">
        <el-form :model="formData" label-width="120px" label-position="top">
          <el-form-item label="用户名">
            <el-input v-model="formData.username" />
          </el-form-item>

          <el-form-item label="密码">
            <el-input v-model="formData.password" />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div>
        <h4>欢迎登录</h4>
        <img src="../assets/logo.png" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to left, #1d3b67 50%, #f4f6f9 50%);
}
.login-body {
  width: 400px;
  height: 420px;
  border-radius: 6px;
  background-color: #f5f6f9;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-body + div {
  text-align: center;
  width: 400px;
  height: 420px;
  background-color: #203c67;
  font-size: 30px;
  color: white;
}
.login-body > form {
  width: 270px;
  border: 1px solid #edefef;
  border-radius: 6px;
  background-color: #ffffff;
  padding: 34px 34px;
}
.content {
  height: 420px;
  background: #f4f6f9;
  border-radius: 6px;
  box-shadow: 0px 0px 10px #222121;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-body > form .el-button--primary {
  width: 100%;
}
</style>
