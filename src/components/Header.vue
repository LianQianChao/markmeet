<script setup>
import { Expand, Avatar } from '@element-plus/icons-vue'

const emits = defineEmits(['to-expand'])

const expandAside = () => {
  emits('to-expand')
}
</script>
<template>
  <div class="header">
    <el-icon @click="expandAside"><expand /></el-icon>
    <div class="header-info">
      <p><el-icon><avatar /></el-icon></p>
      <span>admin</span>
    </div>
  </div>
</template>

<style scoped>
.header {
  background: #193454;
  min-height: 60px;
  display: flex;
  justify-content: space-between;

  align-items: center;
}
.el-button,
.header > * {
  margin: 0 10px;
}

.header > :first-child {
  font-size: 22px;
  padding: 4px;
  border: 1px solid #fff;
  border-radius: 5px;
  cursor: pointer;
}
.header-info{
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.header-info > p {
  height: 30px;
  width: 30px;
  margin: 0px 8px;
  font-size: 22px;
  border: 1px solid #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>
