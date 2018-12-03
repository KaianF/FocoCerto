<template>
  <div id="hmenu">
    <div class="menupesq" id="menupesqs">
      <span class="titulso"  style="cursor: pointer;" @click="volta">
        Foco Certo
      </span>
      <div class="areapesq">
        <div class="pesquisaaa">
          <input type="text" v-model="texto" name="pesquisa" id="inputao" @keyup.enter="pesquisa">
          <search w="30px" h="30px" class="btnpesq" @click.native="pesquisa"></search>
        </div>
        <filtro></filtro>
        <div id="socials">
          <facebook style="cursor: pointer;margin: 3px;" w="50px" h="50px" class="centrovertical"></facebook>
          <github style="cursor: pointer;margin: 3px;" w="50px" h="50px" class="centrovertical"></github>
          <about style="cursor: pointer;margin: 3px;" w="50px" h="50px" class="centrovertical"  @click.native="about"></about>

          <div class="ui modal" id="about">
            <div class="header">Sobre nós</div>
            <div class="content">
              <p>Nossa equipe idealizadora do projeto é composta por 3 pessoas <p>

                <div class="ui cards">
                  <div class="card">
                    <div class="image">
                      <img src="../assets/Fernando.jpg">
                    </div>
                    <div class="content">
                      <a class="header">Fernando</a>
                      <div class="description">
                        back-end developer
                      </div>
                    </div>
                    <div class="extra content">
                      <a>
                        19 anos
                      </a>
                    </div>
                  </div>
                  <div class="card">
                    <div class="image">
                      <img src="../assets/Luana.jpg">
                    </div>
                    <div class="content">
                      <a class="header">Luana</a>
                      <div class="description">
                        Back-end developer
                      </div>
                    </div>
                    <div class="extra content">
                      <a>
                        19 anos
                      </a>
                    </div>
                  </div>
                  <div class="card">
                    <div class="image">
                      <img src="../assets/kaian.jpg">
                    </div>
                    <div class="content">
                      <a class="header">Kaian</a>
                      <div class="description">
                        Front-end developer
                      </div>
                    </div>
                    <div class="extra content">
                      <a>
                        18 anos
                      </a>
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
    import filtro from './filtro.vue'
    import facebook from 'vue-ionicons/dist/logo-facebook.vue'
    import github from 'vue-ionicons/dist/logo-github.vue'
    import about from 'vue-ionicons/dist/md-code.vue'
    import search from 'vue-ionicons/dist/md-search.vue'
    import posts from './posts.vue'
    export default{
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
        volta(){
          const pl = {
            pesquisa:""
          }
          this.$store.commit('SET_BUSCA',pl)
          this.$router.push('/')
        },
        about:function(){
          $('#about').modal('toggle')
        },
        pesquisa(){
          const pl = {
            pesquisa: this.texto
          }
          this.$store.commit('SET_BUSCA',pl)
          this.$router.push('/')
        },
      },
      mounted(){
        this.$store.commit('SET_PESQUISACBO',false)
        this.$store.commit('SET_PESQUISAPAL',false)
      }
    }
  </script>
  <style type="text/css">
  #socials{
    display: flex;
    right: 25px;
    filter: invert(100%);
    align-items: center;
    position: fixed;
  }
</style>
