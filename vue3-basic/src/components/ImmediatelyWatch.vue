<template>
    <div>
        <input v-model="userName" placeholder="输入用户名" />
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

// 用户名状态
const userName = ref<string>('张三')

// 立即执行监听器
watch(userName, (newName) => {
    console.log(`用户名为：${newName}`)
}, { immediate: true })
</script>

<style scoped></style>