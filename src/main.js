import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import PokemonTypes from './components/PokemonTypes/index';
import PokemonTypesShow from './components/PokemonTypes/show';
import PokemonShow from './components/Pokemon/show';
import store from './stores';

/* Plugins */
Vue.use(VueRouter);

/* Routes */
const routes = [
  { path: '/',
    component: App,
    children: [
      { path: '', component: PokemonTypes },
      { path: '/types/:typeId/pokemons', name: 'pokemonsByType', component: PokemonTypesShow },
      { path: '/pokemon/:name', name: 'pokemonShow', component: PokemonShow },
    ],
  },
];

const router = new VueRouter({
  routes,
});

/* eslint-disable no-new */
new Vue({
  router,
  store,
  // el: '#app',
  // template: '<App/>',
  // components: { App },
}).$mount('#app');
