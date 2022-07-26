import { createApp } from 'vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Vue3Lottie from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(router);
app.use(ElementPlus);
app.use(Vue3Lottie);

app.mount('#app')
