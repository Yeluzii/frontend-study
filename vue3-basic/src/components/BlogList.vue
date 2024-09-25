<template>
    <div class="blog-page">
        <el-header class="header">
            <el-menu mode="horizontal" class="menu">
                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="2">发现</el-menu-item>
                <el-menu-item index="3">话题</el-menu-item>
                <div class="header-right">
                    <div class="search">
                        <el-input class="search-input"></el-input>
                        <el-button class="search-btn" type="primary">搜索</el-button>
                    </div>
                    <el-avatar :size="40" class="avatar"
                        src="https://yeluzi08-bucket.oss-cn-nanjing.aliyuncs.com/b40a5ed9-9726-46f8-a74d-89e8aba48d68_da2d9eae49872968ecae3f715ca2e52.jpg"></el-avatar>
                </div>
            </el-menu>
        </el-header>
        <el-main class="main">
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-card class="side-card">
                        <template #header>
                            <div class="clearfix">
                                <span>我的</span>
                            </div>
                        </template>
                        <ul>
                            <li v-for="mine in mines" :key="mine" class="hot-topic">
                                <el-link :underline="false">{{ mine }}</el-link>
                            </li>
                        </ul>
                    </el-card>
                </el-col>
                <el-col :span="14">
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
                <el-col :span="4">
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
import { ElButton, ElCard, ElCol, ElFooter, ElHeader, ElLink, ElMain, ElMenu, ElMenuItem, ElPagination, ElRow, ElTag } from 'element-plus';
import { computed, reactive, ref } from 'vue';

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
    },
    {
        id: 3,
        title: 'Composition API在Vue 3中的应用',
        summary: '本文讲解了如何在Vue 3中使用Composition API来组织逻辑，提高组件的可维护性和复用性。',
        tags: ['Vue', 'Composition API', '开发技巧'],
        author: '王五',
        date: '2023-09-05'
    },
    {
        id: 4,
        title: '前端性能优化策略',
        summary: '本文分享了一系列前端性能优化的方法与实践，涵盖资源加载、渲染效率等方面。',
        tags: ['前端', '性能优化', 'Web性能'],
        author: '赵六',
        date: '2023-08-30'
    },
    {
        id: 5,
        title: 'TypeScript与Vue结合的最佳实践',
        summary: '本文讨论了如何将TypeScript与Vue框架结合使用，以提升代码质量和开发体验。',
        tags: ['TypeScript', 'Vue', '静态类型检查'],
        author: '钱七',
        date: '2023-09-02'
    },
    {
        id: 6,
        title: '前端自动化测试入门指南',
        summary: '本文为初学者提供了前端自动化测试的基础知识，包括工具选择和测试策略制定。',
        tags: ['前端', '自动化测试', '测试驱动开发'],
        author: '周八',
        date: '2023-08-28'
    }
    // 更多文章...
]);

const pageSize = ref(3);
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

const mines = reactive<string[]>([
    '系统消息',
    '我的收藏',
    '私信',
    '活动',
    '我的文章'
]);

const handleCurrentChange = (val: number) => {
    currentPage.value = val;
};

const goToArticle = (article: Article) => {
    console.log(`跳转到文章 ${article.title}`);
};
</script>

<style scoped>
.header-right {
    display: flex;
}

.search {
    display: flex;
    width: auto;
    max-width: 400px;
    flex: 2;
}

.avatar {
    margin-top: 8px;
    flex: 1;
}

.avatar:hover {
    transform: scale(1.1);
}

.search-input {
    margin: 10px;
    width: 200px;
    padding: 0 5px;
    flex: 9;

    /* &:hover {
        border-color: 1px #197bfc;
    } */
}

.search-btn {
    margin: 10px;
    flex: 1;
}

.blog-page {
    padding: 20px;
}

.header {
    background-color: #fff;
    color: #333;
    line-height: 60px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.article-card {
    margin-bottom: 20px;
}

.article-card:hover {
    box-shadow: inset 0 0 8px #19bcfc;
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

.side-card:hover {
    box-shadow: inset 0 0 8px #19bcfc;
}

.hot-topic {
    margin-bottom: 10px;
}

.main {
    margin-top: 20px;
    position: relative;
}

.footer {
    margin-top: 20px;
    text-align: center;
    position: absolute;
    left: 25%;
}
</style>