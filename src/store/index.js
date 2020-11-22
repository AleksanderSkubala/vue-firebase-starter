import Vue from 'vue';
import Vuex from 'vuex';
import { vuexfireMutations } from 'vuexfire';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, data) {
      state.user = data;
    },
    ...vuexfireMutations,
  },
  actions: {
    fetchUser({ commit }, user) {
      if (user) commit('setUser', user);
      else commit('setUser', user);
    },
  },
  modules: {
  },
});
