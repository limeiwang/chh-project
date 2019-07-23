import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/icons'
import './mock'
import '@/assets/scss/index.scss'
// 引入表单验证
import VeeValidate, { Validator } from 'vee-validate'
// 汉化表单验证
import zhCN from 'vee-validate/dist/locale/zh_CN'
Vue.use(VeeValidate, { fieldsBagName: 'vee-fields' })
Validator.localize('zh_CN', zhCN)
Vue.use(ElementUI, { size: 'small' })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
