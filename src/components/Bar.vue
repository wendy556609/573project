<template>
      <div class="top u-cf">
        <div class="navbar">
          <div class="nav_LOGO">
            <a @click="$router.push({ name: 'home'})">Vá ao café</a>
          </div>
          <ul class="nav_menu">
            <li>
              <a @click="$router.push({ name: 'area'})">搜尋</a>
            </li>
            <li :style="{display:this.like}">
              <a @click="$router.push({ name: 'like'})">收藏</a>
            </li>
            <li :style="{display:this.signin}">
              <a @click="$router.push({ name: 'login'})">登入</a>
            </li>
            <li :style="{display:this.signout}">
              <a  @click="logout">登出</a>
            </li>
            <li :style="{display:this.signout}">
              <a>{{this.username}}</a>
            </li>
          </ul>
        </div>
      </div>
</template>

<script>
import firebase, { functions } from "firebase";
import router from "../router.js";

export default {
    name:"Bar",
    data(){
      return{
      signout: "none",
      signin: "",
      like: "none",
      isLogin:false,
      username:sessionStorage.getItem('username')
      }
    },
    methods:{
      async logout() {
      firebase
        .auth()
        .signOut()
        .then(function() {
          firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              console.log("yes");
            } else {
              console.log("no");
            }
          });
        });
        router.push("/area");
        sessionStorage.setItem("isLogin", false);
        this.setState()
        sessionStorage.setItem('username',"")
        sessionStorage.setItem('uid',"")
    },
    setState() {
      this.isLogin=sessionStorage.getItem("isLogin")
      if(this.isLogin === 'true'){
        console.log("login");
        this.signout="";
        this.signin="none";
        this.like="";
      }
      if(this.isLogin === 'false'){
        console.log("not");
        this.signout="none";
        this.signin="";
        this.like="none";
      }
    },
    },
    mounted() {
      this.setState()
  },
}
</script>

<style scoped>
@charset "UTF-8";
* {
  margin: auto;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  font-family: "微軟正黑體", cursive;
}

*::selection {
  color: #fff;
    	background: rgba(255, 255, 255, 0);

}

.u-cf:after {
  content: "";
  display: block;
  clear: both;
}

.top {
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 15;
}

.navbar {
  outline: 1px solid red;
  width: 90%;
  margin: 0 auto;
}

.nav_LOGO a {
  text-decoration: none;
  float: left;
  font-weight: bold;
  color: #fff;
  font-size: 32px;
  margin-top: 2px;
}

.nav_menu {
  float: right;
  padding: 15px 0;
  font-size: 16px;
}

.nav_menu li {
  list-style: none;
  float: left;
  padding: 0 0 0 30px;
}

.nav_menu li a {
  text-decoration: none;
  display: block;
  color: #fff;
}
</style>