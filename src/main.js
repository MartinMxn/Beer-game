// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import $ from 'jquery'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import  echarts from 'echarts'

Vue.prototype.$echarts=echarts
Vue.use(iView);
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use($);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
