// src/main.js
import { createApp } from "vue";
import { createPinia } from 'pinia';
import App from "./App.vue";
import router from './router';
import './assets/tailwind.css'; // Import Tailwind CSS


const pinia = createPinia();
const app = createApp(App);

pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(router);

app.mount('#app');