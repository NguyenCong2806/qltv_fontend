import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router';
import 'vue3-toastify/dist/index.css';

const store = createPinia();
const app = createApp(App);

app .use(store)
    .use(router)
    .mount('#app')