<template>
  <div class="LOGIN">
    <div class="wrapper">
      <Bar/>
      <div class="down u-cf">
        <div class="content">
          <form>
            <div class="form-group">
              <input
                v-model.trim="email"
                type="email"
                name="email"
                class="form-control"
                placeholder="Email"
                required
              >
              <input
                v-model.trim="password"
                type="password"
                password="password"
                class="form-control"
                placeholder="Password"
                required
              >
            </div>
          </form>
          <div v-if="loading" class="text-center text-center1">
            <v-progress-circular :size="25" :width="4" color="#fff" indeterminate/>
          </div>
          <div v-else class="text-center text-center2">
            <v-btn @click="loginWithGoogle" flat>Login with Google</v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase, { functions } from "firebase";
import router from "../router.js";
import Bar from "./Bar";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      errors: [],
      loading: false,
      user: "",
      users:[]
    };
  },
  methods: {
    async loginWithGoogle() {
      this.loading = true;
      this.errors = [];
      try {
        let response = await firebase
          .auth()
          .signInWithPopup(new firebase.auth.GoogleAuthProvider());
        this.user = response.user;
        router.push("/area");
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            console.log("yes");
          }
        });
        sessionStorage.setItem("isLogin", true);
        this.readUser()
      } catch (error) {
        this.errors.push(error.message);
        this.loading = false;
      }
    },
    readUser(){
      this.users = firebase.auth().currentUser;
            
      sessionStorage.setItem('username',this.users.displayName)
      sessionStorage.setItem('uid',this.users.uid)
    }
  },
   mounted() {
  },
  components: {
    Bar
  }
};
</script>

<style lang='postcss' scoped>
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

.LOGIN {
  width: 100%;
  height: 100%;
  cursor: default;
  background-image: url(../assets/im/Tbg-b.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 auto;
}

.wrapper {
  position: absolute;
  width: 100%;
  height: auto;
  cursor: default;
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

.down {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0%;
  background-color: rgba(0, 0, 0, 0);
}

.content {
  height: 80%;
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.form-group {
  position: relative;
  width: 50%;
  height: auto;
  top: 100px;
}
.form-control {
  background-color: rgb(0, 0, 0, 0.2);
  width: 100%;
  border: 1.5px solid #fff;
  padding: 10px 10px;
  border-radius: 5px;
  color: #8c8c8c;
  outline: none;
  font-weight: bold;
  caret-color: #8c8c8c;
  font-size: 15px;
  margin: 20px 0;
}
.form-control::-webkit-input-placeholder {
  color: #d3d3d3;
}

.form-control:focus {
  color: #d3d3d3;
}
.text-center {
  position: relative;

  width: 25%;
  height: auto;
  top: 200px;
  text-align: center;
}
.text-center1 {
  padding: 5px 0px;
}
.text-center2 {
  border: 1.5px solid #fff;
  border-radius: 5px;
}

.v-btn {
  color: #fff;
  width: 100%;
  border-radius: 5px;
  padding: 5px 0px;
}
</style>
