<template>
    <div>
        <CustomInput v-model="inputText"  />
        <p>输入的文本是：{{ inputText }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CustomInput from './CustomInput.vue';

// 定义输入文本的状态
const inputText = ref<string>('')
</script>

<style scoped>

</style>