import { createApp } from 'vue'
import mitt from 'mitt'
import axios from 'axios'
import VWave from 'v-wave'
import router from './router/router.js'
import store from './store/store.js'
import App from './App.vue'

const app = createApp(App)
app.use(router).use(VWave).use(store).mount('#kt_app_root')

app.config.globalProperties.emitter = mitt()
app.config.globalProperties.axios = axios
