import {createApp} from 'vue';
import './tailwind.css';
import App from './App.vue';
import {routes} from './routes.js';
import {createRouter, createWebHistory} from 'vue-router';
import {createI18n} from 'vue-i18n';
import CN from './lang/CN.json';
import EN from './lang/EN.json';
import 'flowbite';
import store from './store';

// import * as Web3 from '../node_modules/web3/dist/web3.min.js';


const app = createApp(App);
const i18n = createI18n(
    {
      locale: 'CN',
      messages: {
        'CN': CN,
        'EN': EN,
      },
    },
);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(i18n);
app.use(router);
app.use(store);
app.mount('#app');
