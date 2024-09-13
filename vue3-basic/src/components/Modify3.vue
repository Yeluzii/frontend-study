<template>
    <div>
        <input v-model.trim="username" placeholder="请输入用户名" />
        <p>您的用户名是：{{ username }}</p>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

// 定义年龄状态
const username = ref<string>('') // 初始值为空字符串
</script>

<style scoped>

</style>