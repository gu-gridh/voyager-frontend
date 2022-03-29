<template>
  <v-card color="" style="box-shadow:none; border-radius:15px 15px 0 0; border-width:0 0 0.5px 0; border-style:dashed; border-color:grey; padding:20px 0 0 0; box-shadow: 0rem 1rem 1rem rgba(0, 0, 0, 0.1); background-color:rgba(255,255,255,0.7);   backdrop-filter: blur(10px);">
    <div style="color:black; margin-left:30px;  font-size:90px; font-weight:100; line-height: 0.8; margin-bottom:30px;">Ocean <br> Voyager ⛵️</div>
    <div style="color:black;  font-weight:300; margin-left:35px; font-size:27px">{{ header.subtitle }}</div>
    <div style="color:black;  opacity:1; font-weight:300; font-size:19px; line-height: 1.25; text-align:justify; padding:5px 35px 20px 35px;">
      <span v-html="header.blurb"></span>
    </div>
    
    <v-card-actions>
      <v-dialog v-model="instructionsDialog" scrollable max-width="800px">
        <template v-slot:activator="{ on }">
          <v-btn
            v-on="on"
            text
            color="#000000"
            style="font-size:20px; font-weight:300; left:18px; margin-bottom:20px; margin-right:30px;"
            @click="instructionsDialog = true"
          >
            Instructions
          </v-btn>
        </template>
        <v-card style="font-family: 'Barlow Condensed', sans-serif; ">
          <v-card-text>
            <v-card-title style="font-size:30px; font-weight:100;  margin-top:15px;"><b>{{ instructions.title }}</b></v-card-title>
            <v-card-subtitle
              ><h3 class="pt-2"  style="font-size:22px; font-weight:400;">
                {{ instructions.subtitlePurpose }}
              </h3></v-card-subtitle>
            <div  style="font-size:18px; font-weight:400; padding:0 17px 0px 17px;" v-html="instructions.textPurpose"></div>
            <v-card-subtitle
              ><h3 class="pt-2"  style="font-size:22px; font-weight:400;">
                {{ instructions.subtitleInstructions }}
              </h3></v-card-subtitle
            >
            <div
              v-for="step in instructions.steps"
              v-bind:key="step.id"
              class="image-text"
            >
              <div class="image-text" style="font-size:18px; font-weight:400;">
                <img :src="step.image" align="left" width="300px" style="margin-left:17px;" />
              </div>
              <div class="image-text__text" style="font-size:16px; font-weight:400; line-height:1.2">
                <span v-html="step.text"></span>
              </div>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn text @click="instructionsDialog = false"> Close </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="aboutDialog" max-width="900px">
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" text color="#000000"  style="font-size:20px; font-weight:300; margin-bottom:20px;" @click="aboutDialog = true">
            About
          </v-btn>
        </template>
        <v-card style="font-family: 'Barlow Condensed', sans-serif; ">
          <v-card-title  style="font-size:30px; font-weight:200;padding: 30px 20px 10px 40px;"> {{ about.title }} </v-card-title>
          <v-card-text>
            <div style="font-size:18px; font-weight:400; padding:0 17px 0px 17px;" v-html="about.text"></div>
              </v-card-text>

              <div id="contacts" class="contacts">
          <b>CONTACT US:</b><br />
          Professor Johan Ling <br />
          <a href="mailto:johan.ling@gu.se">johan.ling@gu.se</a><br />
          Centre for Digital Humanities<br />
          <a href="mailto:cdh@lir.gu.se">cdh@lir.gu.se</a>
        </div>

            <div id="logotypes" style=margin-top:-100px;>   
              
               <div style="float:right;">
                      <div class="image-container" style="width:350px; height:120px">
              <img class="image-attribution" src="/assets/images/osu_long.png" />
                 </div>
                     </div>
                    
                    <div style="float:right;">
                      <div class="image-container"  style="width:220px; height:120px">
                  <img class="image-attribution"   src="/assets/images/CDH_logo_black.svg"/>
                     </div>

                          <div class="image-container" style="width:150px; height:120px">
               <img class="image-attribution" src="/assets/images/shfa_logo_black.png" />
                  </div>

        
                  <div class="image-container"  style="width:400p; height:150px; float:right;">
                  <img class="image-attribution"   src="/assets/images/RJ_logo_black.png"/>
                  </div>
                 </div>
             </div>

        
          <v-card-actions>
            <v-btn text @click="aboutDialog = false" style="float:left;"> Close </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card-actions>
  </v-card>
</template>

<script>
import config from "../assets/config";

export default {
  name: "Header",
  data() {
    return {
      instructionsDialog: false,
      aboutDialog: false,

      // Text from the config
      about: config.about,
      instructions: config.instructions,
      header: config.header,
    };
  },
};
</script>

<style>

.contacts {
  font-size: 18px;

  margin-left: 40px;
  align-self: left;
  max-width: 300px;
  max-height: 100px;
  height: auto;
}

#logotypes{
  pointer-events: none;
  position:relative;
float:left;
width:100%;
}

.image-container{
float:right;
width:380px;
height:200px;
  padding:30px;
}

.image-attribution {
  display: block;
  width: 100%;
    margin-left: auto;
  margin-right: auto;
    margin-top: auto;
  margin-bottom: auto;
}


.title-style {

  color:#ffffff;
    
  margin-bottom:20px;
}

.subtitle-style {
  font-size:120%;
  color:white;

}

.text-style {
  color:white;
  line-height: 0.8;
}

.v-card {
  color:white;
}

.ov-button{
font-size:80px;
}
</style>