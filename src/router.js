import Vue from "vue";
import Router from "vue-router";
import Home from './components/Home';
import Details from './components/Details';
import Post from './components/Post';
import Area from './components/Area';
import Search from './components/Search';
import Login from './components/Login';


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
    }
  ]
});
