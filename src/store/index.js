// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    loading: false,
  },
  mutations: {
    SET_LOADING(state, isLoading) {
      state.loading = isLoading;
    },
  },
  actions: {
    setLoading({ commit }, isLoading) {
      commit('SET_LOADING', isLoading);
    },
  },
  getters: {
    isLoading: (state) => state.loading,
  },
});
