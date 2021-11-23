import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
// import './service/axios_demo'
import { HYRequest1 } from './service'
import HYRequest from './service'
HYRequest.request({
  url: 'home/multidata'
})
HYRequest1.request({
  url: 'home/multidata'
})
createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
