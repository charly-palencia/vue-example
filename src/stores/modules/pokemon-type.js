import http from '../http';
import * as types from '../mutation-types';

const state = {
  all: [],
  show: null,
};

const getters = {
  allPokemonTypes(state) {
    return state.all;
  },
  pokemonType(state) {
    return state.show;
  },
};

const actions = {
  getPokemonType({ commit }, id) {
    http.get(`type/${id}`)
    .then((resp) => {
      const result = resp.data;
      commit(types.RECEIVE_POKEMON_TYPE, result);
    });
  },
  getPokemonTypes({ commit }) {
    http.get('type')
    .then((resp) => {
      const { results } = resp.data;
      commit(types.RECEIVE_POKEMON_TYPES, results);
    });
  },
};

const mutations = {
  [types.RECEIVE_POKEMON_TYPES](state, results) {
    state.all = results;
  },
  [types.RECEIVE_POKEMON_TYPE](state, result) {
    state.show = result;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
