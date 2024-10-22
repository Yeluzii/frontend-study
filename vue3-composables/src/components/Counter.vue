<template>
    <div>
        <p>当前计数的值：{{ count }}</p>
        <button @click="increament">增加</button>
        <button @click="decreament">减少</button>
        <button @click="reset">清空</button>
    </div>
</template>

<script setup lang="ts">
import { useCounter } from '../composables/useCounter';

const { count, increament, decreament, reset } = useCounter(10);
</script>

<style scoped></style>