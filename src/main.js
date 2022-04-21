import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import ElementPlus from 'element-plus'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn,
})

app.use(router)
app.use(store)
app.mount('#app')
