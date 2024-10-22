<template>
    <div>
        <input type="text" v-model="phoneNumber" placeholder="请输入手机号" />
        <p>{{ error }}</p>
        <button @click="sendMessage(phoneNumber)">发送</button>
        <p v-if="sending">发送中...</p>
        <p v-if="sended">已发送至{{ phoneNumber }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useMessageSender } from "../composables/useMessageSender";

const phoneNumber = ref<string>("")

const { sending, sended, error, sendMessage } = useMessageSender();
</script>

<style scoped></style>