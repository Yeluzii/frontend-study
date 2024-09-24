<template>
    <div>
        <EmailForm @submit-email="handleSubmit" />
        <p v-if="submitData">邮件已发送：{{ submitData }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EmailForm from './EmailForm.vue';
import axios from "axios"


const submitData = ref(null)

const handleSubmit = (data: any) => {
    submitData.value = data;
    axios.post('http://localhost:8080/mail', submitData.value).then((res) => {
        console.log("邮件已发送");
    })
}
</script>

<style scoped></style>