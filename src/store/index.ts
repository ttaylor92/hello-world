import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store<unknown>({
  state: {},
  modules: {}
});

export {
  store as default
};

