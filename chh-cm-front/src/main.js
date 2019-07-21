import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Tab, Tabs, Cell, CellGroup } from 'vant'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import FastClick from 'fastclick'

import 'amfe-flexible'
import 'normalize.css'
import '@/assets/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'
import './mock'

// if ('addEventListener' in document) {
//   document.addEventListener('DOMContentLoaded', function () {
//     FastClick.attach(document.body)
//   }, false)
// }

Vue.use(Tab).use(Tabs).use(Cell).use(CellGroup)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
