import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store, { setupStore } from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import 'normalize.css'
import './assets/css/index.less'
import { globalRegister } from './global'

const app = createApp(App)
setupStore()
app.use(globalRegister)
app.use(router).use(store).use(ElementPlus)
app.mount('#app')
