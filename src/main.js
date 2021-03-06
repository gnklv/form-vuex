// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import App from "./App";
import router from "./router";
import createStore from "./store";

Vue.use(Vuetify);

Vue.config.productionTip = false;

const store = createStore();

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  store
});
