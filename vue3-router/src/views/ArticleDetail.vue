<template>
    <div>
        <h2>{{ article.title }}</h2>
        <p>{{ article.content }}</p>
        <router-link :to="`/articles/${article.id}/comments`">查看评论</router-link>
        <router-view></router-view>
        <!-- <div style="height: 1500px;">
            <p>更多文章内容，让页面足够长。</p>
        </div> -->
    </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
// 接收到路由中的 id 参数
const articleId = route.params.id;

const articles = [
    {
        id: 1,
        title: "如何学习 Vue3",
        content: "如何学习 Vue3如何学习 Vue3",
    },
    {
        id: 2,
        title: "理解 Vue Router",
        content: "理解 Vue Router 理解 Vue Router",
    },
];

// 查找 id 为articleId 的文章
const article = articles.find(a => a.id === Number(articleId));

</script>

<style scoped></style>