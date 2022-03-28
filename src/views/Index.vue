<script setup>
import instance from '../utils/axios';

    function getData(){
        instance.get('/login').then(res => console.log(res))
    }
</script>
<template>
    <div>
        <button @click="getData">获取数据</button>
    </div>
</template>