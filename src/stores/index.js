import Vue from 'vue';
import Vuex from 'vuex';
import pokemonType from './modules/pokemon-type';
import pokemon from './modules/pokemon';
import characteristic from './modules/characteristic';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    pokemonType,
    pokemon,
    characteristic,
  },
});
