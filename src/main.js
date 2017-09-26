// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router/index'
import Layout from './components/layout'
import axios from 'axios'
import Store from './store/index'
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:Store,
  template: '<Layout/>',
  components: { Layout }
})
