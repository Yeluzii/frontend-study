<template>
    <div>
        <h3>用户设置</h3>
        <button @click="logout">退出登录</button>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const logout = () => {
    localStorage.removeItem("token");
    // 跳转到登录页面
    router.push('/login');
}
</script>

<style scoped></style>