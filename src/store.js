import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: 'spotme',
  storage: window.localStorage,
});

export default new Vuex.Store({
  state: {
    token: null,
  },
  plugins: [
    vuexLocalStorage.plugin,
  ],
});
