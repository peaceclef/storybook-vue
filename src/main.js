import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//css
import '@/assets/css/common.scss'
//개발자용 css
import '@/assets/css/developer.scss'

const app = createApp(App)
app.use(router)
app.mount('#app')
