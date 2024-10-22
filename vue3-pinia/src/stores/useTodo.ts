import { defineStore } from "pinia";
import { ref } from "vue";

// 定义待办清单的数据类型

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const useTodoStore = defineStore(
  "todo",
  () => {
    // 定义状态数据 todos
    const todos = ref<Todo[]>([]);

    // 添加待办事项
    const addTodo = (todoText: string) => {
      // 定义一个等待添加的待办事项
      const newTodo: Todo = {
        id: Date.now(),
        title: todoText,
        completed: false,
      };
      todos.value.push(newTodo);
    };

    // 删除待办事项
    const removeTodo = (index: number) => {
      todos.value.splice(index, 1);
    };

    // 切换待办事项的状态
    const toggleTodo = (index: number) => {
      if (todos.value[index]) {
        todos.value[index].completed = !todos.value[index].completed;
      }
    };

    // 返回 Store 中定义的所有数据和函数
    return {
      todos,
      addTodo,
      removeTodo,
      toggleTodo,
    };
  },
  {
    persist: {
      key: "my-todo-store",
      storage: localStorage,
    },
  }
);
