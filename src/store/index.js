// store/index.js
import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    loading: false,
    cacheLoaded: false,
    personajes: [], // Agregar el estado para los personajes
  },
  mutations: {
    SET_LOADING(state, isLoading) {
      state.loading = isLoading;
    },
    SET_CACHE_LOADED(state, isLoaded) {
      state.cacheLoaded = isLoaded;
    },
    SET_PERSONAJES(state, personajes) {
      state.personajes = personajes;
    }
  },
  actions: {
    async fetchData({ commit }) {
      commit('SET_LOADING', true);
      try {
        const response = await axios.get('/api/personajes.json');
        commit('SET_PERSONAJES', response.data);
        commit('SET_CACHE_LOADED', true);
      } catch (error) {
        console.error('Error fetching characters:', error);
      } finally {
        // Mantén el spinner visible por 1 segundo la primera vez
        setTimeout(() => {
          commit('SET_LOADING', false);
        }, 1000);
      }
    },
    setLoading({ commit }, isLoading) {
      commit('SET_LOADING', isLoading);
    },
    setCacheLoaded({ commit }, isLoaded) {
      commit('SET_CACHE_LOADED', isLoaded);
    }
  },
  getters: {
    isLoading: (state) => state.loading,
    cacheLoaded: (state) => state.cacheLoaded,
    personajes: (state) => state.personajes,
  },
});
