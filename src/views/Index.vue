<template>
    <div>
        <el-button type="primary">主要按钮</el-button><br/>
    </div>
</template>
<script>
import { defineComponent } from 'vue'

const ENV = import.meta.env;

export default defineComponent({
    name: 'Index',
    setup() {
        // console.log('ENV',ENV);
    },
})
</script>
