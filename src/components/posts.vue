/* eslint-disable */
<template>
<!-- o componente posts e responsavel pela renderizacao da lista de resultados da pesquisa que foi feita inicialmente
	basicamente ele nos retorna os dados pesquisados, futuramente sera feita a tratacao de erros na hora de fazer requisicos para api -->
	<div id="posts">
		<hmenu></hmenu>
		<div id="menu">
			<div class="lista">
				<div class="ui items">
					<!-- aqui comeca uma renderizacao de lista/posts da nossa pesquisa -->
					<div class="item" v-for="posts in post.lista" :key="posts.codigo">
						<div class="ui tiny image link">
							<img :src="getImgUrl(posts.icon)" :alt="posts.icon">
						</div>
						<div class="middle aligned content">
							<router-link @click.native="codigo(posts.codigo)" :to="{name:'Desc',params:{ids:posts.codigo}}" class="header">{{posts.nome}}</router-link>
							<div class="ui divider"></div>
						</div>
					</div>
					<!-- aqui termina a lista de posts da nossa pesquisa -->
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
// aqui eu chamo a bibliteca axios e o componente menu horizontal hmenu
import hmenu from './hmenu.vue'
import axios from 'axios'
export default{
  components: {
    // declaro o componente
    hmenu
  },
  data () {
    return {
      // crio as variavies que serao usadas para pegar os dados da web api
      post: null,
      imgs: null,
      // caso a frase seja composta
      endpoint1: 'http://fococerto123.herokuapp.com/listaNLU?frase=' + this.$store.state.busca.pesquisa,
      // caso a frase seja simples
      endpoint2: 'http://fococerto123.herokuapp.com/lista?nome=' + this.$store.state.busca.pesquisa

    }
  },
  methods: {
    // get post atraves do axios consome a api e pega os dados que ela retorna com base
    // na pesquisa/dados passados a ela
    getPost () {
      // aqui verifico se a variavel que é responsável por monitorar pesquisa por palavra
      // foi ativada, se a mesma for ativada o metodo de pesquisa sera diferente usando assim
      // o endpoint 2
      if (this.$store.state.pesquisaPal) {
        axios(this.endpoint2).then(response => {
          this.post = response.data[0]
        }).catch(error => console.log(error))
      }
      // mesma coisa que o caso acima porem variavel diferente, nesse caso estamos monitorando
      // se a variavel de codigo cbo foi acionada ou nao
      if (this.$store.state.pesquisaCbo) {
        // na pagina descricao o router pega como parametro a url assim é possibilitado salvar links
        // para uma profissão desejada
        this.$router.push('/descricao/' + this.$store.state.busca.pesquisa)
      }
      // esse e o caso padrao caso a pesquisa seja feita por uma frase nao por uma palavra ou codigo,
      // acao delea sera a memsa que as outras
      if (this.$store.state.pesquisaNormal) {
        axios(this.endpoint1).then(response => {
          this.post = response.data[0]
          this.imgs = response.data[0]
        }).catch(error => { console.log(error) })
      }
    },
    // aqui e feita a busca pelos icones das profissoes, na api é retornado um numero que identifica
    // qual e a imagem respectiva a profissao a ser mostrada
    getImgUrl (png) {
      var images = require.context('../assets/icones')
      return images('./' + png)
    },
    // aqui eu armazeno o codigo da pesquisa na store para assim eu passar na url quando redirecionar para outra pagina
    codigo: function (id) {
      const pl = {
        codigo: id
      }
      this.$store.commit('SET_PESQUISA', pl)
    }
  },
  // assim que criado executa a funcao para pegar os dados da api
  created () {
    this.getPost()
  },
  computed: {
    imageSrC: function () {
      return '../assets/icones/'
    }
  }
}
</script>
