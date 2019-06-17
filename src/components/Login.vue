<template>
  <div class="LOGIN">
    <div class="wrapper">
      <Bar/>
      <div class="content">
        <div class="sign_box">
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
            <v-progress-circular color="#fff" indeterminate/>
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
  mounted() {},
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
  font-family: arial, "Microsoft JhengHei", "微軟正黑體", sans-serif !important;
}

*::selection {
  color: #fff;
  background: rgba(255, 255, 255, 0);
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
  height: 100vh;
  cursor: default;
}

.content {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
}

.sign_box {
  position: absolute;
  width: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.form-group {
  position: relative;
  width: 90%;
  height: auto;
}
.form-control {
  background-color: rgb(0, 0, 0, 0.2);
  width: 100%;
  border: 1.5px solid #fff;
  padding: 10px 10px;
  border-radius: 5px;
  color: #8c8c8c;
  outline: none;
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
  width: 50%;
  height: auto;
  margin-top: 20%;
  text-align: center;
}

.text-center1 {
  padding: 5px 0px;
  size: 25;
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

@media only screen and (max-width: 768px) {
  .sign_box {
    width: 90%;
  }
  .form-control {
    font-size: 22px;
    margin: 50px 0;
  }
  .text-center {
    margin-top: 20%;
  }

  .text-center1 {
    padding: 10px 0;
  }

  .v-btn {
    width: 100%;
    height: 50px;
    padding: 10px 0px;
    font-size: 20px;
  }
}
@media only screen and (max-width: 450px) {
  .sign_box {
    width: 90%;
  }
  .form-control {
    font-size: 24px;
    margin: 45px 0;
  }
  .text-center {
    margin-top: 25%;
    width: 70%;
  }
}
</style>
