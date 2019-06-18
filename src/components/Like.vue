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
          <div class="MY">我的收藏</div>
          <div class="LIKE">
            <div
              v-for="shop in shopName"
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
      <Footer/>
    </div>
  </div>
</template>

<script>
import router from "../router.js";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Bar from "./Bar";
import Footer from "./Footer";
import { app } from "../firebase/index";
import firebase from "firebase";

const database = firebase.database(app); //建立功能

export default {
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
      shopId: "",
      likeData: [],
      //搜尋
      searchtext: "",
      searchData: [],
      //收藏
      likeLink: "/like/",
      shopName: [],
      useruid: sessionStorage.getItem("uid")
    };
  },
  methods: {
    //顯示資訊內容
    content(shop) {
      this.showintro = true;
      this.wrapper = false;
      // this.photo = shop.url
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
      this.limited_time = shop.limit;
      this.socket = shop.socket;
      this.standing_desk = shop.stand;
      this.mrt = shop.mrt;
      this.shopUrls =
        "https://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q=" +
        shop.address +
        "&z=16&output=embed&t=";
      this.shopId = shop.id;
      var link = this.likeLink + this.useruid.trim() + "/" + this.shopId;
      database.ref(link).on("value", snapshop => {
        if (snapshop.val()) {
          this.heartStyle = "like";
        } else if (snapshop.val() === null) {
          this.heartStyle = "dislike";
        }
      });
    },
    //隱藏資訊
    hide() {
      this.showintro = false;
      this.wrapper = true;
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
    readLike() {
      var link = this.likeLink + this.useruid.trim();
      database.ref(link).once("value", snapshop => {
        this.shopName = snapshop.val();
      });
    },
    getLike() {
      var like = this.likeData;
      var link = this.likeLink + this.useruid.trim() + "/" + this.shopId;
      database.ref(link).once("value", snapshop => {
        if (snapshop.val()) {
          database.ref(link).set({});
          this.readLike();
          this.hide();
        }
      });
    }
  },
  mounted() {
    this.readLike();
  },
  components: {
    FontAwesomeIcon,
    Bar,
    Footer
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
  min-height: 81.5%;
  width: 90%;
  padding: 20px 0;
  margin-bottom: 15px;
}
.MY {
  color: #fff;
  font-size: 23px;
  padding: 0 5px;
}
.LIKE {
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
}
.like {
  color: red;
}
.dislike {
  color: white;
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
  .LIKE {
    grid-template-columns: 49% 49%;
    grid-column-gap: 2%;
  }
  .content {
    min-height: 89.5%;
  }
  .INTRO {
    width: 80%;
  }
}
@media screen and (orientation: landscape) and (max-height: 768px) {
  .content {
    min-height: 86.5%;
  }
}
@media only screen and (max-width: 450px) {
  .LIKE {
    grid-template-columns: 100%;
    grid-row-gap: 10px;
  }
  .content {
    min-height: 87%;
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
@media screen and (orientation: landscape) and (max-height: 450px) {
  .content {
    min-height: 77.8%;
  }
}
</style>