(function(t){function e(e){for(var a,o,r=e[0],c=e[1],l=e[2],u=0,d=[];u<r.length;u++)o=r[u],i[o]&&d.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},s=[];function o(t){return r.p+"js/"+({}[t]||t)+"."+{"chunk-2d0aa661":"10ff9ef6","chunk-2d21dc81":"9247e2c0","chunk-2d21f2da":"649174e3"}[t]+".js"}function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,a){n=i[t]=[e,a]});e.push(n[2]=a);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=o(t),s=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+a+": "+s+")");o.type=a,o.request=s,n[1](o)}i[t]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:c})},12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"112b":function(t,e,n){"use strict";var a=n("3f97"),i=n.n(a);i.a},"1b4f":function(t,e,n){"use strict";var a=n("5355"),i=n.n(a);i.a},"2ed0":function(t,e,n){},3790:function(t,e,n){t.exports=n.p+"img/A3.20279b70.jpg"},"3f97":function(t,e,n){},5355:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("14c6"),n("08c1"),n("4842"),n("d9fc");var a=n("2b0e"),i=n("bb71");n("da64");a["a"].use(i["a"],{iconfont:"md"});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-content",[n("router-view")],1)],1)},o=[],r=n("2f62"),c={name:"App"},l=c,u=n("2877"),f=n("6544"),d=n.n(f),p=n("7496"),m=n("549c"),h=Object(u["a"])(l,s,o,!1,null,null,null),v=h.exports;d()(h,{VApp:p["a"],VContent:m["a"]});var g=n("8c4f"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"HOME"},[n("div",{staticClass:"menu"},[n("input",{staticClass:"menu-open",attrs:{type:"checkbox",href:"#",name:"menu-open",id:"menu-open"}}),t._m(0),n("a",{staticClass:"menu-item menu-item1",attrs:{title:"搜尋"},on:{click:function(e){return t.$router.push({name:"area"})}}},[t._v("\n      搜尋\n      "),n("font-awesome-icon",{attrs:{icon:t.search,size:"1x"}})],1),n("a",{staticClass:"menu-item menu-item2",attrs:{href:"#singin",title:"登入"}},[t._v("\n      登入\n      "),n("font-awesome-icon",{attrs:{icon:t.usercircle,size:"1x"}})],1)])])},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"menu-open-button",attrs:{for:"menu-open"}},[n("ol",{staticClass:"menu-text",attrs:{href:"",target:"_"}},[n("li",{staticClass:"menu-li",staticStyle:{"font-size":"30px"}},[t._v("Vá ao café")]),n("li",{staticClass:"menu-li",staticStyle:{"font-size":"10px"}},[t._v("ENJOY YOUR REST TIME")])])])}],C=n("ad3d"),w=n("c074"),x={data:function(){return{search:w["b"],usercircle:w["d"]}},components:{FontAwesomeIcon:C["a"]}},y=x,k=(n("65ae"),Object(u["a"])(y,_,b,!1,null,"2f66c622",null)),O=k.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"grid-list-xs":""}},[n("v-layout",{attrs:{column:""}},[n("v-flex",[n("v-img",{attrs:{src:t.dog.url}})],1),n("v-flex",[n("h1",[t._v(t._s(t.dog.comment))]),n("p",{staticClass:"subtitle"},[t._v(t._s(t.dog.info))])])],1)],1)},j=[],E={props:["dog"],data:function(){return{}}},S=E,T=n("a523"),N=n("0e8f"),V=n("adda"),$=n("a722"),B=Object(u["a"])(S,A,j,!1,null,null,null),P=B.exports;d()(B,{VContainer:T["a"],VFlex:N["a"],VImg:V["a"],VLayout:$["a"]});var L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"grid-list-xs":""}},[n("v-layout",[n("v-flex",[n("div",{attrs:{id:"spinner_container"}},[t.loading?n("v-progress-circular",{staticClass:"spinner",attrs:{size:40,indeterminate:"",color:"pink"}}):t._e()],1),n("img",{attrs:{src:this.dogUrl}}),n("v-container",{staticStyle:{"min-height":"0"},attrs:{fluid:"","grid-list-lg":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{name:"title",label:"Describe me",id:"title"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),n("v-text-field",{attrs:{name:"author",label:"Author",hint:"your name",id:"author"},model:{value:t.author,callback:function(e){t.author=e},expression:"author"}}),n("v-btn",{attrs:{block:"",color:"primary"},on:{click:function(e){return t.post()}}},[t._v("\n                            POST A DOG\n                        ")])],1)],1)],1)],1)],1)],1)},M=[],I=n("bc3a"),F=n.n(I),z={data:function(){return{dogUrl:null,title:"",author:"",loading:!0}},mounted:function(){var t=this;F.a.get("https://dog.ceo/api/breed/appenzeller/images/random").then(function(e){e.data.status?(t.dogUrl=e.data.message,t.loading=!1):console.log("Error getting image")})},methods:{post:function(){}}},D=z,R=(n("112b"),n("8336")),U=n("490a"),G=n("2677"),J=Object(u["a"])(D,L,M,!1,null,"2f4f9987",null),q=J.exports;d()(J,{VBtn:R["a"],VContainer:T["a"],VFlex:N["a"],VLayout:$["a"],VProgressCircular:U["a"],VTextField:G["a"]});var H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"AREA"},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"top u-cf"},[n("div",{staticClass:"navbar"},[n("div",{staticClass:"nav_LOGO"},[n("a",{on:{click:function(e){return t.$router.push({name:"home"})}}},[t._v("Vá ao café")])]),t._m(0)])]),n("div",{staticClass:"down u-cf"},[n("div",{staticClass:"content"},[n("ul",{staticClass:"content_menu"},[n("li",{staticClass:"area_1"},[n("a",{attrs:{href:"#"}},[t._v("北部")]),n("div",{staticClass:"area_menu area_menu1"},[n("div",{staticClass:"left"},[t._v("北部")]),n("ul",{staticClass:"right"},t._l(t.norths,function(e){return n("li",{key:e},[n("a",{on:{click:function(n){return t.onSelectArea(e,t.index)}}},[t._v(t._s(e.info))])])}),0)])]),n("li",{staticClass:"area_2"},[n("a",{attrs:{href:"#"}},[t._v("東部")]),n("div",{staticClass:"area_menu area_menu2"},[n("div",{staticClass:"left"},[t._v("東部")]),n("ul",{staticClass:"right"},t._l(t.easts,function(e){return n("li",{key:e},[n("a",{on:{click:function(n){return t.onSelectArea(e,t.index)}}},[t._v(t._s(e.info))])])}),0)])]),n("li",{staticClass:"area_3"},[n("a",{attrs:{href:"#"}},[t._v("中部")]),n("div",{staticClass:"area_menu area_menu3"},[n("div",{staticClass:"left"},[t._v("中部")]),n("ul",{staticClass:"right"},t._l(t.mids,function(e){return n("li",{key:e},[n("a",{on:{click:function(n){return t.onSelectArea(e,t.index)}}},[t._v(t._s(e.info))])])}),0)])]),n("li",{staticClass:"area_4"},[n("a",{attrs:{href:"#"}},[t._v("南部")]),n("div",{staticClass:"area_menu area_menu4"},[n("div",{staticClass:"left"},[t._v("南部")]),n("ul",{staticClass:"right"},t._l(t.souths,function(e){return n("li",{key:e},[n("a",{on:{click:function(n){return t.onSelectArea(e,t.index)}}},[t._v(t._s(e.info))])])}),0)])])])])])])])},Y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"nav_menu"},[n("li",[n("a",{attrs:{href:"#"}},[t._v("登入")])])])}],K=(n("7f7f"),n("cebc")),Q={data:function(){return{norths:[],easts:[{id:0,name:"h",info:"花蓮縣"},{id:1,name:"sinpei",info:"臺東縣"}],mids:[{id:0,name:"taipei",info:"苗栗縣"},{id:1,name:"sinpei",info:"臺中市"},{id:2,name:"sinpei",info:"彰化縣"},{id:3,name:"sinpei",info:"南投縣"},{id:4,name:"sinpei",info:"雲林縣"}],souths:[{id:0,name:"taipei",info:"嘉義市"},{id:1,name:"sinpei",info:"嘉義縣"},{id:2,name:"sinpei",info:"臺南市"},{id:3,name:"sinpei",info:"高雄市"},{id:4,name:"sinpei",info:"屏東縣"}],itemList:[]}},methods:Object(K["a"])({},Object(r["b"])(["setTitleName"]),{getData:function(){var t=this;this.$axios.get("../static/north.json").then(function(e){t.norths=e.data.north,t.itemList=e.data.east,console.log(t.norths),console.log(t.itemList)})},onSelectArea:function(t){rt.push({name:"search",params:{name:t.name,area:t}})}}),mounted:function(){this.getData()}},W=Q,X=(n("1b4f"),Object(u["a"])(W,H,Y,!1,null,"72c7592e",null)),Z=X.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MAIN"},[n("transition",{attrs:{name:"fade"}},[t.showintro?n("div",{staticClass:"showintro"},[n("div",{staticClass:"INTRO"},[n("div",{staticClass:"intro_top"},[n("font-awesome-icon",{staticClass:"closeBtn closeBtn1",attrs:{icon:t.closeBtn1},on:{click:t.hide}})],1),n("div",{staticClass:"intro_content"},[n("img",{attrs:{src:t.photo}})]),n("div",{staticClass:"intro_btm"},[n("font-awesome-icon",{staticClass:"closeBtn closeBtn2",attrs:{icon:t.closeBtn2},on:{click:t.hide}})],1)])]):t._e()]),n("div",{staticClass:"wrapper"},[n("div",{staticClass:"top u-cf"},[n("div",{staticClass:"navbar"},[n("div",{staticClass:"nav_LOGO"},[n("a",{on:{click:function(e){return t.$router.push({name:"home"})}}},[t._v("Vá ao café")])]),t._m(0)])]),n("div",{staticClass:"down u-cf"},[n("div",{staticClass:"content"},[n("div",{staticClass:"searchbar"},[n("input",{staticClass:"searchTerm",attrs:{type:"text",placeholder:"Search"}}),n("button",{staticClass:"searchButton",attrs:{type:"submit"}},[n("font-awesome-icon",{attrs:{icon:t.search}})],1)]),n("div",{staticClass:"SEARCH"},t._l(t.cons,function(e){return n("div",{key:e.id,staticClass:"search_content search_content1",attrs:{id:"search_content1"},on:{click:function(n){return t.content(e)}}},[n("img",{staticStyle:{width:"100%",height:"auto"},attrs:{src:e.url}})])}),0)])])])],1)},et=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"nav_menu"},[n("li",[n("a",{attrs:{href:"#"}},[t._v("登入")])])])}],nt=n("b702"),at={props:["area"],data:function(){return{wrapper:!0,background:n("9192"),area:null,showintro:!1,search:w["b"],closeBtn1:w["c"],closeBtn2:nt["a"],circleup:w["a"],cons:[{id:0,url:"https://www.searchome.net/Article/doc17274/P.jpg"},{id:1,url:n("6cca")},{id:2,url:n("3790")}],photo:null}},methods:{content:function(t){this.showintro=!0,this.wrapper=!1,this.photo=t.url,console.log(this.showintro)},hide:function(){this.showintro=!1,this.wrapper=!0,console.log(this.showintro)}},components:{FontAwesomeIcon:C["a"]}},it=at,st=(n("b0e4"),Object(u["a"])(it,tt,et,!1,null,"3914f11a",null)),ot=st.exports;a["a"].use(g["a"]);var rt=new g["a"]({routes:[{path:"/",name:"home",component:O},{path:"/area",name:"area",component:Z},{path:"/search/:name",name:"search",props:!0,component:ot},{path:"/details/:id",name:"details",props:!0,component:P},{path:"/post",name:"post",component:q},{path:"/page1",name:"page1",component:function(){return n.e("chunk-2d0aa661").then(n.bind(null,"119d"))}},{path:"/page2",name:"page2",component:function(){return n.e("chunk-2d21dc81").then(n.bind(null,"d384"))}},{path:"/page3",name:"page3",component:function(){return n.e("chunk-2d21f2da").then(n.bind(null,"d95d"))}}]});a["a"].use(r["a"]);var ct=new r["a"].Store({state:{titleName:"DogApp"},getters:{titleName:function(t){return t.titleName}},mutations:{SET_TITLE_NAME:function(t,e){"home"==rt.name?t.titleName="DogApp":t.titleName=e}},actions:{setTitleName:function(t,e){var n=t.commit;n("SET_TITLE_NAME",e)}}}),lt=n("9483");Object(lt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d1e7"),n("a7fe");a["a"].config.productionTip=!1,a["a"].prototype.$axios=F.a,new a["a"]({router:rt,store:ct,render:function(t){return t(v)}}).$mount("#app")},"65ae":function(t,e,n){"use strict";var a=n("a775"),i=n.n(a);i.a},"6cca":function(t,e,n){t.exports=n.p+"img/A2.66524116.jpg"},9192:function(t,e,n){t.exports=n.p+"img/Tbg-b.4f7cbc0c.jpg"},a775:function(t,e,n){},b0e4:function(t,e,n){"use strict";var a=n("2ed0"),i=n.n(a);i.a}});
//# sourceMappingURL=app.189e0c83.js.map