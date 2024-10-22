// src/stores/account.ts
import { defineStore } from "pinia";
import { ref, computed } from "vue";

// 定义交易的数据类型
interface Transaction {
  id: number;
  type: "income" | "expense";
  amount: number;
  description: string;
}

export const useAccountStore = defineStore(
  "account",
  () => {
    // 定义状态数据 transactions
    const transactions = ref<Transaction[]>([]);

    // 计算总收入
    const totalIncome = computed(() => {
      return transactions.value
        .filter((t) => t.type === "income")
        .reduce((sum, t) => sum + t.amount, 0);
    });

    // 计算总支出
    const totalExpense = computed(() => {
      return transactions.value
        .filter((t) => t.type === "expense")
        .reduce((sum, t) => sum + t.amount, 0);
    });

    // 计算当前余额
    const balance = computed(() => totalIncome.value - totalExpense.value);

    // 添加交易记录
    const addTransaction = (transaction: Omit<Transaction, "id">) => {
      const newTransaction: Transaction = {
        id: Date.now(),
        ...transaction,
      };
      transactions.value.push(newTransaction);
    };

    // 删除交易记录
    const deleteTransaction = (id: number) => {
      transactions.value = transactions.value.filter((t) => t.id !== id);
    };

    // 返回 Store 中定义的所有数据和函数
    return {
      transactions,
      totalIncome,
      totalExpense,
      balance,
      addTransaction,
      deleteTransaction,
    };
  },
  {
    persist: {
      key: "my-account-store",
      storage: localStorage,
    },
  }
);
