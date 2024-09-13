import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);
// 使用 Element Plus 插件
app.use(ElementPlus);

// 需要使用 Vue.js 3 提供的 createApp() 方法创建一个 Vue.js 实例，并挂载在应用的根元素上
// 挂载 Vue 应用
app.mount('#app')
