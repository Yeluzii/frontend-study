<template>
    <div>
        <h2>复制文本到剪贴板示例</h2>
        <textarea v-model="text" placeholder="输入要复制的文本"></textarea>
        <button @click="copyText">复制文本</button>
        <p v-if="copied">已复制到剪贴板!</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useClipboard } from '@vueuse/core';

const text = ref('');
const { copy, copied } = useClipboard({ source: text });

const copyText = async () => {
    await copy();
};
</script>

<style scoped>
textarea {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    height: 100px;
}

button {
    padding: 10px;
    border: none;
    background: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
}

p {
    font-size: 18px;
    color: green;
    font-weight: bold;
}
</style>