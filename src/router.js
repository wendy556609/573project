import Vue from "vue";
import Router from "vue-router";
import Home from './components/Home';
import Area from './components/Area';
import Search from './components/Search';
import Login from './components/Login';
import firebase from "firebase";



Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: "*",
    //   component: Main,
    //   beforeEnter: (to, from, next) => {
    //     if (!firebase.auth().currentUser) {
    //       next("/login");
    //     } else {
    //       next();
    //     }
    //   }
    // },
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
      props: true,
      component: Search
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
    
  ]
});
