<template>
    <div>
        <input type="radio" v-model="selectedOption" value="A"/> 选项A
        <input type="radio" v-model="selectedOption" value="B"/> 选项B
        <p>您选择的选项：{{ selectedOption }}</p>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

// 定义单选框的选项状态
const selectedOption = ref<string>('A') // 初始值为A
</script>

<style scoped>

</style>