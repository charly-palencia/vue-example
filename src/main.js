import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';

/* Plugins */
Vue.use(VueRouter);

/* Routes */
const routes = [
  { path: '/', component: App },
];

const router = new VueRouter({
  routes,
});

/* eslint-disable no-new */
new Vue({
  router,
  // el: '#app',
  // template: '<App/>',
  // components: { App },
}).$mount('#app');
