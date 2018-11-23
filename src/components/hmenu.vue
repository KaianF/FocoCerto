/* eslint-disable */
<template>
  <div id="hmenu">
    <div class="menupesq" id="menupesqs">
      <span class="titulso"  style="cursor: pointer;" @click="volta">
        Foco Certo
      </span>
      <div class="areapesq">
        <div class="pesquisaaa">
          <input type="text" name="pesquisa" id="inputao">
          <search w="30px" h="30px" class="btnpesq" @click.native="pesquisa"></search>
        </div>
        <filtro></filtro>
        <div id="socials">
          <facebook w="50px" h="50px" class="centrovertical"></facebook>
          <github w="50px" h="50px" class="centrovertical"></github>
          <about w="50px" h="50px" class="centrovertical"></about>
        </div>
      </div>
    </div>
  </div> 
</template>
<script type="text/javascript">
  import filtro from './filtro.vue'
  import facebook from 'vue-ionicons/dist/logo-facebook.vue'
  import github from 'vue-ionicons/dist/logo-github.vue'
  import about from 'vue-ionicons/dist/md-code.vue'
  import search from 'vue-ionicons/dist/md-search.vue'
  import posts from './posts.vue'
  export default{
    mouted(){
      this.filtro()
      console.log("fas")
    },
    data(){
      return{
        texto:null
      }
    },
    components:{
      filtro,
      search,
      posts,
      about,
      github,
      facebook
    },
    methods:{
      filtrso(){

        if(this.$store.state.checado == true)
          $('.ui.checkbox').checkbox('toggle');
      },
      volta(){
        const pl = {
          pesquisa:""
        }
        this.$store.commit('SET_BUSCA',pl)
        this.$router.push('/')
      },
      pesquisa(){
        const pl = {
          pesquisa: this.texto
        }
        this.$store.commit('SET_BUSCA',pl)
      }
    }
  }
</script>
<style type="text/css">
#socials{
  display: flex;
  margin-left: 200px;
  justify-content: flex-end;
  filter: invert(100%);
  align-content: stretch;  
  align-items: center;
}
</style>
