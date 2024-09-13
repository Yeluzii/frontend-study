<template>
    <button @click="notifyParent">通知父组件</button>
</template>

<script setup lang="ts">
import {defineEmits} from 'vue'

// 定义 emit 事件
const emit = defineEmits(['notify'])

// 通知父组件的函数
const notifyParent = (): void => {
    emit('notify', '子组件已点击按钮')
}
</script>

<style scoped>

</style>