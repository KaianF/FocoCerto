import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    pesquisa:{
      codigo: ''
    },
    busca:{
      pesquisa:'',
    },
    checado:false
  },
  mutations:{
    SET_PESQUISA(state,obj){
      state.pesquisa = obj
    },
    SET_BUSCA(state,obj){
      state.busca = obj
    },
    SET_CHECK(state,obj){
      state.checado = obj
    }
  }
})