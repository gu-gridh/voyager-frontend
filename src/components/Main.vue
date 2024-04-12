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
      <Footer/>
    </v-main>
</template>

<script>
import Form from './Form.vue';
import Map from './Map.vue'
import Footer from './Footer.vue'
export default {
  name: 'Main',

  components: {
    Form,
    Map,
    Footer
  },

  data: () => ({
    trajectories: [],
    vessels: []
  }),

};
</script>

<style>
/* @import './GUITemplate/css/base.css';
@import './GUITemplate/css/components.css';
@import './GUITemplate/css/style.css';
@import './GUITemplate/css/utilities.css'; */

/* @import url('https://fonts.googleapis.com/css2?family=Antic+Didone&display=swap');
@import url('https://fonts.googleapis.com/css?family=Barlow+Condensed:100,200,300,400,500,600&display=swap');
@import url('https://fonts.googleapis.com/css?family=Clicker+Script&display=swap'); */


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
 overflow:hidden;
}

#main-container::-webkit-scrollbar {
  width: 0 !important
}

.sidebar-container {
  pointer-events: none;
  font-family: "Barlow Condensed", sans-serif;
  font-weight:600;
  margin-left:0px;
  top:0;
  float:left;
  position:absolute;
  background-color: rgba(200,200,200,0.0);
  width:600px;
  height:calc(100% - 80px);
  padding:10px;
  transform: scale(0.9);
  transform-origin: top left;
}

#map-container {
  position:relative;
  height:calc(100vh - 80px);
 box-shadow: -1rem 0rem 1rem rgba(0, 0, 0, 0.2);
 overflow:hidden;
}

@media screen and (max-width: 900px) {

  .sidebar-container {
    width:50%;
  }
  
}

@media screen and (max-width: 600px) {

  .sidebar-container {
    width:80%;
    max-height: 60% !important;
    min-height: 600px !important;
  }
  
}

</style>
