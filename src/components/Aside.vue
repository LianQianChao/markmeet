<script>
import {
    Location,
    Setting,
  } from '@element-plus/icons-vue'
import aside from '@/api/aside'

export default {
  components:{
    Location,
    Setting
  },
  setup(){
    
    return{
      aside
    }
  }
}
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
      <el-menu-item v-for="(as,index) in aside" :index="as.path" :key="index">
        <el-icon><component :is="as.meta.icon"/></el-icon>
        <span>{{as.meta.title}}</span>
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
