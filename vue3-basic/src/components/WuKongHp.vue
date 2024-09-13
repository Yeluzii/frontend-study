<template>
    <div>
        <p>血量：{{ curentHp }}/{{ totalHp }}({{ hpPercentage }}%)</p>
        <div class="progress-bar"
            :style="{ width: `${hpPercentage}%`, backgroundColor: getBackgroundColor(hpPercentage) }"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const totalHp = ref<number>(100)
const hpPercentage = ref<number>(70)
const curentHp = computed(() => {
    return totalHp.value * hpPercentage.value / 100
})

const getBackgroundColor = (percentage: number): string => {
    if (percentage >= 50) {
        return 'green';
    } else if (percentage >= 25) {
        return 'yellow';
    } else {
        return 'red';
    }
};

</script>

<style scoped>
.progress-bar {
    height: 20px;
    background-color: green;
    /* 默认颜色 */
    transition: width 0.3s ease, background-color 0.3s ease;
}
</style>