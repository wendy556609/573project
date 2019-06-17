<template>
  <div class="MAIN">
    <transition name="fade">
      <div v-if="showintro" class="showintro">
        <div class="INTRO">
          <div class="intro_top">
            <font-awesome-icon :icon="closeBtn1" class="closeBtn closeBtn1" @click="hide"/>
          </div>
          <div class="intro_content">
            <div class="content_box">
              <div class="title">{{this.contain}}</div>
              <button @click="getLike" class="like_btn">
                <font-awesome-icon :icon="like" :class="heartStyle"/>&nbsp;收藏
              </button>
            </div>
            <div class="content_box">
              <div class="in">
                <div class="star_left">WIFI穩定</div>
                <div class="star_right">{{this.wifi}}</div>
              </div>
              <div class="in">
                <div class="star_left">通常有位</div>
                <div class="star_right">{{this.seat}}</div>
              </div>
              <div class="in">
                <div class="star_left">安靜程度</div>
                <div class="star_right">{{this.quiet}}</div>
              </div>
              <div class="in">
                <div class="star_left">咖啡好喝</div>
                <div class="star_right">{{this.tasty}}</div>
              </div>
              <div class="in">
                <div class="star_left">價格便宜</div>
                <div class="star_right">{{this.cheap}}</div>
              </div>
              <div class="in">
                <div class="star_left">裝潢音樂</div>
                <div class="star_right">{{this.music}}</div>
              </div>
            </div>
            <div class="content_box">
              <div class="in">
                <div class="star_left">有無限時間</div>
                <div class="star_right">{{this.limit}}</div>
              </div>
              <div class="in">
                <div class="star_left">插座多</div>
                <div class="star_right">{{this.socket}}</div>
              </div>
              <div class="in">
                <div class="star_left">可站立工作</div>
                <div class="star_right">{{this.stand}}</div>
              </div>
              <div class="in">
                <div class="star_left">捷運站</div>
                <div class="star_right">{{this.mrt}}</div>
              </div>
            </div>
            <div class="content_box">
              <div class="in">
                <div class="week">
                  <div class="star_left">週一</div>
                  <div class="star_right">{{this.mond}}</div>
                </div>
                <div class="week">
                  <div class="star_left">週二</div>
                  <div class="star_right">{{this.tued}}</div>
                </div>
                <div class="week">
                  <div class="star_left">週三</div>
                  <div class="star_right">{{this.wedd}}</div>
                </div>
                <div class="week">
                  <div class="star_left">週四</div>
                  <div class="star_right">{{this.thud}}</div>
                </div>
                <div class="week">
                  <div class="star_left">週五</div>
                  <div class="star_right">{{this.frid}}</div>
                </div>
                <div class="week">
                  <div class="star_left">週六</div>
                  <div class="star_right">{{this.satd}}</div>
                </div>
                <div class="week">
                  <div class="star_left">週日</div>
                  <div class="star_right">{{this.sund}}</div>
                </div>
                <div class="week">{{this.time}}</div>
              </div>
              <div class="in" style="margin:0">
                <div class="week">
                  地址：
                  <br>
                  {{this.address}}
                </div>
                <div class="week" style="word-break: break-all;">
                  官網：
                  <br>
                  <a :href="this.url">{{this.url}}</a>
                </div>
              </div>
            </div>
            <div class="content_box">
              <iframe
                width="100%"
                height="400"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                :src="this.shopUrls"
              ></iframe>
            </div>
          </div>
          <div class="intro_btm">
            <font-awesome-icon :icon="closeBtn2" class="closeBtn closeBtn2" @click="hide"/>
          </div>
        </div>
      </div>
    </transition>
    <div class="wrapper">
      <Bar/>
      <div class="content">
        <div class="searchbar">
          <input
            v-model="searchtext"
            v-on:keyup.13="btn"
            type="text"
            class="searchTerm"
            placeholder="Search"
          >
          <button @click="btn" type="submit" class="searchButton">
            <font-awesome-icon :icon="search"/>
          </button>
          <div class="SEARCH">
            <div
              v-for="shop in searchData"
              :key="shop.id"
              @click="content(shop)"
              class="search_content"
              id="search_content"
            >
              <a class="name">{{shop.name}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Bar from "./Bar";
import { app } from "../firebase/index";
import firebase from "firebase";
const database = firebase.database(app); //建立功能

export default {
  props: ["area"],
  data() {
    return {
      //set
      wrapper: true,
      showintro: false,
      //icon
      search: faSearch,
      closeBtn1: faTimes,
      closeBtn2: faTimesCircle,
      like: faHeart,
      heartStyle: "",
      //變數
      shops: [{ value: "shops" }],
      areaName: sessionStorage.getItem("areaName"),
      //咖啡廳內容
      photo: "",
      contain: "",
      shopUrls: "",
      likeData: [],
      //搜尋
      searchtext: "",
      searchData: [],
      //收藏
      likeLink: "/like/",
      useruid: sessionStorage.getItem("uid")
    };
  },
  methods: {
    //顯示資訊內容
    content(shop) {
      this.showintro = true;
      this.wrapper = false;
      // this.photo = shop.url
      this.likeData = shop;

      this.contain = shop.name;
      this.wifi = shop.wifi;
      this.seat = shop.seat;
      this.quiet = shop.quiet;
      this.tasty = shop.tasty;
      this.cheap = shop.cheap;
      this.music = shop.music;
      this.time = shop.open_time;
      this.address = shop.address;
      this.url = shop.url;
      this.mond = shop.mond;
      this.tued = shop.tued;
      this.wedd = shop.wedd;
      this.thud = shop.thud;
      this.frid = shop.frid;
      this.satd = shop.satd;
      this.sund = shop.sund;
      this.limit = shop.limited_time;
      this.socket = shop.socket;
      this.stand = shop.standing_desk;
      this.mrt = shop.mrt;
      this.shopUrls =
        "https://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q=" +
        shop.address +
        "&z=16&output=embed&t=";
      this.shopId = shop.id;
      if (sessionStorage.getItem("isLogin") === "true") {
        var link = this.likeLink + this.useruid.trim() + "/" + this.shopId;
        database.ref(link).on("value", snapshop => {
          if (snapshop.val()) {
            this.heartStyle = "like";
          } else if (snapshop.val() === null) {
            this.heartStyle = "dislike";
          }
        });
      }
    },
    //隱藏資訊
    hide() {
      this.showintro = false;
      this.wrapper = true;
    },
    getData() {
      // 取得咖啡廳資料
      this.$axios.get("./static/coffee.json").then(response => {
        this.shops = response.data[this.areaName];
        this.searchData = this.shops;
      });
    },
    btn() {
      var search = this.searchtext;
      if (search) {
        search = search.trim().toLowerCase();
        this.searchData = this.shops.filter(function(shop) {
          if (shop.name.toLowerCase().indexOf(search) != -1) {
            return shop;
          }
        });
      } else this.searchData = this.shops;
    },
     getLike() {
      if (sessionStorage.getItem("isLogin") === "true") {
        var like = this.likeData;
        var link = this.likeLink + this.useruid.trim() + "/" + this.shopId;
        database.ref(link).once("value", function(snapshop) {
          if (snapshop.val()) {
            database.ref(link).set({});
          } else if (snapshop.val() === null) {
            database.ref(link).update(like);
          }
        });
      }
    }
  },
  mounted() {
    this.getData();
  },
  components: {
    FontAwesomeIcon,
    Bar
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
  font-family: arial, "Microsoft JhengHei", "微軟正黑體", sans-serif !important;
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
  width: 100%;
  height: 100vh;
  cursor: default;
}

.content {
  height: auto;
  width: 90%;
  top: 0;
  padding: 20px 0;
  margin-bottom: 15px;
}

.searchbar {
  width: 100%;
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
  top: 20px;
  display: grid;
  grid-template-columns: 32.5% 32.5% 32.5%;
  grid-column-gap: 1.25%;
  grid-row-gap: 15px;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
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
.name {
  width: 100%;
  height: auto;
  color: white;
}

/*----------介紹頁面----------*/

.showintro {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  overflow-y: auto;
  padding: 25px 0;
}

.INTRO {
  position: relative;
  width: 60%;
  height: auto;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 2;
}

.intro_top {
  position: relative;
  width: 100%;
  top: 25px;
}

.closeBtn {
  cursor: pointer;
  z-index: 3;
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

.content_box {
  width: 100%;
  height: auto;
  color: black;
  padding: 20px 0;
}

.content_box:not(:last-child) {
  border-bottom: 1px solid rgba(121, 121, 121, 0.6);
  display: grid;
  grid-template-columns: 48% 48%;
  grid-column-gap: 2%;
}

.content_box:first-child {
  padding: 30px 0 20px;
  grid-template-columns: 100%;
}

.title {
  width: 100%;
  height: auto;
  font-size: 28px !important;
  font-weight: bold;
}

.like_btn {
  width: 53.5px;
  height: auto;
  background-color: rgba(185, 163, 131, 1);
  color: #000;
  padding: 7px 7px 3.5px;
  font-size: 12px;
  margin-top: 10px;
  margin-left: 0;
  border-radius: 5px;
  outline: none;
}

.like {
  color: red;
}

.dislike {
  color: rgba(255, 255, 255, 0.8);
}

.in {
  position: relative;
  width: 100%;
  top: 0;
}

.star_left {
  float: left;
  width: 40%;
}
.star_right {
  float: right;
  width: 60%;
  text-align: right;
  color: rgba(185, 163, 131, 1);
}
.week {
  width: 100%;
  float: left;
  margin-bottom: 3px;
}

@media only screen and (max-width: 768px) {
  .SEARCH {
    grid-template-columns: 49% 49%;
    grid-column-gap: 2%;
  }
  .INTRO {
    width: 80%;
  }
}
@media only screen and (max-width: 450px) {
  .SEARCH {
    grid-template-columns: 100%;
    grid-row-gap: 10px;
  }
  .INTRO {
    width: 95%;
  }
  .content_box:not(:last-child) {
    display: grid;
    grid-template-columns: 100%;
  }
  .content_box:first-child {
    padding: 20px 0 20px;
  }
  .week {
    margin-bottom: 3px;
  }
}
</style>