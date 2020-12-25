import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: { id: '', token: '' },
  getters: {
    logined(state) {
      return state.id !== '';
    },
  },
  mutations: {
    setUserid(state, id) {
      state.id = id;
    },
    clearUserInfo(state) {
      state.id = '';
      state.token = '';
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {},
  modules: {},
});
