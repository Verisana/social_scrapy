import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    active_tab: null,
  },
  mutations: {
    changeActiveTab(state, payload) {
      state.active_tab = payload.new_value;
    },
  },
  actions: {
  },
  modules: {
  }
})
