<template>
    <div>
        <p v-if="userAge < 18">未成年用户</p>
        <p v-else-if="userAge >= 18 && userAge < 60">成年用户</p>
        <p v-else>老年用户</p>
        <button @click="increaseAge">增加年龄</button>
    </div>
</template>

<script setup lang="ts">

import {ref} from 'vue'

// 定义年龄状态
const userAge = ref<number>(16)

// 定义增加年龄的方法
const increaseAge = (): void => {
    userAge.value++
}
</script>

<style scoped>

</style>