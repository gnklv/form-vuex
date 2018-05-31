import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import getters from "./getters";

Vue.use(Vuex);

export default function createStore() {
  return new Vuex.Store({
    state: {
      formBase: {
        firstName: "",
        lastName: "",
        email: ""
      },
      skill: {
        html: 0,
        css: 0,
        js: 0
      }
    },
    mutations,
    getters
  });
}
