import { defineStore } from "pinia";

// 定义 CounterState 接口
interface CounterState {
  // 存储计数器的值
  count: number;
}

// 定义一个 Store
export const useCounterStore = defineStore("counter", {
  // 定义存储的数据
  state: (): CounterState => ({
    count: 0,
  }),
  // Getters 定义 Store 的计算属性
  getters: {
    // 计算当前计数器的值
    doubleCount: (state: CounterState): number => state.count * 2,
  },
  // 定义修改 State 的方法
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
});
