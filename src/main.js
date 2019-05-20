import Vue from 'vue'
import './assets/css/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from 'axios'
import echarts from 'echarts'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts

Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
