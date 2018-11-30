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
							<div v-for="vaga in vagas">
								<div class="header" style="margin-bottom:40px;font-size:25px">Vagas de emprego</div>
								<div class="item">{{vaga.titulo}}</div>
								<div class="item">Data: {{vaga.data}}</div>
								<div class="item">Descrição: {{vaga.descricao}}</div>
								<div class="item">Empregador: {{vaga.empregador}}</div>
								<div class="item">Visto em:<a :href="vaga.link">{{vaga.link}}</a></div>
								<div class="item">Local: {{vaga.local}}</div>
							</div>
						</div>
					</div>
					<div class="ui divider"></div>
					<div class="lua">
						<div class="ui list">
							<div class="header" style="font-size:25px;margin-bottom:1rem;">Lista de faculdades:</div>
							<div v-for="facul in faculdades">
								<div class="item">{{facul.nome}}</div>
								<button @click.nativ="modas" class="ui secondary button">Instituições</button>
								<div class="ui modal">
									<i class="close icon"></i>
									<div class="header">
										Insituições de ensino
									</div>
									<div class="description">
										<p>{{facul.ies}}</p>
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
					this.setgraf();
				})
				.catch(error=>{console.log(error)})
			}
			else{
				axios(this.endpoint+this.$store.state.pesquisa.codigo).then(response=>{
					this.vagas = response.data.vaga;
					this.faculdades = response.data.faculdades;
					this.desc = response.data;
					this.setgraf();
				}).catch(error=>{console.log(error)})
			}
		},
		modas:function(){
			$('.ui.modal').modal("show");
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
</style>