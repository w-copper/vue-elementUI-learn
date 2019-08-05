import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
import './styles/main.css';

import store from './store/index'
import axios from './http'

Vue.use(Element)

Vue.config.productionTip = false

Vue.prototype.axios = axios;
Vue.prototype.$store = store;

new Vue({
  axios,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
