/* eslint-disable */
<template>
	<div id="posts">
		<hmenu></hmenu>
		<div id="menu">
			<div class="lista">
				<div class="ui items">
					<div class="item" v-for="posts in post.lista" :key="posts.codigo">
						<div class="ui tiny image link">
							<img :src="getImgUrl(posts.icon)" :alt="posts.icon">
						</div>
						<div class="middle aligned content">
							<router-link @click.native="codigo(posts.codigo)" :to="{name:'Desc',params:{ids:posts.codigo}}" class="header">{{posts.nome}}</router-link>
							<div class="ui divider"></div>	
						</div>
					</div>
				</div>
			</div>
		</div>		
	</div>
</template>
<script type="text/javascript">
	import hmenu from './hmenu.vue'
	import axios from 'axios'
	export default{
		components:{
			hmenu
		},
		data(){
			return{
				post:null,
				imgs:null,
				endpoint1:'http://fococerto123.herokuapp.com/listaNLU?frase='+this.$store.state.busca.pesquisa,
				endpoint2:'http://fococerto123.herokuapp.com/lista?nome='+this.$store.state.busca.pesquisa,

			}
		},
		methods:{
			getPost(){
				if(this.$store.state.pesquisaPal){
					axios(this.endpoint2).then(response=>{
						this.post=response.data[0]
					}).catch(error=>console.log(error))
				}
				if(this.$store.state.pesquisaCbo){
					this.$router.push('/descricao/'+this.$store.state.busca.pesquisa)
				}
				if(this.$store.state.pesquisaNormal){
					axios(this.endpoint1).then(response=>{
						this.post=response.data[0]
						this.imgs=response.data[0];
					}).catch(error=>{console.log(error)})
				}
			},
				getImgUrl(png){
					var images = require.context('../assets/icones')
					return images('./'+png)
				},
				codigo:function(id){
					const pl={
						codigo:id
					}
					this.$store.commit('SET_PESQUISA',pl)
				}
			},
			created(){
				this.getPost()
			},
			computed:{
				imageSrC:function(){
					return '../assets/icones/'
				}
			}
		}
	</script>
