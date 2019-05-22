import Vue from 'vue'
import Router from 'vue-router'
const Demo = () => import('../components/demo')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/demo',
      name: 'demo',
      component: Demo
    }
  ]
})
