<template>
	<div id="desc">
		<hmenu></hmenu>
		<div id="teste">
			<div id="texto">
				<div class="ui items">
					<div class="item">
						<div class="ui tiny image">
							<img :src="getImgUrl(desc.icon)"  />
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
						</div>
					</div>
					<div class="ui divider"></div> 
					<div class="kaian" style="display:flex;">
						<div class="ui placeholder segment" id="grafico">
							<div class="header">Gráficos de demissões da area:</div>
							<graf></graf>
						</div>
						<div class="header" style="margin-left: 5rem"><div class="ui list">
							<div class="item">
								<i class="users icon"></i>
								<div class="content">
									Semantic UI
								</div>
							</div>
							<div class="item">
								<i class="marker icon"></i>
								<div class="content">
									New York, NY
								</div>
							</div>
							<div class="item">
								<i class="mail icon"></i>
								<div class="content">
									<a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
								</div>
							</div>
							<div class="item">
								<i class="linkify icon"></i>
								<div class="content">
									<a href="http://www.semantic-ui.com">semantic-ui.com</a>
								</div>
							</div>
						</div></div> 
					</div>
				</div> 
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import hmenu from './hmenu.vue'
	import axios from 'axios'
	import Chart from 'chart.js'
	import graf from './grafico.vue'
	export default{
		components:{
			hmenu,
			graf
		},
		name:'Desc',
		props:['ids'],
		data(){
			return{
				desc:null,
				endpoint:'http://fococerto123.herokuapp.com/descricao?codigo=',
			}
		},
		methods:{
			getPost(){
				if(this.ids!=null){
					axios(this.endpoint+this.ids).then(response=>{
						this.desc = response.data;
						this.setgraf();
					})
					.catch(error=>{console.log(error)})
				}
				else{
					axios(this.endpoint+this.$store.state.pesquisa.codigo).then(response=>{
						this.desc = response.data;
						this.setgraf();
					}).catch(error=>{console.log(error)})
				}
			},
			setgraf(){
				const pl = {
					datasets:this.desc.chart.datasets,
					labels:this.desc.chart.labels,
					cdatasets:this.desc.chartCnae.datasets,
					clabels:this.desc.chartCnae.labels
				}
				this.$store.commit('SET_GRAFICO',pl)
			},
			getImgUrl(png){
				var images = require.context('../assets/icones',false,/\.png$/)
				console.log(png)
				return images('./'+png)
			}
		},
		created(){
			this.getPost()
		},

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
	z-index: -1;
}
#desc span{
	display: inline-block;
	text-indent: 10px;
}
#grafico{
	width: 50%;
	justify-content: center;
	color: black;
	align-self: flex-start;
}
</style>