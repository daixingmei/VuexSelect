import Vue from 'vue'
import App from './App.vue'
import store from './store/'
import VueResource from 'vue-resource'
Vue.use(VueResource)

import './assets/css/animate.css'
new Vue({
    store,
    el: '#app',
    render: h => h(App)
})
