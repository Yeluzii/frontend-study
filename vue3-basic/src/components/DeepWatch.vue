<template>
    <div>
        <input v-model="user.name" placeholder="输入姓名" />
        <input v-model="user.age" type="number" placeholder="输入年龄" />
        <p>{{ user.name }},{{ user.age }} 岁</p>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

// 定义用户对象
const user = ref<{ name: string; age: number }>({
    name: '张三',
    age: 25,
})

// 深度监听用户对象
watch(user, (newUser) => {
    console.log(`用户信息更新为：${newUser.name}, ${newUser.age}`)
}, { deep: true })
</script>

<style scoped></style>