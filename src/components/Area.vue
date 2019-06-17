<template>
  <div class="AREA">
    <div class="wrapper">
      <div class="top u-cf">
        <div class="navbar">
          <div class="nav_LOGO">
            <a @click="$router.push({ name: 'home'})">Vá ao café</a>
          </div>
          <ul class="nav_menu">
            <li>
              <a href="#">登入</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="down u-cf">
        <div class="content">
          <ul class="content_menu">
            <li class="area_1">
              <a href="#">北部</a>
              <div class="area_menu area_menu1">
                <div class="left">北部</div>
                <ul class="right">
                  <li v-for="north in norths" :key="north.value">
                    <a @click="onSelectArea(north)">{{north.info}}</a>
                  </li>
                </ul>
              </div>
            </li>

            <li class="area_2">
              <a href="#">東部</a>
              <div class="area_menu area_menu2">
                <div class="left">東部</div>
                <ul class="right">
                  <li v-for="east in easts" :key="east.value"><a @click="onSelectArea(east)">{{east.info}}</a></li>
                </ul>
              </div>
            </li>
            <li class="area_3">
              <a href="#">中部</a>
              <div class="area_menu area_menu3">
                <div class="left">中部</div>
                <ul class="right">
                  <li v-for="mid in mids" :key="mid.value"><a @click="onSelectArea(mid)">{{mid.info}}</a></li>
                </ul>
              </div>
            </li>
            <li class="area_4">
              <a href="#">南部</a>
              <div class="area_menu area_menu4">
                <div class="left">南部</div>
                <ul class="right">
                  <li v-for="south in souths" :key="south.value">
                    <a @click="onSelectArea(south)">{{south.info}}</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";
import { mapActions } from "vuex";
export default {
  // name: 'Area'
  data() {
    return {
      norths: [{ value: "norths" }],
      easts: [{ value: "easts" }],
      mids: [{ value: "mids" }],
      souths: [{ value: "souths" }]
    };
  },
  methods: {
    ...mapActions(["setTitleName"]),
    getData() {
      this.$axios.get("../static/areas.json").then(response => {
        this.norths = response.data.north;
        this.easts = response.data.east;
        this.mids = response.data.mid;
        this.souths = response.data.south;
      });
    },
    onSelectArea(area) {
      this.setTitleName(area.name);
      router.push({ name: "search", params: { name: area.name, area } });
    }
  },
  mounted() {
    this.getData();
  },
  created() {
    this.setTitleName("dogApp");
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

.AREA {
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
  width: 90%;
  margin: 0 auto;
}

.nav_LOGO a {
  text-decoration: none;
  float: left;
  font-weight: bolder;
  color: #fff;
  font-size: 32px;
  margin-top: 5px;
}

.nav_menu {
  float: right;
  padding: 15px 0;
  font-size: 16px;
}

.nav_menu li {
  list-style: none;
}

.nav_menu li a {
  text-decoration: none;
  display: block;
  color: #fff;
}

.down {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}

.content {
  height: calc(100vh);
  width: 100%;
}

.content_menu {
  position: absolute;
  display: grid;
  grid-template-columns: 300px 300px;
  grid-template-rows: 150px 150px;
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.content_menu li {
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 150px;
  outline: 2px solid #fff;
  background-color: rgba(0, 0, 0, 0.2);
  list-style: none;
  font-size: 40px;
  font-weight: bold;
}

.content_menu li a {
  text-decoration: none;
  display: block;
  color: rgba(255, 255, 255, 1);
}

.area_menu {
  position: absolute;
  width: 150px;
  height: 75px;
  background-color: rgba(0, 0, 0, 1);
  transition-duration: 400ms;
  font-size: 0px;
  z-index: -1;
  opacity: 0;
  transform: scale(0.001, 0.001) translate3d(0, 0, 0);
  display: grid;
  grid-template-columns: 50% 50%;
  outline: 0px solid #fff;
  /* outline: 1px solid blueviolet; */
}

.area_menu1 {
  left: -0.2%;
  top: -0.2%;
}

.area_menu2 {
  right: -0.2%;
  top: -0.2%;
}

.area_menu3 {
  left: -0.2%;
  bottom: -0.2%;
}

.area_menu4 {
  right: -0.2%;
  bottom: -0.2%;
}

.left {
  width: 100%;
  color: #fff;
  /* outline: 1px solid red; */
}

.right {
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  /* outline: 1px solid blue; */
}

.right li {
  outline: 0px solid #fff;
}

.area_menu li {
  transition: all 0.3s;
  font-size: 20px;
  padding: 20px 0;
  line-height: 20px;
}

.area_menu li > a:after {
  content: "";
  display: block;
  width: 0%;
  height: 2.25px;
  background-color: rgba(185, 163, 131, 1);
  position: absolute;
  top: 175%;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.2s;
}

.area_menu li:hover > a:after {
  width: 50%;
}

.area_1:hover > .area_menu1 {
  transform: scale(1, 1) translate3d(0%, 0%, 0);
  width: 217%;
  height: 233.8%;
  transition-duration: 400ms;
  font-size: 25px;
  opacity: 1;
  z-index: 99;
}

.area_2:hover > .area_menu2 {
  transform: scale(1, 1) translate3d(0%, 0%, 0);
  width: 217%;
  height: 233.8%;
  transition-duration: 400ms;
  font-size: 25px;
  opacity: 1;
  z-index: 99;
}

.area_3:hover > .area_menu3 {
  transform: scale(1, 1) translate3d(0%, 0%, 0);
  width: 217%;
  height: 233.8%;
  transition-duration: 400ms;
  font-size: 25px;
  opacity: 1;
  z-index: 99;
}

.area_4:hover > .area_menu4 {
  transform: scale(1, 1) translate3d(0%, 0%, 0);
  width: 217%;
  height: 233.8%;
  transition-duration: 400ms;
  font-size: 25px;
  opacity: 1;
  z-index: 99;
}
</style>
