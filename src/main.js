import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import {ElButton} from 'element-plus'

import 'element-plus/lib/theme-chalk/index.css';


const app = createApp(App)
app.use(router)
app.use(ElButton)
app.mount('#app')
