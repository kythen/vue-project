// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from './components/layout'
import IndexPage from './pages/index'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
let router = new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      component:IndexPage
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
