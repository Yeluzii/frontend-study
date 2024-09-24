<template>
    <div class="form-container">
        <form @submit.prevent="submitForm" class="form">
            <div class="form-group">
                <label for="email">邮箱：</label>
                <input id="email" type="email" placeholder="请输入邮箱" v-model="form.to" />
            </div>
            <div class="form-group">
                <label for="subject">主题：</label>
                <input id="subject" type="text" placeholder="请输入主题" v-model="form.subject" />
            </div>
            <div class="form-group">
                <label for="content">内容：</label>
                <textarea id="content" placeholder="请输入内容" v-model="form.body"></textarea>
            </div>
            <button type="submit" class="submit-button">提交</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const form = reactive({
    to: "2317413623@qq.com",
    subject: "Hello",
    body: "Hello!!!!!!!"
}
)

// 定义 emit 事件
const emit = defineEmits<{ "submit-email": [any] }>()

// 阻止表单默认提交，自定义表单提交函数
const submitForm = () => {
    emit("submit-email", form)
}
</script>

<style scoped>
.form-container {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #333;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

.form-group textarea {
    height: 150px;
}

.submit-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

.submit-button:hover {
    background-color: #0056b3;
}
</style>