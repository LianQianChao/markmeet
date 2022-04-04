<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

</script>
<template>
  <aside>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="1"
      text-color="#fff"
      :router="true"
    >
      <el-menu-item index="/">
        <el-icon><location /></el-icon>
        <span>系统首页</span>
      </el-menu-item>
      <el-menu-item index="/user">
        <el-icon><icon-menu /></el-icon>
        <span>用户管理</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><document /></el-icon>
        <span>档案管理</span>
      </el-menu-item>
      <el-menu-item index="/setting">
        <el-icon><setting /></el-icon>
        <span>系统设置</span>
      </el-menu-item>
    </el-menu>
  </aside>
</template>

<style scoped>
.el-menu-vertical-demo {
  height: calc(100vh - 60px);
}
</style>
>
