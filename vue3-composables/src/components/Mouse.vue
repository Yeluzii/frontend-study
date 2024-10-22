<template>
    <div>
        <p>鼠标坐标：{{ x }},{{ y }}</p>
    </div>
</template>

<script setup lang="ts">
import { useMouse } from '@vueuse/core'

const { x, y } = useMouse()
</script>

<style scoped></style>