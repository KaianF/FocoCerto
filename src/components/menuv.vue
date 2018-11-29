<template>
  <div id="menuv">
    <dashboard class ="hambm" w="50px" h="50px" @click.native="abremenu"></dashboard>
    <div class="ui sidebar vertical menu">
      <close w="50px" h="50px" @click.native="fechamenu"></close>
      <div class="item"></div>
      <div class="ui fixed socials">
        <p>Como fazer sua pesquisa?</p>
        <facebook title="facebook" w="50px" h="50px"></facebook>
        <github title="github" w="50px" h="50px"></github>
        <about title="about" w="50px"h="50px"></about>
      </div>
    </div>
    <div class="pusher">
      <span class="titulo">
        Foco Certo
      </span>
      <div class="pesquisas">
        <table>
          <tr>
            <td><input type="text" v-model="texto" name="pesquisa" class="pesquisa"></td>
            <td><filtro></filtro></td>
          </tr>
        </table>
      </div>
      <input type="submit" name="pesquisa" value="pesquisa" class="ui black button" @keyup.enter="pesquisa" @click="pesquisa">
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
  export default{
    components:{
      filtro,
      dashboard,
      close,
      facebook,
      github,
      about
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
