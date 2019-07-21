import App from './App'
import Vue from 'vue'
import Router from 'vue-router'

const home = r => require.ensure([], () => r(require('./views/Home.vue')), 'home')
const fenlei = r => require.ensure([], () => r(require('./views/Fenlei.vue')), 'fenlei.vue')
const shopcar = r => require.ensure([], () => r(require('./views/Shopcar.vue')), 'shopcar.vue')
const user = r => require.ensure([], () => r(require('./views/User.vue')), 'user.vue')
const details = r => require.ensure([], () => r(require('./views/Details.vue')), 'details.vue')
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: App, // 顶层路由，对应index.html
      children: [
        {
          path: '/',
          redirect: '/home'
        },
        {
          path: '/home',
          name: 'home',
          component: home,
          meta: { title: '首页' }
        },
        {
          path: '/fenle',
          name: 'fenle',
          component: fenlei,
          meta: { title: '分类' }
        },
        {
          path: '/shopcar',
          name: 'shopcar',
          component: shopcar,
          meta: { title: '请回家' }
        },
        {
          path: '/user',
          name: 'user',
          component: user,
          meta: { title: '我的' }
        },
        {
          path: '/details/:id',
          name: 'details',
          component: details,
          meta: { title: '商品详情' }
        }
      ]
    }
  ]
})
