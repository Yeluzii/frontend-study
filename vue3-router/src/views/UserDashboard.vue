<template>
    <div>
        <nav>
            <router-link to="/user/profile">用户信息</router-link>
            <router-link to="/user/setting">用户设置</router-link>
        </nav>
        <router-view />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
nav {
    margin-top: 20px;
}

a {
    margin: 10px;
    text-decoration: none;
    background-color: lightblue;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
}

.router-link-active {
    background-color: #ffc400;
    color: white;
    font-weight: bold;
}
</style>