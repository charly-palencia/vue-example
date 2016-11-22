import Vue from 'vue';
import Vuex from 'vuex';
import Index from 'src/components/PokemonTypes/index';

Vue.use(Vuex);

const mockedStore = {
  state: {
    vuexData: '...',
  },

  mutations: {
    FETCH_STUFF(state) {
      state.vuexData = 'mocked value';
    },
  },
};

describe('PokemonTypes/Index.vue', () => {
  it('renders correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(Index),
      store: new Vuex.Store(mockedStore),
    });
    expect(vm.$el.querySelector('div h1').textContent)
    .to.equal('Pokemon Types');
  });
});
