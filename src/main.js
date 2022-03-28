import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//mock数据
import '../mock'

createApp(App).use(router).mount('#app')
