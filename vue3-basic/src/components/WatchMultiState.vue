<template>
    <div>
        <input v-model="firstName" placeholder="输入名" />
        <input v-model="lastName" placeholder="输入姓" />
        <p>全名：{{ fullName }}</p>
    </div>
</template>

<script setup lang="ts">
import {ref,watch,computed} from 'vue'

// 名字和姓氏
const firstName = ref<string>('张')
const lastName = ref<string>('三')

// 计算全名
const fullName = computed(() => `${firstName.value} ${lastName.value}`)

// 监听名和姓的变化
watch([firstName, lastName], ([newFirstName, newLastName]) => {
    console.log(`全名变为：${newFirstName} ${newLastName}`)
})
</script>

<style scoped>

</style>