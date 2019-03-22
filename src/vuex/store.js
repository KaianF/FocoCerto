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
    grafico:{
      datasets:null,
      labels:null,
      cdatasets:null,
      clabels:null
    },
    pesquisaCbo:false,
    pesquisaNormal:true,
    pesquisaPal:false,
    rota:null,
    ativa:false
  },
  mutations:{
    SET_PESQUISA(state,obj){
      state.pesquisa = obj
    },
    SET_PESQUISACBO(state,obj){
      state.pesquisaCbo = obj
    },
    SET_PESQUISAPAL(state,obj){
      state.pesquisaPal = obj
    },
    SET_PESQUISANORMAL(state,obj){
      state.pesquisaNormal = obj
    },
    SET_GRAFICO(state,obj){
      state.grafico = obj
    },
    SET_BUSCA(state,obj){
      state.busca = obj
    },
    SET_ROTA(state,obj){
      state.rota = obj
    },
    SET_ATIVA(state,obj){
      state.ativa = obj
    }
  }
})