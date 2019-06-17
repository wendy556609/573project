import Vue from "vue";
import Router from "vue-router";
import Home from './components/Home';
import Area from './components/Area';
import Search from './components/Search';
import Login from './components/Login';
import Like from './components/Like';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/area",
      name: "area",
      component: Area
    },
    {
      path: "/search/:name",
      name: "search",
      component: Search
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/like",
      name: "like",
      component: Like,
     
    }
  ]
});
