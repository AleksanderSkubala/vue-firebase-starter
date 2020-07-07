import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null,
    },
  },
  mutations: {
    setLoggedState(state, value) {
      state.user.loggedIn = value;
    },
    setUser(state, data) {
      state.user.data = data;
    },
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("setLoggedState", user !== null);
      if (user) {
        commit("setUser", {
          displayName: user.displayName,
          email: user.email,
        });
      } else {
        commit("setUser", null);
      }
    },
  },
});
