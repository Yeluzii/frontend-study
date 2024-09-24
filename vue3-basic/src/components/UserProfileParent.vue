<template>
  <div>
    <UserProfile :user="myUser" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import UserProfile from './UserProfile.vue';
const myUser = ref({
  name: '张三',
  age: 20,
  email: "zhangsan@qq.com"
})
</script>

<style scoped>
</style>
