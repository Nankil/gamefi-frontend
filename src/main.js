import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'

const app = createApp(App)
const i18n = createI18n({

})

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(i18n)
app.use(router)
app.mount('#app')
