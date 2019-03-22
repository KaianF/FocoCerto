<template>
	<div id="desc">
		<hmenu></hmenu>
		<div id="teste" style="z-index=-1;">
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
					<div class="kaian" style="display:flex" >
						<div class="ui placeholder segment" id="grafico">
							<div class="header">Gráficos de demissões da area:</div>
							<graf></graf>
						</div>
						<div class="ui mini list" id="tes">
							<div class="header" style="margin-bottom:40px;font-size:25px">Vagas de emprego</div>
							<div class="ui label" style="margin-bottom: 3rem">Aproximadamente {{vagas.length}} vagas de emprego disponiveis para essa área</div>
							<div v-for="vaga in vagas" @click="">
								<div class="item">{{vaga.titulo}}</div>
								<div class="item"><i id="i" class="calendar outline icon"></i>Data: {{vaga.data}}</div>
								<div class="item">Descrição:{{vaga.descricao}}</div>
								<div class="item"><i id="i" class="briefcase icon"></i>Empregador: {{vaga.empregador}}</div>
								<div class="item"><i id="i" class="eye icon"></i>Visto em:<a :href="vaga.link">{{vaga.link}}</a></div>
								<div class="item"><i id="i" class="marker icon"></i>Local: {{vaga.local}}</div>
								<div class="ui divider"></div>
							</div>
						</div>
					</div>
					<div class="ui divider"></div>
					<div class="header" style="font-size:25px;margin-bottom:1rem;">Lista de faculdades:</div>
					<div class="lua" style="height: 300px;overflow-y: auto;">
						<div class="ui list">
							<div class="ui label" style="margin-bottom: 3rem">Aproximadamente {{faculdades.length}} faculdades disponiveis para essa área</div>
							<div v-for="facul in faculdades">
								<div class="ui styled accordion" style="margin-bottom: 14px;"@click="moda">
									<div class="title">
										<i class="dropdown icon" @click.native="modas"></i>
										{{facul.nome}}
									</div>
									<div class="content" style="height: 200px;overflow-y: auto;">
										<p class="transition hidden"><div v-for="ies in facul.ies">
											Faculdade: {{ies.NO_IES}}<br>
											Municipio: {{ies.NO_MUNICIPIO_CURSO}}<br>
											UF: {{ies.SGL_UF_CURSO}}<br style="margin-bottom: 1rem">
											<div class="ui divider"></div>
										</div></p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
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
				vagas:null,
				faculdades:null,
				endpoint:'http://fococerto123.herokuapp.com/descricao?codigo=',
			}
		},
		methods:{
			getPost(){
				if(this.ids!=null){
					axios(this.endpoint+this.ids).then(response=>{
						this.desc = response.data;
						this.vagas = response.data.vaga;
						this.faculdades = response.data.faculdades;
						$('.ui.accordion').accordion();
						this.setgraf();
					})
					.catch(error=>{console.log(error)})
				}
				else{
					axios(this.endpoint+this.$store.state.pesquisa.codigo).then(response=>{
						this.vagas = response.data.vaga;
						this.faculdades = response.data.faculdades;
						this.desc = response.data;
						$('.ui.accordion').accordion();
						this.setgraf();
					}).catch(error=>{console.log(error)})
				}
			},
			moda:function(){
				$('.ui.accordion').accordion('refresh');
				console.log("aa")
			},
			setgraf(){
				const pl = {
					datasets:this.desc.chart.datasets,
					labels:this.desc.chart.labels,
					cdatasets:this.desc.chartCnae.datasets,
					clabels:this.desc.chartCnae.labels
				}
				$('.ui.accordion').accordion();
				this.$store.commit('SET_GRAFICO',pl)
			},
			getImgUrl(png){
				var images = require.context('../assets/icones',false,/\.png$/)
				console.log(png)
				return images('./'+png)
				$('.ui.accordion').accordion();
			}
		},
		created(){
			this.getPost()
			$('.ui.accordion').accordion();
			$('.ui .styled .accordion').ready(function(){
			});
		},
		mounted:function(){
			$('.ui.accordion').accordion();
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
#grafico{
	width: 50%;
	justify-content: center;
	color: black;
	align-self: flex-start;
}
.item{
	margin-bottom:15px;
}
#texto{
}
#hmenu{
	position: absolute;
	z-index: 1;
}
#filtro{
	margin-top: 15px;
}
.lua{
	font-size: 15px;
	width: 100%;
	height:400px;
	margin-bottom: 1px;
	overflow-y:auto;
}
#tes{
	height:400px;
	overflow-y:auto;
	width:50%;
	margin-left:5rem;
}
#i{
	margin-right:14px;
}
</style>