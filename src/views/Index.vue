<script setup>
import instance from '../utils/axios';

    function getData(){
        instance.get('/login').then(res => console.log(res))
    }
</script>
<template>
    <div>
        <el-button  @click="getData" type="primary">获取数据</el-button>
    </div>
</template>