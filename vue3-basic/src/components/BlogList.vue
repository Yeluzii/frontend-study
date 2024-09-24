<template>
    <div class="blog-page">
        <el-header class="header">
            <el-menu mode="horizontal">
                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="2">发现</el-menu-item>
                <el-menu-item index="3">话题</el-menu-item>
                <el-menu-item index="4" style="float: right">登录</el-menu-item>
                <el-avatar :size="40"
                    src="https://yeluzi08-bucket.oss-cn-nanjing.aliyuncs.com/b40a5ed9-9726-46f8-a74d-89e8aba48d68_da2d9eae49872968ecae3f715ca2e52.jpg"
                    style="margin-top: 5px;"></el-avatar>
            </el-menu>
        </el-header>
        <el-main class="main">
            <el-row :gutter="20">
                <el-col :span="18">
                    <el-card v-for="article in pagedArticles" :key="article.id" class="article-card">
                        <template #header>
                            <div class="clearfix">
                                <span>{{ article.title }}</span>
                                <el-button style="float: right; padding: 3px 0" type="text">编辑</el-button>
                            </div>
                        </template>
                        <p>{{ article.summary }}</p>
                        <el-tag v-for="tag in article.tags" :key="tag" size="small" effect="plain">{{ tag }}</el-tag>
                        <div class="article-footer">
                            <span>{{ article.author }} 发布于 {{ article.date }}</span>
                            <el-button type="text" @click="goToArticle(article)">阅读更多</el-button>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card class="side-card">
                        <template #header>
                            <div class="clearfix">
                                <span>热门话题</span>
                            </div>
                        </template>
                        <ul>
                            <li v-for="topic in hotTopics" :key="topic" class="hot-topic">
                                <el-link :underline="false">{{ topic }}</el-link>
                            </li>
                        </ul>
                    </el-card>
                </el-col>
            </el-row>
        </el-main>
        <el-footer class="footer">
            <el-pagination background layout="prev, pager, next" :total="articles.length" :page-size="pageSize"
                :current-page="currentPage" @current-change="handleCurrentChange"></el-pagination>
        </el-footer>
    </div>
</template>

<script setup lang="ts">
import { reactive, computed, ref } from 'vue';
import { ElHeader, ElMenu, ElMenuItem, ElMain, ElRow, ElCol, ElCard, ElButton, ElTag, ElLink, ElFooter, ElPagination } from 'element-plus';

interface Article {
    id: number;
    title: string;
    summary: string;
    tags: string[];
    author: string;
    date: string;
}

const articles = reactive<Article[]>([
    {
        id: 1,
        title: 'Vue 3的新特性介绍',
        summary: '本文详细介绍了Vue 3的新特性和改进之处，帮助开发者更好地理解和使用Vue 3。',
        tags: ['Vue', '前端', '框架'],
        author: '张三',
        date: '2023-09-01'
    },
    {
        id: 2,
        title: 'React Hooks的深入理解',
        summary: '本文探讨了React Hooks的原理和最佳实践，帮助开发者更好地使用React Hooks进行状态管理。',
        tags: ['React', 'Hooks', '状态管理'],
        author: '李四',
        date: '2023-08-25'
    }
    // 更多文章...
]);

const pageSize = ref(5);
const currentPage = ref(1);

const pagedArticles = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value;
    const end = start + pageSize.value;
    return articles.slice(start, end);
});

const hotTopics = reactive<string[]>([
    '前端框架',
    '后端开发',
    '算法与数据结构',
    '云计算',
    '人工智能'
]);

const handleCurrentChange = (val: number) => {
    currentPage.value = val;
};

const goToArticle = (article: Article) => {
    console.log(`跳转到文章 ${article.title}`);
};
</script>

<style scoped>
.blog-page {
    padding: 20px;
}

.header {
    background-color: #fff;
    color: #333;
    line-height: 60px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.main {
    margin-top: 20px;
}

.article-card {
    margin-bottom: 20px;
}

.article-content {
    margin: 10px 0;
}

.article-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
}

.side-card {
    height: 100%;
}

.hot-topic {
    margin-bottom: 10px;
}

.footer {
    margin-top: 20px;
    text-align: center;
}
</style>