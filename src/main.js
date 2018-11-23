import Vue from 'vue'
import router from './router'
import store from './vuex/store'
import Vuex from 'vuex'
import FocoCerto from './FocoCerto.vue'
import Router from 'vue-router'


Vue.config.productionTip = false

new Vue({
	el:'#app',
  render: h => h(FocoCerto),
  router,
  store
}).$mount('#app')
