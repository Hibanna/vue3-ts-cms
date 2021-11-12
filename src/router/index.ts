import { createRouter, createWebHashHistory} from "vue-router"
import type { RouteRecordRaw} from "vue-router"

const routes: RouteRecordRaw[] = [
    {
      path:"/"
      redirect:"/login"
    },
    {
      path : "/login",
      component: "@/views/login/login.vue"
    },
    {
      path : "/login",
      component: "@/views/login/login.vue"
    },
]

const router = createRouter({
  routes,
  history:createWebHashHistory()
});

export default router
