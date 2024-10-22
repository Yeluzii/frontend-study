<template>
    <div :class="theme">
        <button @click="toggleTheme">切换到{{ theme === 'light' ? '夜间' : '白天' }}模式</button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque rerum, rem ut illo ipsum magni eaque impedit.
            Sint, voluptatem praesentium quae veniam, tempore nisi reprehenderit numquam quibusdam libero molestiae
            impedit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque rerum, rem ut illo ipsum magni eaque
            impedit.
            Sint, voluptatem praesentium quae veniam, tempore nisi reprehenderit numquam quibusdam libero molestiae
            impedit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque rerum, rem ut illo ipsum magni eaque
            impedit.
            Sint, voluptatem praesentium quae veniam, tempore nisi reprehenderit numquam quibusdam libero molestiae
            impedit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque rerum, rem ut illo ipsum magni eaque
            impedit.
            Sint, voluptatem praesentium quae veniam, tempore nisi reprehenderit numquam quibusdam libero molestiae
            impedit.
        </p>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStorage } from '@vueuse/core'

// 使用 useStorage 来持久化存储主题设置
const storedTheme = useStorage('app-theme', 'light')

// 计算属性来决定当前的主题
const theme = computed({
    get: () => storedTheme.value,
    set: (value) => {
        storedTheme.value = value
        document.documentElement.className = value
    }
})

// 切换主题的方法
function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<style scoped>
button {
    border-radius: 5px;
}

.light {
    background-color: white;
    color: black;

    button {
        background-color: #f0f0f0;
        color: #333;
        border: 1px solid #ccc;
    }
}

.dark {
    background-color: black;
    color: white;

    button {
        background-color: #333;
        color: #f0f0f0;
        border: 1px solid #666;
    }
}
</style>