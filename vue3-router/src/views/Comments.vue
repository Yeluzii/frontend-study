<template>
    <h3>评论</h3>
    <ul>
        <li v-for="comment in article.comments" :key="comment.id">
            {{ comment.content }}
        </li>
    </ul>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

const articleId = route.params.id;

const articles = [
    {
        id: 1,
        title: "如何学习 Vue3",
        content: "如何学习 Vue3如何学习 Vue3",
        comments: [
            {
                id: 1,
                content: "Vue3 超赞",
            },
            {
                id: 2,
                content: "好评",
            },
            {
                id: 3,
                content: "还行",
            },
        ]
    },
    {
        id: 2,
        title: "理解 Vue Router",
        content: "理解 Vue Router 理解 Vue Router",
        comments: [
            {
                id: 1,
                content: "路由学的不错",
            },
            {
                id: 2,
                content: "还可以",
            },
            {
                id: 3,
                content: "还行",
            },
        ]
    },
];


const article = articles.find((a) => a.id === Number(articleId));

</script>

<style scoped></style>