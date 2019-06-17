import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import axios from 'axios'
import vueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
// Vue.use(VueResource)

new Vue({ 
  router,
  store,
  render: h => h(App)
}).$mount('#app')
