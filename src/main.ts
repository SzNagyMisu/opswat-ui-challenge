import Vue, { PluginObject } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Quasar from 'quasar'
import 'quasar/dist/quasar.css'
import 'material-icons/iconfont/material-icons.css'

Vue.use(Quasar as unknown as PluginObject<any>) // property "install" is missing in type quasar

import '@/assets/style.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
