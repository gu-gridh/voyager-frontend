<template>
  <v-app>
    <Main/>
  </v-app>
</template>

<script>
import Main from './components/Main.vue'
import config from './assets/config'


export default {
  name: 'App',

  components: {
    Main
  },

  data: () => ({
    //
  }),

  mounted() {
    document.title = config.document.title;
  },

};
</script>

<style>
html,body {
  height: 100vh;
  width: 100vw;
  margin: 0 !important;
  overflow: hidden !important;
  background-color:rgb(45,45,45);
  -ms-overflow-style: none;
}

</style>
