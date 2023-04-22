import { createApp } from 'vue'
import App from './App.vue'

import routes from './router'
import controller from './controller'

createApp(App).use(routes).use(controller).mount('#app')