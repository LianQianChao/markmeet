<script setup>
import { onUpdated, ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const isCollapse = ref(false)
const props = defineProps({ isCollapse: Boolean })

onUpdated(() => {
  isCollapse.value = props.isCollapse
})
</script>
<template>
  <div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#193454"
      text-color="#8AA1AE"
      active-text-color="#fff"
      :collapse-transition="false"
    >
      <div class="system-name">
        <img v-if="isCollapse" src="../assets/logo.png" style="width:40px;height:40px;"/>
        <span v-else>后台管理系统</span>
      </div>
      <el-menu-item index="1">
        <el-icon><location /></el-icon>
        <template #title> 系统首页 </template>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>用户管理</template>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><document /></el-icon>
        <template #title>权限管理</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>系统设置</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100vh;
}
.el-menu-vertical-demo:is(.el-menu--collapse) {
  width: 63px;
  height: 100vh;
}

.system-name {
  width: auto;
  min-height: 59px;
  border-bottom: 2px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.system-name > span {
  color: #fff;
  font-size: 24px;
}
</style>
