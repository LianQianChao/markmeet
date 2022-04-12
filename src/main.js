import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//mock数据
import '../mock'
const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
