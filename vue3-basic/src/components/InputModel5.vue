<template>
    <div>
        <label><input type="checkbox" v-model="selectedFruits" value="苹果" />
        苹果</label>
        <label><input type="checkbox" v-model="selectedFruits" value="香蕉" />
        香蕉</label>
        <label><input type="checkbox" v-model="selectedFruits" value="橘子" />
        橘子</label>
        <p>您所选的水果是：{{ selectedFruits.join(',') }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 选中的水果会以数组的形式存储
const selectedFruits = ref<string[]>([]) // 初始值为空数组
</script>

<style scoped>

</style>