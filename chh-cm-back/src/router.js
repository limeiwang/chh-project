import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 全局路由
const globalRoutes = [
  { path: '/404', component: () => import('./views/common/404'), name: '404', meta: { title: '404未找到' } },
  { path: '/login', component: () => import('./views/common/login.vue'), name: 'login', meta: { title: '登录' } }

]
// 主入口路由(需嵌套上左右整体布局)
const mainRoutes = {
  path: '/',
  component: () => import('./views/main.vue'),
  name: 'main',
  redirect: { name: 'home' },
  meta: { title: '主入口整体布局' },
  children: [
    { path: '/home', component: () => import('./views/common/home'), name: 'home', meta: { title: '首页' } },
    { path: '/theme', component: () => import('./views/common/theme'), name: 'theme', meta: { title: '主题' } },
    { path: '/purchase', component: () => import('./views/modules/purchase'), name: 'purchase', meta: { title: '采购进货', isTab: true } },
    { path: '/delivery', component: () => import('./views/modules/delivery'), name: 'delivery', meta: { title: '销售出货', isTab: true } },
    { path: '/stock', component: () => import('./views/modules/stock'), name: 'stock', meta: { title: '库存查看', isTab: true } },
    { path: '/customer', component: () => import('./views/modules/customer'), name: 'customer', meta: { title: '客户管理', isTab: true } }
  ]
}
const router = new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: globalRoutes.concat(mainRoutes)
})

export default router
