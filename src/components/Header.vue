<script setup>
import { Avatar } from '@element-plus/icons-vue'
</script>
<template>
  <header>
    <div class="title">
      <img src="../assets/logo.png" />
      <h2>后台管理系统</h2>
    </div>
    <div class="user">
      <p>
        <el-icon><avatar /></el-icon>
      </p>
      <span>admin</span>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: #193454;
  min-height: 60px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #fff;
}
.header > * {
  margin: 0 10px;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.title > img {
  width: 40px;
  height: 40px;
}
.title > h2 {
  margin: 0 8px;
}
.user {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.user > p {
  height: 34px;
  width: 34px;
  border: 1px solid #fff;
  border-radius: 50%;
  margin: 0 10px;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
