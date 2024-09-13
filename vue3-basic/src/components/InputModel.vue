<template>
    <div>
        <input v-model="name" placeholder="请输入姓名" />
        <p>您输入的姓名是：{{ name }}</p>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

// 定义双向绑定状态
const name = ref<string>('') // 初始值为空字符串
</script>

<style scoped>

</style>