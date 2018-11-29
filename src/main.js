import Vue from 'vue'
import router from './router'
import store from './vuex/store'
import Vuex from 'vuex'
import FocoCerto from './FocoCerto.vue'
import Router from 'vue-router'
import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar,{
	color:'blue',
	failedColor:'red',
	height:'2px'
})

Vue.config.productionTip = false

new Vue({
	el:'#app',
  render: h => h(FocoCerto),
  router,
  store
}).$mount('#app')
