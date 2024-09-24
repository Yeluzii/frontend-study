<template>
    <div class="home-page">
        <el-header class="header">
            <el-row justify="space-between" align="middle">
                <el-col :span="6">
                    <h1 class="logo">Yeluzi</h1>
                </el-col>
                <el-col :span="12" class="nav">
                    <el-menu mode="horizontal" router class="nav-menu">
                        <el-menu-item index="/">首页</el-menu-item>
                        <el-menu-item index="/about">关于我们</el-menu-item>
                        <el-menu-item index="/services">服务</el-menu-item>
                        <el-menu-item index="/contact">联系我们</el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </el-header>

        <el-main class="main">
            <el-carousel height="400px">
                <el-carousel-item v-for="(slide, index) in slides" :key="index">
                    <img :src="slide" alt="Slide" class="carousel-img" />
                </el-carousel-item>
            </el-carousel>

            <el-row :gutter="20" class="features">
                <el-col :span="8" v-for="(feature, index) in features" :key="index" class="feature">
                    <el-card shadow="hover">
                        <img :src="feature.icon" alt="Feature Icon" class="feature-icon" />
                        <h3>{{ feature.title }}</h3>
                        <p>{{ feature.description }}</p>
                    </el-card>
                </el-col>
            </el-row>
        </el-main>

        <el-footer class="footer">
            <p>&copy; 2024 Yeluzi. All rights reserved.</p>
        </el-footer>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const slides = ref([
    'https://t.tutu.to/img/qncAq',
    'https://t.tutu.to/img/qnQD6',
    'https://t.tutu.to/img/qni4r'
]);

const features = ref([
    {
        icon: 'https://t.tutu.to/img/qnwzG',
        title: '特色服务1',
        description: '第一个特色服务描述。'
    },
    {
        icon: 'https://t.tutu.to/img/qnbJB',
        title: '特色服务2',
        description: '第二个特色服务描述。'
    },
    {
        icon: 'https://t.tutu.to/img/qnj0n',
        title: '特色服务3',
        description: '第三个特色服务描述。'
    }
]);
</script>

<style scoped>
.home-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.header {
    background-color: #333;
    color: white;
    padding: 10px 20px;
}

.logo {
    font-size: 24px;
    margin: 0;
}

.nav {
    text-align: right;

    .nav-menu {
        background-color: aqua;
        border-radius: 3px;
        box-shadow: 3px 3px 3px;
    }
}

.main {
    flex: 1;
    padding: 20px;
}

.carousel-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.features {
    margin-top: 20px;
}

.feature {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.feature-icon {
    width: 100px;
    height: 100px;
    object-fit: contain;
}

.footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px 0;
}
</style>