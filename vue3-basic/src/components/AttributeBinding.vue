<!-- 属性绑定 -->
<template>
    <div>
        <!-- <button v-bind="isDisabled">点击</button> -->
        <button :disabled="isDisabled">点击</button>
        <img :src="url">
        <!-- 这边不用 url.value,打印的时候要加 .value -->
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const isDisabled = ref<boolean>(true)
const url = ref<string>('https://public-cdn-oss.mosoteach.cn/avatar/2023/F4/109f332833d59101146198fcdad9c704.jpg?v=1693560285&x-oss-process=style/s300x300')
</script>

<style scoped>

</style>