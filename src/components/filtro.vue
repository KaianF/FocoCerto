/* eslint-disable */
<template>
	<div id="filtro">
		<div class="ui simple dropdown item">
			<funil style="pointer-events: none" class="funnel" w="50px" h="50px"></funil>
			<div class="menu">
				<div class="item">
					<div class="ui form">
						<div class="grouped fields">
							<label>Formas de pesquisa</label>
							<div class="field">
								<div class="ui slider checkbox">
									<input id="n" type="radio" name="throughput" checked="checked" v-on:click="filtro">
									<label>Pesquisa Normal</label>
								</div>
							</div>
							<div class="field">
								<div class="ui slider checkbox">
									<input id="p" type="radio" name="throughput" v-on:click="filtro">
									<label>Pesquisa por palavra</label>
								</div>
							</div>
							<div class="field">
								<div class="ui slider checkbox checked">
									<input id="cbo" type="radio" name="throughput" v-on:click="filtro">
									<label>Pesquisas por Cbo</label>
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
import funil from './vue-ionicons/dist/md-funnel.vue'
export default{
  components: {
    funil
  },
  data () {
    return {
      teste: null,
      alome: null
    }
  },
  methods: {
    filtro () {
      var p = document.getElementById('p').checked
      var cbo = document.getElementById('cbo').checked
      var no = document.getElementById('n').checked
      if (p == true) {
        document.getElementById('p').checked = true
        this.$store.commit('SET_PESQUISAPAL', true)
        this.$store.commit('SET_PESQUISACBO', false)
        this.$store.commit('SET_PESQUISANORMAL', false)
      }
      if (cbo == true) {
        this.$store.commit('SET_PESQUISACBO', true)
        this.$store.commit('SET_PESQUISANORMAL', false)
        this.$store.commit('SET_PESQUISAPAL', false)
      }
      if (no == true) {
        this.$store.commit('SET_PESQUISANORMAL', true)
        this.$store.commit('SET_PESQUISACBO', false)
        this.$store.commit('SET_PESQUISAPAL', false)
      }
    }
  }
}
</script>
