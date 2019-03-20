<template>
  <div id="menuv">
    <!-- esse componente e responsavel pelo menu vertical que fica a esquerda logo na tela inicial do projeto
    quando clicar no botao hamburger sera aberto o menu vertical com as informacoes la -->
    <dashboard class ="hambm" w="50px" h="50px" @click.native="abremenu"></dashboard>
    <div class="ui sidebar vertical menu">
      <close w="50px" h="50px" @click.native="fechamenu"></close>
      <div class="item header link" @click="modal">Como fazer sua pesquisa?
        <div class="ui modal" id="como">
          <div class="header">Como fazer sua pesquisa</div>
          <div class="content">
            <p>Primeiro coloque no campo de texto, uma sentença que expressa algo relacionado a coisas que você goste, por exemplo:</p>
            <p>Eu gosto de animais. em seguida você sera redirecionado para um capo onde havera listas de profissões relacionadas com essa sentença. incrível não?</p>
            <br>
            <p>Há também a possibilidade de fazer pesqusias mais diretas ou menos detalhadas, seja ela por codigo CBO ou por uma palavra relacionada apenas.</p>
            <P>Para fazer isso simplesmente clique no icone <ion-icon name="funnel"></ion-icon> e selecione a opção de pesquisa desejada, seja ela pesquisa normal(Esse modo de pesquisa por padrao já vem ativado),Pesquisa CBO(nesse tipo de pesquisa se utiliza o codigo da profissão disponibilizada no CBO)por exemplo:2111 esse codigo equivale a profissionais da matemática, e por fim a pesquisa por palavara, a pesquisa por palavra requer somente que você coloque a palavra relacionada com a area desejada por exemplo: Animal</P>
          </div>
        </div>
      </div>
      <!-- footer do menu com os icones -->
      <div class="ui fixed socials">
        <facebook title="facebook" w="50px" h="50px"></facebook>
        <github title="github" w="50px" h="50px"></github>
        <about title="about" w="50px"h="50px" style="cursor: pointer;" @click.native="about"></about>


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
      <div class="pusher">
        <span class="titulo">
          Foco Certo
        </span>
        <div class="pesquisas">
          <table>
            <tr>
              <td><input type="text" v-model="texto" name="pesquisa" class="pesquisa" @keyup.enter="pesquisa"></td>
              <td><filtro></filtro></td>
            </tr>
          </table>
        </div>
        <input type="submit" name="pesquisa" value="pesquisa" class="ui black button" @click="pesquisa">
      </div>
    </div>
  </template>
  <script type="text/javascript">
    import filtro from './filtro.vue'
    import dashboard from 'vue-ionicons/dist/md-menu.vue'
    import close from 'vue-ionicons/dist/md-close-circle-outline.vue'
    import facebook from 'vue-ionicons/dist/logo-facebook.vue'
    import github from 'vue-ionicons/dist/logo-github.vue'
    import about from 'vue-ionicons/dist/md-code.vue'
    import funnel from 'vue-ionicons/dist/md-funnel.vue'
    export default{
      components:{
        filtro,
        dashboard,
        close,
        facebook,
        github,
        about,
        funnel
      },
      data(){
        return{
          texto:null,
          pesquisaDireta:false
        }
      },

      methods:{
        abremenu:function(){
          $('.ui.sidebar').sidebar('setting','transition','overlay');
          $('.ui.sidebar').sidebar('toggle');
        },
        fechamenu:function(){
          $('.ui.sidebar').sidebar('hide');
          console.log("e")
        },
        pesquisa(){
          const pl = {
            pesquisa: this.texto
          }
          this.$store.commit('SET_BUSCA',pl)
        },
        modal:function(){
          $('#como').modal('toggle')

          console.log('merda')
        },
        about:function(){
          $('#about').modal('toggle')
        }
      }
    }
  </script>
