vue
深色版本
<template>
  <div>
    <h1>装备管理系统</h1>
    <div class="add">
      <input type="text" v-model="newEquipment.name" placeholder="输入装备名称">
      <button @click="addEquipment">添加装备</button>
    </div>
    <div v-for="equipment in equipments" :key="equipment.id" class="equipment">
      {{ equipment.name }}
      <button @click="removeEquipment(equipment.id)">删除</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
interface Equipment {
  id: number;
  name: string;
}

// 初始化装备数组
const equipments = ref<Equipment[]>([
  { id: 1, name: '剑' },
  { id: 2, name: '盾牌' }
])

// 新增装备对象
const newEquipment = ref({ name: '' })

// 添加装备方法
function addEquipment() {
  if (newEquipment.value.name.trim()) {
    const newId = equipments.value.length + 1;
    const newEquip = { id: newId, name: newEquipment.value.name };
    equipments.value.push(newEquip);
    // 清空输入框
    newEquipment.value.name = '';
  }
}

// 删除装备方法
function removeEquipment(id: number) {
  equipments.value.splice(equipments.value.findIndex(e => e.id === id), 1);
}
</script>

<style scoped>
h1 {
  text-align: center;
}

.add {
  input{
    padding: 5px;
    margin-left: 30vw;
  }
  bottom{
    margin-left: 5px;
  }
}

.equipment {
  margin: 5px 40vw 5px 30vw;
  border: 1px solid rgb(84, 197, 235);
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgb(133, 133, 209);
  padding: 5px;
}
</style>