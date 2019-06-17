
<template>
  <div class="HOME">
    <div class="menu">
      <input class="menu-open" type="checkbox" href="#" name="menu-open" id="menu-open">
      <label class="menu-open-button" for="menu-open">
        <ol class="menu-text" href target="_">
          <li class="menu-li" style="font-size: 30px">Vá ao café</li>
          <li class="menu-li" style="font-size: 10px">ENJOY YOUR REST TIME</li>
        </ol>
      </label>
      <a class="menu-item menu-item1" @click="$router.push({ name: 'area'})" title="搜尋">搜尋</a>
      <a class="menu-item menu-item2" @click="$router.push({ name: 'login'})" title="登入">登入</a>
    </div>
  </div>
</template>

<script>
import router from "../router";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default {
  data() {
    return {
      search: faSearch,
      usercircle: faUserCircle
    };
  },
  components: {
    FontAwesomeIcon
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

.HOME {
  width: 100%;
  height: 100%;
  cursor: default;
  background-image: url(../assets/im/Tbg.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 auto;
}

.menu {
  text-align: center;
  position: relative;
  height: 150px;
  width: 210px;
  top: 40%;
  transform: translate(0, -50%);
}
.menu-open {
  display: none;
}

.menu-open-button {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: scale(1, 1) translate3d(0, 0, 0);
  left: 0px;
  transition: ease-out 200ms;
  cursor: pointer;
}

.menu-open-button:hover {
  transform: scale(1.1, 1.1) translate3d(0, 0, 0);
}

.menu-text {
  position: relative;
  list-style-type: none;
  outline: 4px solid #fff;
  background: rgba(0, 0, 0, 0.2);
  padding: 20px 0px 25px;
  color: #fff;
  font-weight: bold;
  transition: all 0.5s;
}

.menu-open-button:hover > .menu-text {
  background: rgba(0, 0, 0, 0.4);
  transition: all 0.5s;
}

.menu-item {
  position: absolute;
  border: 2px solid #fff;
  line-height: 55px;
  font-size: 25px;
  font-weight: bold;
  width: 200px;
  height: 60px;
  background: rgba(0, 0, 0, 0.2);
  transform: scale(0.001, 0.001);
  transition: ease-out 300ms;
  margin-left: 5px;
  top: 100px;
  text-decoration: none;
  color: #fff;
  left: 0px;
}

.menu-item:hover {
  background: rgba(0, 0, 0, 0.4);
  opacity: 0.7;
  transition: all 0.5s;
}

.menu-item:active {
  padding: 10.5px 0px;
  font-size: 18px;
}

.menu-open:checked + .menu-open-button {
  transition-timing-function: linear;
  transform: scale(0.93, 0.93) translate3d(0, -20px, 0);
  transition-duration: 200ms;
}

.menu-open:checked ~ .menu-item {
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.375);
  transform: scale(1, 1) translate3d(0, 0, 0);
  transition-duration: 300ms;
}

.menu-open:checked ~ .menu-item1 {
  transform: translate3d(-160px, 120px, 0);
}

.menu-open:checked ~ .menu-item2 {
  transform: translate3d(160px, 120px, 0);
}

@media only screen and (max-width: 768px) {
  .menu-open-button,
  .menu-open-button:hover,
  .menu-open:checked + .menu-open-button {
    transform: scale(1, 1) translate3d(0, 0, 0);
  }
  .menu-item1,
  .menu-item1:hover,
  .menu-item1:active,
  .menu-open:checked ~ .menu-item1 {
    transform: scale(1, 1);
    font-size: 22px;
    background: rgba(0, 0, 0, 0.2);
    opacity: 1;
    line-height: 46px;
    transform: translate3d(-160px, 120px, 0);
  }
  .menu-item2,
  .menu-item2:hover,
  .menu-item2:active,
  .menu-open:checked ~ .menu-item2 {
    transform: scale(1, 1);
    font-size: 22px;
    background: rgba(0, 0, 0, 0.2);
    opacity: 1;
    line-height: 46px;
    transform: translate3d(160px, 120px, 0);
  }
  .menu-open-button:hover > .menu-text {
    background: rgba(0, 0, 0, 0.2);
  }
}
@media only screen and (max-width: 450px) {
  .menu {
    top: 35%;
  }

  .menu-open-button,
  .menu-open-button:hover,
  .menu-open:checked + .menu-open-button {
    transform: scale(0.9, 0.9) translate3d(0, 0, 0);
  }
  .menu-item1,
  .menu-item1:hover,
  .menu-item1:active,
  .menu-open:checked ~ .menu-item1 {
    transform: scale(1, 1);
    font-size: 22px;
    background: rgba(0, 0, 0, 0.2);
    opacity: 1;
    line-height: 48px;
    transform: translate3d(0, 100px, 0);
  }

  .menu-item2,
  .menu-item2:hover,
  .menu-item2:active,
  .menu-open:checked ~ .menu-item2 {
    transform: scale(1, 1);
    font-size: 22px;
    background: rgba(0, 0, 0, 0.2);
    opacity: 1;
    line-height: 48px;
    transform: translate3d(0, 180px, 0);
  }

  .menu-open-button:hover > .menu-text {
    background: rgba(0, 0, 0, 0.2);
  }
}
</style>