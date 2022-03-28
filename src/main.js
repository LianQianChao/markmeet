import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//mock数据
import '../mock'
const app = createApp(App)

app.use(router)
app.mount('#app')
