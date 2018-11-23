/* eslint-disable */
<template>
	<div id="app">
		<transition appear name="trnas" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight" mode="out-in">
			<template>
				<menuv v-if="!mudatela"></menuv>
				<router-view></router-view>
				<posts v-if="mudatela"></posts>
			</template>
		</transition>

	</div>
</template>
<script>
	import posts from './components/posts.vue'
	import menuv from './components/menuv.vue'
	export default{
		name:'P',
		components:{
			posts,
			menuv
		},
		data(){
			return{
			}
		},
		computed:{
		mudatela(){
				if(this.$store.state.busca.pesquisa == '' || this.$store.state.busca.pesquisa == null||this.$store.state.busca.pesquisa == '')
					return false;
				else
					return true;
			}
		}
	}
</script>
