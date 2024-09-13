<template>
    <div>
        <p>用户名：{{ user.name }}</p>
        <p>年龄：{{ user.age }}</p>
        <button @click="increaseAge(5)">增加年龄</button>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

// 使用 reactive 定义复杂对象的响应式状态
const user = reactive<{ name: string; age: number }>({
    name: '张三',
    age: 25,
})

// 定义增加年龄的方法
const increaseAge = (age: number): void => {
    user.age += age;
}
</script>

<style scoped></style>