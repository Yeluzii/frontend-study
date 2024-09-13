<template>
    <input type="date" :value="moduleValue" @input="$emit('update:moduleValue', $event.target.value)" />
    <input type="time" :value="timeValue" @input="$emit('update:timeValue', $event.target.value)" />
</template>

<script setup lang="ts">
defineProps({
    moduleValue: String,
    timeValue: String,
})
</script>

<style scoped>

</style>