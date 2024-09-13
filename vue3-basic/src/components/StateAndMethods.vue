<template>
    <div>
        <p>当前用户：{{ user.name }},年龄：{{ user.age }}</p>
        <button @click="changeName('李四')">修改用户名</button>
        <button @click="resetUser">重置用户信息</button>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

// 定义用户状态
const user = reactive<{ name: string; age: number }>({
    name: '张三',
    age: 30
})

// 定义方法修改用户名
const changeName = (newName: string): void => {
    user.name = newName
}

// 定义方法重置用户信息
const resetUser = (): void => {
    user.name = '张三'
    user.age = 30
}
</script>

<style scoped></style>