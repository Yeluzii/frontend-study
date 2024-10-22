<template>
  <nav>
    <router-link to="/counter">计数器</router-link>
    <router-link to="/todo">待办清单</router-link>
    <router-link to="/account">记账应用</router-link>
  </nav>
  <router-view></router-view>
</template>

<script setup lang="ts">

</script>

<style scoped>
a {
  margin: 10px;
  text-decoration: none;
  background-color: lightblue;
  color: white;
  padding: 6px 12px;
  border-radius: 5px;
}

.router-link-active {
  background-color: blueviolet;
}
</style>