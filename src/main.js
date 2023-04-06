import { createApp } from 'vue';
import mitt from 'mitt';
import axios from 'axios';
import VWave from 'v-wave';
import router from './router/router.js';
import store from './store/store.js';
import App from './App.vue';

const app = createApp(App);

app.config.globalProperties.emitter = mitt();
app.config.globalProperties.axios = axios;
app.use(router);
app.use(VWave);
app.use(store);

app.mount('#app')
