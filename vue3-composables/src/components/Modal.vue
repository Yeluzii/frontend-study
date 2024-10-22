<template>
    <div v-if="isOpen" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
            <h2>模态框标题</h2>
            <p>这是一个模态框内容。</p>
            <button @click="closeModal">关闭</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

const isOpen = ref(false);

const openModal = () => {
    isOpen.value = true;
};

const closeModal = () => {
    isOpen.value = false;
};

// 获取模态框内容的引用
const modalContent = ref(null);

// 当点击模态框外部时关闭模态框
onClickOutside(modalContent, closeModal);

defineExpose({ openModal });
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>