import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

const router: VueRouter = new VueRouter({
  routes
})

export default router
