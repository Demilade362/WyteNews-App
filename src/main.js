import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap";

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
app.use(router)

app.mount('#app')
