import { createApp } from 'vue'
import mitt from 'mitt'
import axios from 'axios'
import VWave from 'v-wave'
import router from './router/router.js'
import store from './store/store.js'
import App from './App.vue'
import socket from 'vue3-websocket'

const app = createApp(App)
app.use(router).use(VWave).use(store)
  .use(socket, 'ws://dev.smartbas.org/chat-rooms/3/TEST-APR-1').mount('#kt_app_root')

app.config.globalProperties.emitter = mitt()
app.config.globalProperties.axios = axios
