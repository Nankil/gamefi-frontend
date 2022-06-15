import { createApp } from 'vue';
import './tailwind.css';
import App from './App.vue';
import { routes } from './routes.js';
import { createRouter, createWebHistory } from 'vue-router';
import 'flowbite';
import store from './store';

//引入一些公共样式
import "@/assets/css/public.less";


const app = createApp(App);


const router = createRouter({
    history: createWebHistory(),
    routes,
});

//使用多种语言
import i18n from './i18n/index.js';
app.use(i18n);

app.use(router);
app.use(store);
app.mount('#app');


//全局方法
import { copyText } from "@/mixin"
//复制到剪切板
app.mixin(copyText)

import ProgressBar from "@/components/Account/ProgressBar.vue"
app.component('ProgressBar', ProgressBar)


//引入element-plus组件库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)


