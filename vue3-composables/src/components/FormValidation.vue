<template>
    <div>
        <label>手机号:</label>
        <input type="text" v-model="phone" />
    </div>
    <div>
        <label>邮箱:</label>
        <input type="text" v-model="email" />
    </div>
    <div>
        <label>密码:</label>
        <input type="password" v-model="password" />
        <p v-if="error">{{ errors }}</p>
    </div>
    <button @click="validateForm">提交</button>
</template>

<script setup lang="ts">
import { useFormValidation } from '../composables/useFormValidation';

const { phone, email, password, error, errors, validateForm } = useFormValidation();

</script>

<style scoped></style>