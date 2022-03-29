<template>
    <v-main>
      <div id="main-container">
        <div id="map-container">
            <Map/>
          </div>
        <div id="content-row" no-gutters>
            <div class="sidebar-container">
            <div class="sidebar pa-5">
              <Form/>
            </div>
          </div>
        
        </div>
      </div>
    <!--   <Footer/> -->
    </v-main>
</template>

<script>
import Form from './Form.vue';
import Map from './Map.vue'
/* import Footer from './Footer.vue' */
export default {
  name: 'Main',

  components: {
    Form,
    Map,
    // Footer
  },

  data: () => ({
    trajectories: [],
    vessels: []
  }),

};
</script>

<style>
/* @import './GUITemplate/css/base.css'; */
@import './GUITemplate/css/components.css';
/* @import './GUITemplate/css/style.css'; */
/*@import './GUITemplate/css/utilities.css';*/

@import url('https://fonts.googleapis.com/css2?family=Antic+Didone&display=swap');
@import url('https://fonts.googleapis.com/css?family=Barlow+Condensed:100,200&display=swap');
@import url('https://fonts.googleapis.com/css?family=Clicker+Script&display=swap');

.foot {
  float:left;
  margin-top: 100vh;
  height: 180px;
  background-color: rgb(95, 95, 95);
}

#content-row {

  display:flex;
  flex-flow: row wrap;
}

#main-container {
   float:left;
  position:relative;
  padding: 0;
  width:100%;
  left:0;
}

.sidebar-container {
  font-family: "Barlow Condensed", sans-serif;
  font-weight:600;
  margin-left:0px;
  top:0;
  float:left;
  position:absolute;
  background-color: rgba(200,200,200,0.0)
;    /* background-color: #788f97; */
    width:540px;
    height:calc(100vh);
    min-height:1100px;
    padding:10px;
}

#map-container {

  position:relative;
    height:calc(100vh);
    min-height:1100px;
 box-shadow: -1rem 0rem 1rem rgba(0, 0, 0, 0.2);
}

</style>
