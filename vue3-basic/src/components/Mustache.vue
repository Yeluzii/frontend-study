<!-- 插值语法 -->
<template>
    <div>
        <h2>
            {{ userName }}
        </h2>
        <p>2 + 3 的结果是：{{ 2 + 3 }}</p>
        <p>全名：{{ firstName + lastName }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const userName = ref<string>('张三')
console.log(userName.value);
const firstName = ref<string>('张')
const lastName = ref<string>('三')
</script>

<style scoped></style>