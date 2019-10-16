import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import Projects from "./views/Projects.vue";
import Team from "./views/Team.vue";
import Dummy from "./views/Dummy.vue";



Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/Projects",
      name: "projects",
      component: Projects
    },
    {
      path: "/Team",
      name: "team",
      component: Team
    },
    {
      path: "/Dummy",
      name: "dummy",
      component: Dummy
    },
   
   
  ]
});