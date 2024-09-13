<template>
    <div ref="box" class="box">
        方块
    </div>
</template>

<script setup lang="ts">
import {ref,onMounted} from 'vue'

// 获取 DOM 元素引用
const box = ref<HTMLDivElement | null>(null)

// 在组件挂载后操作 DOM
onMounted(() => {
    if(box.value){
        box.value.style.backgroundColor = 'yellow' // 修改方块的背景色
    }
})
</script>

<style scoped>
.box{
    width: 100px;
    height: 100px;
    background-color: red;
}
</style>