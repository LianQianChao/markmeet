<template>
  <div class="footer">
    <div class="left">Copyright @ 2021-2022 十三. All rights reserved.</div>
    <div class="right">
      <a target="_blank" href="https://v3.cn.vuejs.org/"
        >vue3-admin Version 3.0.0</a
      >
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
});
</script>

<style scoped>
.footer {
  height: 50px;
  border-top: 1px solid #e9e9e9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
</style>
