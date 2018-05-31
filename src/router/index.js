import Vue from "vue";
import Router from "vue-router";
import Info from "@/components/Info";
import Skills from "@/components/Skills";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Info",
      component: Info
    },
    {
      path: "/skills",
      name: "Skills",
      component: Skills
    }
  ]
});
