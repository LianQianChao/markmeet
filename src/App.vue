<script setup></script>
<template>
  <div class="flex-column-container">
    <router-view class="header" name="HeaderView"></router-view>
    <div class="flex-row-container">
      <router-view class="aside" name="AsideView"></router-view>
      <router-view class="main"></router-view>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
}
.flex-column-container{
  display: flex;
  flex-direction: column;
}
.flex-row-container{
  display: flex;
  flex-flow: row nowrap;
}
.header{
  min-height: 60px;
}
.aside{
  min-width: 200px;
  height: calc(100vh - 60px);
}
.main{
  flex-grow: 1;
}
</style>
