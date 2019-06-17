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
      <input class="nav_hum" type="checkbox" id="nav_hum" name="nav_hum">
      <label class="nav_hum_btn" id="nav_hum_btn" for="nav_hum"></label>
      <div class="line line1"></div>
      <div class="line line2"></div>
      <div class="line line3"></div>

      <ul class="nav_menu">
        <li :style="{display:this.signout}" style="color:white;">
          {{this.username}}
        </li>
        <li :style="{display:this.signout}">
          <a @click="logout">登出</a>
        </li>
        <li :style="{display:this.signin}">
          <a @click="$router.push({ name: 'login'})">登入</a>
        </li>
        <li :style="{display:this.like}">
          <a @click="$router.push({ name: 'like'})">收藏</a>
        </li>
        <li>
          <a @click="$router.push({ name: 'area'})">搜尋</a>
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
      isLogin: false,
      username: sessionStorage.getItem("username")
    };
  },
  methods: {
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
  mounted() {
    this.setState();
  }
};
</script>

<style scoped>
@charset "UTF-8";
* {
  margin: auto;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  font-family: arial, "Microsoft JhengHei", "微軟正黑體", sans-serif !important;
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

.BAR {
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 15;
}

.wrapper {
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
  float: right;
  padding: 0 0 0 30px;
}

.nav_menu li a {
  text-decoration: none;
  display: block;
  color: #fff;
}

.nav_hum,
.nav_hum_btn,
.line {
  display: none;
}

@media only screen and (max-width: 450px) {
  .nav_hum_btn,
  .line {
    display: block;
  }
  .nav_hum_btn {
    float: right;
    margin: 10px 0;
    height: 30px;
    width: 24px;
    z-index: 98;
  }
  .nav_hum {
    display: none;
  }

  .line {
    float: right;
    position: absolute;
    background-color: white;
    width: 24px;
    height: 2px;
    transition: all 0.5s;
    top: 25px;
    right: 0%;
  }
  .line1 {
    transform-origin: left center;
    position: absolute;
    top: 16.5px;
  }
  .line3 {
    transform-origin: left center;
    position: absolute;
    top: 33.5px;
  }

  .nav_hum:checked ~ .line2 {
    opacity: 0;
  }
  .nav_hum:checked ~ .line1 {
    right: -4px;
    transform: rotate(45deg);
    width: 27.6‬‬px;
  }
  .nav_hum:checked ~ .line3 {
    right: -4px;
    transform: rotate(-45deg);
    width: 27.6‬‬px;
  }
  .nav_hum:checked ~ .nav_menu {
    display: block;
  }

  .nav_menu {
    font-size: 16px;
    width: 100%;
    display: none;
    padding: 10px 0;
  }
  .nav_menu li {
    list-style: none;
    float: right;
    padding: 0 0 0 30px;
    right: 0%;
  }

  .nav_menu li a {
    text-decoration: none;
    display: block;
    color: #fff;
  }
}
</style>