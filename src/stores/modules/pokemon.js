import http from '../http';
import * as types from '../mutation-types';

const state = {
  show: null,
};

const getters = {
  pokemon(state) {
    return state.show;
  },
};

const actions = {
  getPokemon({ commit }, id) {
    http.get(`pokemon/${id}`)
    .then((resp) => {
      const result = resp.data;
      commit(types.RECEIVE_POKEMON, result);
    });
  },
};

const mutations = {
  [types.RECEIVE_POKEMON](state, result) {
    state.show = result;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
