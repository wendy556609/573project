import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from 'axios'

import "./firebase"

Vue.config.productionTip = false
Vue.prototype.$axios = axios
// Vue.use(VueResource)

new Vue({ 
  router,
  store,
  render: h => h(App)
}).$mount('#app')
