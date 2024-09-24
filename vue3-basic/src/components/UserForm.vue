<template>
    <div>
        <form @submit.prevent="submitForm">
            <input type="text" placeholder="请输入用户名" v-model="form.username" />
            <input type="text" placeholder="请输入邮箱" v-model="form.email" />
            <input type="password" placeholder="请输入密码" v-model="form.password" />
            <button type="submit">注册</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
    username: 'admin',
    email: 'admin@qq.com',
    password: '123'
})

// 定义 emit 事件
const emit = defineEmits<{ "submit-form": [any] }>()

// 阻止表单默认提交，自定义表单提交函数
const submitForm = () => {
    emit("submit-form", form)
}
</script>

<style scoped></style>