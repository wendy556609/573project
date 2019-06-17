import './registerServiceWorker'
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import axios from 'axios';

import "./firebase";
import 'vuetify/dist/vuetify.min.css';

import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App';
import store from './store';
import router from './router';


Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(Vuetify)

new Vue({ 
  router,
  store,
  render: h => h(App)
}).$mount('#app')
