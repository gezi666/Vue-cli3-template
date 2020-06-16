import Vue from 'vue'
import Router from 'vue-router'
const Demo = () => import('../components/demo')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/demo.html',
      name: 'demo',
      component: Demo
    }
  ]
})
