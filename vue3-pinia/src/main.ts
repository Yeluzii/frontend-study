import { createApp } from "vue";
// import "./style.css";
import App from "./App.vue";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import router from "./router";

// 引入 pinia
import { createPinia } from "pinia";
// 实例化
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount("#app");
