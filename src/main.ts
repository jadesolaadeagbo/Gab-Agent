import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes/route'
import '@fortawesome/fontawesome-free/css/all.css'
// import '@fortawesome/fontawesome-free/js/all.js'


createApp(App).use(router).mount('#app')
