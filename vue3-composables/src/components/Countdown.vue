<template>
    <div>
        <p>倒计时：{{ seconds }}</p>
        <button @click="startCountdown">开始</button>
        <button @click="stopCountdown">暂停</button>
        <button @click="resetCountdown">重置</button>
    </div>
</template>

<script setup lang="ts">
import { useCountdown } from '../composables/useCountdown'

const { seconds, startCountdown, stopCountdown, resetCountdown } = useCountdown(60);

</script>

<style scoped></style>