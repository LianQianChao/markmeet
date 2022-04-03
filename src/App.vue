<script setup>
import { ref } from 'vue'
import router from './router'
import Navigation from './components/Navigation.vue'
import Header from './components/Header.vue'

const size = ref(0)
const layout = ref(false)
const isCollapse = ref(false)
const changeWidth = ref(200)
router.afterEach(to => {
  if (to.name !== 'login') {
    size.value = 20
    layout.value = true
  } else {
    size.value = 0
    layout.value = false
  }
})

const changeIsCollapse = () => {
  isCollapse.value = !isCollapse.value
  isCollapse.value?changeWidth.value=63:changeWidth.value=200
}

</script>
<template>
  <div class="common-layout">
    <el-container v-if="layout">
      <el-aside :style="{ width: changeWidth + 'px' }">
        <Navigation :isCollapse="isCollapse" />
      </el-aside>
      <el-container>
        <el-header> <Header @to-expand="changeIsCollapse" /> </el-header>
        <el-main :style="{ padding: size }"
          ><router-view></router-view
        ></el-main>
      </el-container>
    </el-container>
    <div v-else>
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
}

main {
  height: calc(100vh - 60px);
  --el-main-padding: 10px!important;
}
.el-header {
  color: #fff;
  padding: 0;
}
/* .el-header,.el-footer{
  padding: 0;
} */
</style>
