import { RouteRecordRaw } from 'vue-router'

export default function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  const routeFiles = require.context('../router/main', true, /\.ts/)

  const allRoutes: RouteRecordRaw[] = []

  routeFiles.keys().forEach((ele) => {
    const route = require('../router/main' + ele.split('.')[1])
    allRoutes.push(route.default)
  })
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type == 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus)
  return routes
}
