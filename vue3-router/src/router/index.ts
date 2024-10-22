import { createRouter, createWebHistory } from "vue-router";
import Layout from "../views/Layout.vue";
// 定义路由数组
const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("../views/Home.vue"),
      },
      {
        path: "/articles",
        name: "ArticleList",
        component: () => import("../views/ArticleList.vue"),
      }, // 动态路由配置
      {
        path: "/articles/:id",
        name: "ArticleDetail",
        component: () => import("../views/ArticleDetail.vue"),
        children: [
          {
            path: "comments",
            name: "Comments",
            component: () => import("../views/Comments.vue"),
          },
        ],
      },
      {
        path: "/user",
        name: "UserDashboard",
        component: () => import("../views/UserDashboard.vue"),
        redirect: "/user/profile",
        children: [
          {
            path: "profile",
            name: "UserProfile",
            component: () => import("../views/UserProfile.vue"),
          },
          {
            path: "setting",
            name: "UserSetting",
            component: () => import("../views/UserSetting.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
];

// 定义路由对象
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  if (to.path.startsWith("/user") && !localStorage.getItem("token")) {
    alert("请先登录");
    next("/login");
  } else {
    next();
  }
});
// 导出路由对象
export default router;
