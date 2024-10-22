<template>
    <div>
        <h1>记账应用</h1>
        <form @submit.prevent="addTransaction">
            <div>
                <label for="type">类型:</label>
                <select v-model="newTransaction.type" id="type" required>
                    <option value="income">收入</option>
                    <option value="expense">支出</option>
                </select>
            </div>
            <div>
                <label for="amount">金额:</label>
                <input v-model.number="newTransaction.amount" type="number" id="amount" required />
            </div>
            <div>
                <label for="description">描述:</label>
                <input v-model="newTransaction.description" type="text" id="description" required />
            </div>
            <button type="submit">添加记录</button>
        </form>

        <h2>交易记录</h2>
        <ul>
            <li v-for="(transaction, index) in transactions" :key="transaction.id">
                {{ transaction.type }}: {{ transaction.amount }} - {{ transaction.description }}
                <button @click="deleteTransaction(transaction.id)">删除</button>
            </li>
        </ul>

        <h2>统计</h2>
        <p>总收入: {{ totalIncome }}</p>
        <p>总支出: {{ totalExpense }}</p>
        <p>当前余额: {{ balance }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAccountStore } from '../stores/useAccount2'

const accountStore = useAccountStore();
const transactions = accountStore.transactions;
const totalIncome = accountStore.totalIncome;
const totalExpense = accountStore.totalExpense;
const balance = accountStore.balance;

interface Transaction {
    type: 'income' | 'expense';
    amount: number;
    description: string;
}

const newTransaction = ref<Transaction>({
    type: "income",
    amount: 0,
    description: '',
});

const addTransaction = () => {
    accountStore.addTransaction(newTransaction.value);
    newTransaction.value = {
        type: "income",
        amount: 0,
        description: '',
    };
};

const deleteTransaction = (id: number) => {
    accountStore.deleteTransaction(id);
};
</script>