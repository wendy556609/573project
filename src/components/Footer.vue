<template>
  <div class="FOOTER u-cf">
    <div class="wrapper">Copyright © 2019 Vá ao café All rights reserved.</div>
  </div>
</template>

<script>
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
.FOOTER {
  bottom: 0;
}
.wrapper {
  color: #fff;
  width: 90%;
  margin: 0 auto;
  text-align: center;
  padding: 5px 0 10px;
}
@media only screen and (max-width: 450px) {
  .wrapper {
    font-size: 3vw !important;
  }
}
@media screen and (orientation: landscape) and (max-height: 450px) {
  .wrapper {
    font-size: 2vh !important;
  }
}
</style>