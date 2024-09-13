<template>
    <div>
        <p>当前计数：{{ count }}</p>
        <button @click="increment">增加计数</button>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

// 用ref 定义基础类型的响应式状态
const count = ref<number>(0)

// 定义增加计数的方法
const increment = ():void => {
    count.value++
}
</script>

<style scoped>

</style>