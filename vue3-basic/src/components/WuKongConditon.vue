<template>
    <div>
        <h2>技能列表</h2>
        <div v-for="skill in skills" :key="skill.id">
            {{ skill.id }} - {{ skill.name }} - 
            <span v-if="skill.unlocked" style="color: green;">已解锁</span>
            <span v-else style="color: red;">未解锁</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Skill {
    id: number
    name: string
    unlocked: boolean
}

const skills = ref<Skill[]>([
    { id: 1, name: '七十二变', unlocked: true },
    { id: 2, name: '火眼金睛', unlocked: false },
    { id: 3, name: '筋斗云', unlocked: true },
])

</script>

<style scoped></style>