<template>
	<div id="app">
		<transition appear name="trnas" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight" mode="out-in">
			<template>
				<menuv v-if="!pip"></menuv>
				<router-view ></router-view>
				<posts v-if="pip"></posts>
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
		computed:{
			pip(){
				if(this.$store.state.busca.pesquisa != "")
					return true;
				if(this.$route.params.ids != null)
					return true;
				return false
			},
			router(){
				if(this.$store.state.ativa)
					return true
				else
					return false
				return false
			}

			
		},
	}
</script>
