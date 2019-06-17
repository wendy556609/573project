<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  mounted(){
    if(sessionStorage.getItem("isLogin")!=="true"){
      sessionStorage.setItem("isLogin",false)
    }
  }
};
</script>

<style>
</style>