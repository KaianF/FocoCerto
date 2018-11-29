<template>
	<div id="app">
		<div id="content">
			<canvas width="400" height="100" ref="chart"></canvas>
			<canvas width="400" height="100" ref="cnae"></canvas>
		</div>
	</div>
</template>

<script>
	import Chart from 'chart.js';

	export default {
		data(){
			return{
				labels:this.$store.state.grafico.labels,
				datasets:this.$store.state.grafico.datasets,
				clabels:this.$store.state.grafico.clabels,
				cdatasets:this.$store.state.grafico.datasets
			}
		},
		name: 'app',
		mounted() {
			var chart = this.$refs.chart;
			var cnae=this.$refs.cnae;
			var ctx = chart.getContext("2d");
			var ctc = cnae.getContext("2d");
			var myChart = new Chart(ctx, {
				type: 'line',
				data:{
					labels:this.labels,
					datasets:this.datasets,
				},
				options:{
					legend:{labels:{fontColor:'black'}},
					responsive:true,
					hover:{
						mode:'index'
					},
					scales:{
						yAxes:[{
							ticks:{
								beginAtZero:false,
								fontColor:"black"
							}
						}],
						xAxes:[{
							ticks:{
								fontColor:"black"
							}
						}]
					}
				}
			});
			var Cnae = new Chart(ctc,{
				type:'bar',
				data:{
					labels:this.clabels,
					datasets:this.cdatasets,
				},
				options:{
					legend:{labels:{fontColor:'black'}},
					responsive:true,
					hover:{
						mode:'index'
					},
					title: {
						display:true,
						text:"Gráfico Cnae",
						fontStyle: "bold",
						fontColor: "black"
					},
					scales:{
						yAxes:[{
							ticks:{
								beginAtZero:false,
								fontColor:"black"
							}
						}],
						xAxes:[{
							ticks:{
								fontColor:"black"
							}
						}]
					}
				}
			})
		}
	}
</script>

<style>
#content {
	width: 100%;
	top: 1px;
	display: inline;
}
</style>