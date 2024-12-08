import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import vueResource from 'vue-resource';



const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(vueResource)

// app.http.options.route = 'http://blog/wp-json';

app.mount('#app')
