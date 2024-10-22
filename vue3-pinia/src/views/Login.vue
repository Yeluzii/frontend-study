<template>
    <div class="login-container">
        <h2>登录</h2>
        <input v-model="phone" placeholder="请输入手机号" class="input-field" />
        <div class="button-container">
            <button @click="sendCode" :disabled="countdown > 0" class="send-code-button">
                {{ countdown > 0 ? `${countdown}秒后重新发送` : '发送验证码' }}
            </button>
        </div>
        <input v-model="code" placeholder="请输入验证码" class="input-field" />
        <button @click="login" class="login-button">登录</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useAuthStore } from "../stores/useAuth";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const phone = ref<string>("18168085379");
const code = ref<string>("");
const countdown = ref<number>(0);

const sendCode = async () => {
    await authStore.sendCode(phone.value);
    countdown.value = 60;
    const intervalId = setInterval(() => {
        if (countdown.value > 0) {
            countdown.value--;
        } else {
            clearInterval(intervalId);
        }
    }, 1000);
}

const login = async () => {
    await authStore.login(phone.value, code.value);
    router.push("/profile");
}
</script>

<style scoped>
.login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
}

.input-field {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.button-container {
    text-align: right;
    margin-bottom: 10px;
}

.send-code-button,
.login-button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    font-size: 16px;
}

.send-code-button:disabled,
.login-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}
</style>