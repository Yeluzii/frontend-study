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
                        <el-avatar src="https://t.tutu.to/img/qnbJB" class="avatar">
                        </el-avatar>
                    </el-menu>
                </el-col>
            </el-row>
        </el-header>

        <el-main class="main">

            <el-carousel :interval="4000" type="card" height="400px" class="carousel">
                <el-carousel-item v-for="(slide, index) in slides" :key="index">
                    <img :src="slide" alt="Slide" class="carousel-img" />
                </el-carousel-item>
            </el-carousel>

            <el-row :gutter="20" class="features">
                <el-col :span="8" v-for="(feature, index) in features" :key="index" class="feature">
                    <el-card class="feature-card">
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
    },
    {
        icon: 'https://t.tutu.to/img/qnwzG',
        title: '特色服务4',
        description: '第四个特色服务描述。'
    },
    {
        icon: 'https://t.tutu.to/img/qnbJB',
        title: '特色服务5',
        description: '第五个特色服务描述。'
    },
    {
        icon: 'https://t.tutu.to/img/qnj0n',
        title: '特色服务6',
        description: '第六个特色服务描述。'
    }
]);
</script>

<style scoped>
.avatar {
    margin-top: 5px;

    &:hover {
        transform: scale(1.1);
    }
}

.carousel {
    border-radius: 10px;
    box-shadow: 15px 15px 20px #333;
}

.carousel-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.home-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.logo {
    font-size: 24px;
    margin: 0;
}

.header {
    background-color: #333;
    color: white;

}

.nav {
    width: auto;
    max-width: 500px;
    margin-left: auto;

    .nav-menu {
        background-color: #ffc400;
        margin: 0;
        padding: 0;
        box-shadow: 5px 0px 5px #ffc400;
    }
}

.main {
    flex: 1;
    padding: 20px;
}

.features {
    margin-top: 20px;
}

.feature {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5px;

    .feature-card:hover {
        box-shadow: 5px 5px 20px #333;
    }

}

.feature-card:hover .feature-icon {
    transform: scale(1.3);
}

.feature-icon {
    width: 100px;
    height: 100px;
    object-fit: contain;
    border-radius: 20px;
}

.footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px 0;
}
</style>