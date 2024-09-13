<template>
    <div>
        <input ref="inputElement" type="text" placeholder="聚焦在此" />
        <button @click="focusInput">点击聚焦输入框</button>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

// 获取 DOM 元素的引用
const inputElement = ref<HTMLInputElement | null>(null)

// 操作 DOM 元素
const focusInput = () => {
    if(inputElement.value){
            inputElement.value.focus() // 让输入框获得焦点
    }
}
</script>

<style scoped>

</style>