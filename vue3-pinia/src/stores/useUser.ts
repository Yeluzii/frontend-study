import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

// 定义用户信息接口
interface User {
  id: number;
  phone: string;
  avatar: string;
  nickname: string;
  gender: string;
  bonus: number;
}

// 定义存储库接口
interface UserStore {
  user: User | null;
  fetchUser: () => Promise<void>;
  clearUser: () => void;
}

export const useUserStore = defineStore("user", (): UserStore => {
  const user = ref<User | null>(null);

  // 从本地存储中加载用户信息
  const loadUserFromLocalStorage = (): void => {
    const userData = localStorage.getItem("user");
    if (userData) {
      user.value = JSON.parse(userData);
    }
  };

  // 从后端获取用户信息
  const fetchUser = async (): Promise<void> => {
    try {
      const respponse = await axios.get("http://localhost:8080/user/info", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      console.log(respponse.data.data);
      // 将获取到的用户信息赋值给 user
      user.value = respponse.data.data;
      // 保存到本地存储
      localStorage.setItem("user", JSON.stringify(user.value));
    } catch (error) {
      console.error("获取用户信息失败", error);
    }
  };

  const clearUser = (): void => {
    user.value = null;
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  // 初始化时从本地存储加载用户信息
  loadUserFromLocalStorage();

  return {
    user,
    fetchUser,
    clearUser,
  };
});
