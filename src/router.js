import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import Projects from "./views/Projects.vue";
import Team from "./views/Team.vue";
import Dummy from "./views/Dummy.vue";
import Register from "./views/Register.vue"
import Login from "./views/login";
import Secure from "./views/secure";
import Dropdown from './views/Dropdown';
import List from './views/List'
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
    {
      path: "/dropdown",
      name: "dropdown",
      component: Dropdown
    },
    {
      path: "/list",
      name: "list",
      component: List
    },
    {
      path: "/Secure",
      name: "secure",
      component: Secure
    },
    {
      path: "/Register",
      name: "register",
      component: Register
    },
    {
      path: "/Login",
      name: "login",
      component: Login
    },
    
  ]
});