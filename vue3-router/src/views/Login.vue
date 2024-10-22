<template>
    <div>
        <h3>用户登录</h3>
        <button @click="handleLogin">登录</button>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
const token = ref<boolean>(false);
const router = useRouter();
const handleLogin = () => {
    localStorage.setItem("token", true);
    router.push("/user/profile");
};

</script>

<style scoped></style>