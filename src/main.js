// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/css/reset.css"
Vue.config.productionTip = false
import resource from 'vue-resource';
Vue.use(resource)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.http.interceptors.push((request, next) => {
  if (localStorage.authKey!=undefined) {
    request.headers.set('authKey',localStorage.authKey);
    request.headers.set('sessionId',localStorage.sessionId);
  }
  next((response) => {
      return response
  })
})
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
