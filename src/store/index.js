import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export default function createStore() {
  return new Vuex.Store({
    state: {
      infoBase: {
        firstName: '',
        lastName: '',
        email: ''
      },
      skill: {
        html: 0,
        css: 0,
        js: 0
      }
    },
    mutations,
    actions
  });
}
