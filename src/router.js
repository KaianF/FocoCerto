import Vue from 'vue'
import Router from 'vue-router'
import FocoCerto from './FocoCerto.vue'
import Pesquisa from './components/hmenu.vue'
import desc from './components/desc.vue'
import graf from './components/grafico.vue'
Vue.use(Router)

export default new Router({
	routes: [
	{
		path:'/',
		name:FocoCerto,
		component:FocoCerto,
	},
	{
		path:'/pesquisa',
		name:Pesquisa,
		component:Pesquisa,
	},
	{
		path:'/descricao/:ids',
		name:'Desc',
		component:desc,
		props:true
	}

	]
})
