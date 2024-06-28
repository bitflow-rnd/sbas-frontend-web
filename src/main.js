import { createApp } from 'vue'
import mitt from 'mitt'
import axios from 'axios'
import VWave from 'v-wave'
import router from './router/router.js'
import store from './store/store.js'
import App from './App.vue'
import VueEasyLightbox from 'vue-easy-lightbox'

const app = createApp(App)
//.use(socket, 'ws://dev.smartbas.org/chat-rooms')
app.config.globalProperties.emitter = mitt()
app.config.globalProperties.axios = axios

app
  .use(router)
  .use(VWave)
  .use(store)
  .use(VueEasyLightbox)
  .mount('#app')

store.dispatch('common/getCommonCodes')