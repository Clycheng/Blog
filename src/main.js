// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import VueLazyLoad from 'vue-lazyload'
import vuex from 'vuex'
import store from  './stroe'
import axios from 'axios'
import 'reset.css'
require ('./mock')
Vue.use(VueLazyLoad, {
  error: '@/assets/logo.png',
  // loading:'@/assets/logo.png'
})
Vue.prototype.ajax = axios;
Vue.use(vuex)
Vue.use(ElementUi)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
