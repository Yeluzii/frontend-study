<template>
  <div class="profile-page">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-avatar :size="100" :src="user.avatar"></el-avatar>
        <h2 style="margin-left: 20px;">{{ user.name }}</h2>
      </div>
      <div class="user-profile">
        <p><strong>简介：</strong>{{ user.bio }}</p>
        <p><strong>职业：</strong>{{ user.job }}</p>
        <p><strong>联系：</strong>{{ user.contact }}</p>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { ElCard, ElAvatar } from 'element-plus';

const user = reactive({
  avatar: 'https://yeluzi08-bucket.oss-cn-nanjing.aliyuncs.com/b40a5ed9-9726-46f8-a74d-89e8aba48d68_da2d9eae49872968ecae3f715ca2e52.jpg',
  name: 'Yeluzi',
  bio: '热爱编程，喜欢分享技术经验。',
  job: '软件工程师',
  contact: 'yeluzi@qq.com'
});
</script>

<style scoped>
.profile-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.box-card {
  width: 50%;
}

.user-profile p {
  margin: 10px 0;
}
</style>