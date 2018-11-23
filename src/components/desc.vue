/* eslint-disable */
<template>
	<div id="desc">
		<hmenu></hmenu>
		<div id="teste">
			<div id="texto">
				<div class="ui items">
					<div class="item">
						<div class="ui tiny image">
							<img style="z-index: -1" :src="getImgUrl(desc.icon)"  />
						</div>
						<div class="middle aligned content">
							<a class="header">{{desc.ocupacao.cbo}}</a>
							<div class="description">
								<p>Condiçoes exercicio:</p>
								<span>{{desc.ocupacao.condicoes_exercicio}}</span>
								<br><br>
								<p>Descriçao sumária:</p>
								<span>{{desc.ocupacao.descricao_sumaria}}</span>
								<br><br>
								<p>Formaçao/experiencia:</p>
								<span>{{desc.ocupacao.formacao_experiencia}}</span>
							</div>
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
		name:'Desc',
		prop:['id'],
		data(){
			return{
				desc:null,
				endpoint:'http://fococerto123.herokuapp.com/descricao?codigo='+this.$store.state.pesquisa.codigo,
			}
		},
		methods:{
			getPost(){
				axios(this.endpoint).then(response=>{
					this.desc = response.data;
				})
				.catch(error=>{console.log(error)})
			},
			getImgUrl(png){
				var images = require.context('../assets/icones',false,/\.png$/)
				console.log(png)
				return images('./'+png)
			}
		},
		created(){
			this.getPost()
		}
	}
</script>
<style type="text/css">
#teste{
	display: flex;
	height: 100%;
	overflow: auto;
	justify-content: center;
}
#texto{
	margin-top: 15rem;
	font-size: 25px;
	width: 85%;
	height: 100%;
}
#desc span{
	display: inline-block;
	text-indent: 10px;
}
</style>