<template>
  <div class="MAIN">
    <transition name="fade">
      <div v-if="showintro" class="showintro">
        <div class="INTRO">
          <div class="intro_top">
            <font-awesome-icon :icon="closeBtn1" class="closeBtn closeBtn1" @click="hide"/>
          </div>
          <div class="intro_content">
            <img :src="photo">
          </div>
          <div class="intro_btm">
            <font-awesome-icon :icon="closeBtn2" class="closeBtn closeBtn2" @click="hide"/>
          </div>
        </div>
        <!-- <a id="backtotop" title="返回頂部">
                <i class="fas fa-chevron-circle-up fa-2x" alt="Back to Top"></i>
        </a>-->
      </div>
    </transition>
    <div class="wrapper">
      <div class="top u-cf">
        <div class="navbar">
          <div class="nav_LOGO">
            <a @click="$router.push({ name: 'home'})">Vá ao café</a>
          </div>
          <ul class="nav_menu">
            <li>
              <!-- <a href="#">登入</a> -->
              <a>{{area.name}}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="down u-cf">
        <div class="content">
          <div class="searchbar">
            <input type="text" class="searchTerm" placeholder="Search">
            <button type="submit" class="searchButton">
              <font-awesome-icon :icon="search"/>
            </button>
          </div>
          <div class="SEARCH">
            <div
              v-for="con in cons"
              :key="con.id"
              @click="content(con)"
              class="search_content search_content1"
              id="search_content1"
            >
              <img :src="con.url" style="width: 100%;height: auto;">
            </div>
            <!-- <div class="search_content search_content2" id="search_content2">
              <img src="../assets/im/A2.jpg" alt style="width: 100%;height: auto;">
            </div>
            <div class="search_content search_content3" id="search_content3">
              <img src="../assets/im/A3.jpg" alt style="width: 100%;height: auto;">
            </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
// import Photo from '@/assets/im/A1.jpg'
export default {
  props: ["area"],
  data() {
    return {
      wrapper: true,
      // areas:"area",
      showintro: false,
      search: faSearch,
      closeBtn1: faTimes,
      closeBtn2: faTimesCircle,
      circleup: faChevronCircleUp,
      cons: [
        {
          id: 0,
          // url: require('../assets/im/A1.jpg')
          url: "https://www.searchome.net/Article/doc17274/P.jpg"
        },
        {
          id: 1,
          url: require("../assets/im/A2.jpg")
        },
        {
          id: 2,
          url: require("../assets/im/A3.jpg")
        }
      ],
      photo: null,
      a: []
      // photo: require('../assets/im/A1.jpg'),
    };
  },
  //  data:{

  // },
  methods: {
    content(con) {
      (this.showintro = true),
        (this.wrapper = false),
        (this.photo = con.url),
        // alert("ok");
        console.log(this.showintro);
    },
    hide() {
      (this.showintro = false),
        (this.wrapper = true),
        console.log(this.showintro);
    }
    // getData(){
    //       this.$axios.get('https://cafenomad.tw/api/v1.2/cafes').then(response=>{
    //         this.a=response.data;
    //         console.log(this.a)
    //       })
    //   }
  },
  components: {
    FontAwesomeIcon
  }
};
</script>

<style scoped>
@charset "UTF-8";
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-leave-to {
  opacity: 0;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter-to {
  opacity: 1;
}
.element::-webkit-scrollbar {
  display: none;
}
* {
  margin: auto;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  font-family: "微軟正黑體", cursive;
}


.u-cf:after {
  content: "";
  display: block;
  clear: both;
}


a::selection {
  color: #fff;
    	background: rgba(255, 255, 255, 0);

}

img::selection {
  color: #fff;
    	background: rgba(255, 255, 255, 0);

}

.MAIN {
  width: 100%;
  height: 100%;
  cursor: default;
  overflow-x: hidden;
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
  height: 100%;
  width: 90%;
}

.searchbar {
  width: 100%;
  top: 100px;
}

.searchTerm {
  float: left;
  background-color: rgb(0, 0, 0, 0.2);
  width: 100%;
  border: 1.5px solid #fff;
  padding: 5px 10px;
  border-radius: 5px;
  color: #8c8c8c;
  outline: none;
  font-weight: bold;
  caret-color: #8c8c8c;
}

.searchTerm::-webkit-input-placeholder {
  color: #d3d3d3;
}

.searchTerm:focus {
  color: #d3d3d3;
}

.searchButton {
  position: absolute;
  float: right;
  right: 0%;
  width: 35px;
  height: 30px;
  border: 0px;
  background-color: rgba(0, 0, 0, 0);
  text-align: center;
  color: #d3d3d3;
  cursor: pointer;
  font-size: 16px;
  outline: none;
}

.searchButton:active {
  font-size: 14px;
  padding: 2px 0px;
}

.SEARCH {
  top: 150px;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  width: 100%;
  margin: auto;
}

.search_content {
  width: 100%;
  border: 1px solid #fff;
  padding: 10px 10px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  cursor: pointer;
}

/*----------介紹頁面----------*/

.showintro {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  overflow-y: auto;
  padding: 25px 0;
}

.INTRO {
  position: relative;
  width: 60%;
  height: auto;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 2;
}

.intro_top {
  position: relative;
  width: 100%;
  height: 50px;
}

.closeBtn {
  cursor: pointer;
}

.closeBtn1 {
  position: absolute;
  font-size: 20px;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(121, 121, 121, 0.8);
}

.intro_content {
  width: 90%;
}

.intro_content img {
  position: relative;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: auto;
}

.intro_btm {
  position: relative;
  width: 100%;
  height: 50px;
  border-top: 1.5px solid rgba(121, 121, 121, 0.6);
}

.closeBtn2 {
  position: relative;
  font-size: 25px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: rgba(121, 121, 121, 0.8);
}

.closeBtn:hover {
  color: rgba(121, 121, 121, 0.6);
}

/*----------返回頂部----------*/

#backtotop {
  border-radius: 50%;
  display: scroll;
  position: fixed;
  right: 4%;
  color: rgba(255, 255, 255, 0.8);
  opacity: 1;
  cursor: pointer;
}

#backtotop:hover {
  opacity: 0.7;
}
</style>