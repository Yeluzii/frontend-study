<template>
    <div>
        <button @click="openModal">打开模态框</button>
        <Modal ref="modal" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Modal from './Modal.vue';

const modal = ref(null);

const openModal = () => {
    modal.value?.openModal();
};
</script>