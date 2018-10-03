import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueRosource from 'vue-resource'
import { router } from './router.js';
import { store } from './store';
import App from './App.vue';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueRosource);

Vue.config.productionTip = false;

const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');