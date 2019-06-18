<template>
  <div class="AREA">
    <div class="wrapper">
      <Bar/>
      <div class="content">
        <ul class="content_menu">
          <li class="area_1">
            <div class="area_title">北部</div>
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
            <div class="area_title">東部</div>
            <div class="area_menu area_menu2">
              <div class="left">東部</div>
              <ul class="right">
                <li v-for="east in easts" :key="east.value">
                  <a @click="onSelectArea(east)">{{east.info}}</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="area_3">
            <div class="area_title">中部</div>
            <div class="area_menu area_menu3">
              <div class="left">中部</div>
              <ul class="right">
                <li v-for="mid in mids" :key="mid.value">
                  <a @click="onSelectArea(mid)">{{mid.info}}</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="area_4">
            <div class="area_title">南部</div>
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
</template>

<script>
import axios from "axios";
import router from "../router";
import { mapMutations } from "vuex";
import Bar from "./Bar";

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
    getData() {
      this.$axios.get("./static/areas.json").then(response => {
        this.norths = response.data.north;
        this.easts = response.data.east;
        this.mids = response.data.mid;
        this.souths = response.data.south;
      });
    },
    onSelectArea(area) {
      sessionStorage.setItem("areaName", area.name);
      router.push({ name: "search", params: { name: area.name } });
    }
  },
  mounted() {
    this.getData();
  },
  components: {
    Bar
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
  height: 100vh;
  cursor: default;
}
.content {
  height: 100%;
  width: 100%;
}
.content_menu {
  position: absolute;
  width: 40%;
  height: 50%;
  display: grid;
  grid-template-columns: 47% 47%;
  grid-template-rows: 47% 47%;
  grid-column-gap: 6%;
  grid-row-gap: 40px;
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
  color: #fff;
}
.area_title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
}
.area_menu1 {
  left: -1%;
  top: -1.5%;
}
.area_menu2 {
  right: -1%;
  top: -1.5%;
}
.area_menu3 {
  left: -1%;
  bottom: -2%;
}
.area_menu4 {
  right: -1%;
  bottom: -2%;
}
.left {
  width: 100%;
  color: #fff;
}
.right {
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
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
.area_menu li a {
  text-decoration: none;
  display: block;
  color: #fff;
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
  width: 215%;
  height: 234%;
  transition-duration: 400ms;
  font-size: 25px;
  opacity: 1;
  z-index: 99;
}
.area_2:hover > .area_menu2 {
  transform: scale(1, 1) translate3d(0%, 0%, 0);
  width: 215%;
  height: 234%;
  transition-duration: 400ms;
  font-size: 25px;
  opacity: 1;
  z-index: 99;
}
.area_3:hover > .area_menu3 {
  transform: scale(1, 1) translate3d(0%, 0%, 0);
  width: 215%;
  height: 234%;
  transition-duration: 400ms;
  font-size: 25px;
  opacity: 1;
  z-index: 99;
}
.area_4:hover > .area_menu4 {
  transform: scale(1, 1) translate3d(0%, 0%, 0);
  width: 215%;
  height: 234%;
  transition-duration: 400ms;
  font-size: 25px;
  opacity: 1;
  z-index: 99;
}
@media only screen and (max-width: 768px) {
  .content_menu {
    height: 30%;
    width: 80%;
     top:40%;
    transform: translate(-50%,0%);
  }
  .area_menu1 {
    top: -2%;
    left: -1%;
  }
  .area_menu2 {
    top: -2%;

    right: -1%;
  }
  .area_menu3 {
    bottom: -2%;
    left: -1%;
  }
  .area_menu4 {
    bottom: -2%;
    right: -1%;
  }
  .area_1:active > .area_menu1 {
    width: 215%;
    height: 233%;
  }
  .area_2:active > .area_menu2 {
    width: 215%;
    height: 233%;
  }
  .area_3:active > .area_menu3 {
    width: 215%;
    height: 233%;
  }
  .area_4:active > .area_menu4 {
    width: 215%;
    height: 233%;
  }
}
@media screen and (orientation: landscape) and (max-height: 768px) {
.content_menu {
    width: 70%;
    top:20%;
    transform: translate(-50%,0%);
  }
}
@media only screen and (max-width: 450px) {
  .content_menu {
    height: 80%;
    grid-template-columns: 100%;
    grid-template-rows: 20% 20% 20% 20%;
    grid-row-gap: 6.6%;
    top:6%;
    transform: translate(-50%,0%);
  }
  .area_title {
    font-size: 30px;
  }
  .area_menu {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 20% auto;
  }
  .area_menu li {
    font-size: 25px;
    line-height: 5vh;
  }
  .area_menu li:hover > a:after {
    width: 0%;
  }
  .left {
    line-height: 75px;
    font-size: 30px;
  }
  .left:after {
    content: "";
    display: block;
    width: 50%;
    height: 2.25px;
    background-color: rgba(185, 163, 131, 1);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .right {
    grid-template-columns: 100%;
  }
  .area_menu1 {
    left: 25%;
    top: 2%;
  }
  .area_menu2 {
    right: 25%;
    top: -131.5%;
  }
  .area_menu3 {
    left: 25%;
    bottom: -132.5%;
  }
  .area_menu4 {
    right: 25%;
    bottom: 0.5%;
  }
  .area_1:hover > .area_menu1 {
    left: 0;
    width: 100%;
    height: 497%;
  }
  .area_2:hover > .area_menu2 {
    right: 0;
    width: 100%;
    height: 497%;
  }
  .area_3:hover > .area_menu3 {
    left: 0;
    width: 100%;
    height: 497%;
  }
  .area_4:hover > .area_menu4 {
    right: 0;
    width: 100%;
    height: 497%;
  }
}
@media screen and (orientation: landscape) and (max-height: 450px) {
  .content_menu {
    height: 60%;
    width: 80%;
    grid-template-columns: 20% 20% 20% 20%;
    grid-template-rows: 100%;
    grid-column-gap: 6.6%;
    top:13%;
    transform: translate(-50%,0%);
  }
  .area_title {
    line-height: 50px;
  }
  .area_menu li {
    line-height: 2vh;
  }
  .area_menu1 {
    top: 25%;
    left: 0;
  }
  .area_menu2 {
    top: 25%;
    left: -133%;
  }
  .area_menu3 {
    bottom: 25%;
    left: -266%;
  }
  .area_menu4 {
    bottom: 25%;
    left: -399%;
  }
  .area_1:hover > .area_menu1 {
    top: 0%;
    height: 100%;
    width: 499%;
  }
  .area_2:hover > .area_menu2 {
    top: 0%;
    height: 100%;
    width: 499%;
  }
  .area_3:hover > .area_menu3 {
    bottom: 0%;
    height: 100%;
    width: 499%;
  }
  .area_4:hover > .area_menu4 {
    bottom: 0%;
    height: 100%;
    width: 499%;
  }
}
</style>
