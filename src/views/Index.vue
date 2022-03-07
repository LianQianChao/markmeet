<template>
    Index
</template>
<script>
import { defineComponent } from 'vue'

const ENV = import.meta.env;

export default defineComponent({
    name: 'Index',
    setup() {
        console.log('ENV',ENV);
    },
})
</script>
