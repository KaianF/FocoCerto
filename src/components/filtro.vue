/* eslint-disable */
<template>
	<div id="filtro">
		<div class="ui simple dropdown item">
			<funil style="pointer-events: none" class="funnel" w="50px" h="50px"></funil>
			<div class="menu">
				<div class="item">
					<div class="ui slider checkbox">
						<input type="checkbox" name="newsletter" v-on:click="filtro">
						<label>Pesquisas direta</label>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import funil from './vue-ionicons/dist/md-funnel.vue'
	export default{
		components:{
			funil
		},
		methods:{
			filtro(){
				const pl = !this.$store.state.checado
				this.$store.commit('SET_CHECK',pl)
			}
		}
	}
</script>