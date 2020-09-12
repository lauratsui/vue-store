import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

new Vue({ 
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App />'
})