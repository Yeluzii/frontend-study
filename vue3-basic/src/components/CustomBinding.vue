<template>
    <div>
        <CustomButton :custom-attr="customValue">自定义按钮</CustomButton>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CustomButton from './CustomButton.vue'

// 自定义属性值
const customValue = ref<string>('我是自定义属性')
</script>

<style scoped></style>