import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-regular-svg-icons';
import '@fortawesome/free-solid-svg-icons';
import './assets/main.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
