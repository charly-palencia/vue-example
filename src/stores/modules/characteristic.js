import http from '../http';
import * as types from '../mutation-types';

const state = {
  show: null,
};

const getters = {
  characteristic(state) {
    return state.show;
  },
};

const actions = {
  getPokemonCharacteristic({ commit }, id) {
    http.get(`characteristic/${id}`)
    .then((resp) => {
      const result = resp.data;
      commit(types.RECEIVE_POKEMON_CHARACTERISTIC, result);
    });
  },
};

const mutations = {
  [types.RECEIVE_POKEMON_CHARACTERISTIC](state, result) {
    state.show = result;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
