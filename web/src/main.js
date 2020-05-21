import Vue from 'vue'
import App from './App.vue'
import './assets/scss/style.scss'
import router from './router'

import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/web/api'
})

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import ListCard from './components/ListCard.vue'
Vue.component('m-list-card', ListCard)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
