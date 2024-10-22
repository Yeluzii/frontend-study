<template>
    <nav>
        <router-link to="/home">首页</router-link>
        <router-link to="/articles">文章</router-link>
        <router-link to="/user">我的</router-link>
    </nav>
    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>
</template>

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

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>