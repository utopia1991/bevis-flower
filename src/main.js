import Vue from 'vue'
import App from '@/App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import routes from '@/router/routes'
import axiosPlugin from '@/utils/axios'
import VDistpicker from 'v-distpicker'

Vue.component('v-distpicker', VDistpicker)
Vue.use(ElementUI)
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

new Vue({
  axiosPlugin,
  router,
  render: h => h(App)
}).$mount('#app')
