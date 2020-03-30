import Vue from 'vue'
import VueRouter from 'vue-router'
import Scan from '../views/Scan.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Scan',
    component: Scan
  }
]

const router = new VueRouter({
  routes
})

export default router
