<template>
  <div class="MAIN">
    <transition name="fade">
      <div v-if="showintro" class="showintro">
        <div class="INTRO">
          <div class="intro_top">
            <font-awesome-icon :icon="closeBtn1" class="closeBtn closeBtn1" @click="hide"/>
          </div>
          <div class="intro_content">
            <!-- <img :src="photo"> -->
            <li style="width: 100%;height: auto; color:black">{{this.contain}}</li>
            <button @click="getLike" class="like_btn">
                <font-awesome-icon :icon="like" :class="heartStyle"/>&nbsp;收藏
              </button>
            <iframe width="800" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" :src="this.shopUrls"></iframe>
          </div>
          <div class="intro_btm">
            <font-awesome-icon :icon="closeBtn2" class="closeBtn closeBtn2" @click="hide"/>
          </div>
        </div>
      </div>
    </transition>
    <div class="wrapper">
      <Bar/>
      <div class="down u-cf">
        <div class="content">
          <div class="searchbar">
            <input v-model="searchtext" v-on:keyup.13="btn" type="text" class="searchTerm" placeholder="Search"/>
            <button @click="btn" type="submit" class="searchButton">
              <font-awesome-icon :icon="search"/>
            </button>
              <div class="SEARCH">
            <div
              v-for="shop in shopName"
              :key="shop.id"
              @click="content(shop)"
              class="search_content search_content1"
              id="search_content1"
            >
              <li style="width: 100%;height: auto; color:white">{{shop.name}}</li>
          </div>
          
            </div>
          </div>
      </div>
    </div>
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

import Bar from './Bar'
import { app } from '../firebase/index';
import firebase from 'firebase';

const database = firebase.database(app);//建立功能

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
      like:faHeart,
      heartStyle: "",
      //變數
      shops: [{ value: "shops" }],  
      areaName: sessionStorage.getItem('areaName'),
      //咖啡廳內容
      photo:"",
      contain:"",
      shopUrls:"",
      shopId:"",
      likeData:[],
      //搜尋
      searchtext: '',
      searchData:[],
      //收藏
      likeLink:"/like/",
      shopName:[],
      useruid:sessionStorage.getItem('uid')
    };
  },
  methods: {
    //顯示資訊內容
    content(shop) {
      this.showintro = true
      this.wrapper = false
      // this.photo = shop.url
      this.contain= shop.name
      this.shopUrls="http://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q="+shop.address+"&z=16&output=embed&t="
      this.shopId=  shop.id
      var link=this.likeLink+this.useruid.trim()+"/"+this.shopId
      database.ref(link).on('value',snapshop =>{
         if(snapshop.val()){
            this.heartStyle="like"
            }
          else if(snapshop.val()===null){
            this.heartStyle="dislike"
            }
      })
    },
    //隱藏資訊
    hide() {
      this.showintro = false
      this.wrapper = true
    },
    btn(){
      var search=this.searchtext;
      if(search){
         search=search.trim().toLowerCase();
         this.searchData=this.shops.filter(function(shop){
           if(shop.name.toLowerCase().indexOf(search)!=-1){
             return shop;
           }
         })
      }
      else
        this.searchData=this.shops
    },
    readLike(){
      var link=this.likeLink+this.useruid.trim()
        database.ref(link).once('value',snapshop => {
        this.shopName=snapshop.val()
        })   
    },
    getLike(){
      var like=this.likeData;
      var link=this.likeLink+this.useruid.trim()+"/"+this.shopId;
       database.ref(link).once('value',snapshop=> {
        if(snapshop.val()){
          database.ref(link).set({})
          this.readLike();
          this.hide()
        }
    })
    },
  },
  mounted() {
    this.readLike();
  },
  components: {
    FontAwesomeIcon,
    Bar,
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
.dislike{
  color: white
}
</style>