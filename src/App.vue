<script>
import { ref } from 'vue'
import router from './router'

export default {
  setup() {
    const size = ref(0)
    const show = ref(false)
    router.afterEach(to => {
      if (to.name !== 'login') {
        size.value = 20
        show.value = true
      }
    })
    return {
      size,
      show,
    }
  },
}
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header v-if="show">Header</el-header>
      <el-container>
        <el-aside v-if="show" width="200px">Aside</el-aside>
        <el-container>
          <el-main :style="{ padding: size }"
            ><router-view></router-view
          ></el-main>
          <el-footer v-if="show">Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0 0;
}
</style>
