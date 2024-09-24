<template>
    <div>
        <UserForm @submit-form="handleSubmit" />
        <p v-if="submitData">子组件提交的表单数据：{{ submitData }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UserForm from './UserForm.vue';

const submitData = ref(null)

const handleSubmit = (data: any) => {
    submitData.value = data;
}
</script>

<style scoped></style>