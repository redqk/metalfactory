import { createApp } from 'vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp({})
  .use(router)
  .use(store)
  .mount('#app')
