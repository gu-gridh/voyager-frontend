<template>
  <div id="foot" class="foot">
    <div class="foot-container">
      <div id="contacts" class="contacts">
        <b>CONTACT US:</b><br />
        Professor Johan Ling <br />
        <a href="mailto:johan.ling@gu.se">johan.ling@gu.se</a><br />
        Centre for Digital Humanities<br />
        <a href="mailto:cdh@lir.gu.se">cdh@lir.gu.se</a>
      </div>
      <div class="attribution-row" id="osu">
        <img class="image-attribution"  src="/assets/images/osu_long.png" />
      </div>
      <div class="attribution-row" id="shfa">
        <img class="image-attribution" src="/assets/images/shfa_logo.png" />
      </div>
      <div class="attribution-row" id="rj">
        <img class="image-attribution" src="/assets/images/RJ_logo_white.png"
        />
      </div>
      <div class="attribution-row">
        <CdhLogo id="cdh" />
      </div>

      <!-- <v-row no-gutters> 
            <v-col align='left' justify='left' cols="2">

            </v-col>
            <v-col align="center" justify="center" cols="2">
                <img height="75px" width="auto" src="/assets/images/osu_long.png">
            </v-col>
            <v-col align="center" justify="center" cols="2">
                <img height="75px" width="auto" src="/assets/images/shfa_logo.png">
            </v-col>
            <v-col align="left" justify="center" cols="2">
                <img height='100px' width="auto" src="/assets/images/RJ_logo_white.png">
            </v-col>
            <v-spacer></v-spacer>
            <v-col align="right" justify="right" class="flex-grow-1 flex-shrink-0" cols="4">
                <CdhLogo />
            </v-col>
          </v-row> -->
    </div>
  </div>
</template>

<script>
import CdhLogo from "./GUITemplate/vue/CdhLogo.vue";

export default {
  name: "Footer",
  components: { CdhLogo },
};
</script>

<style>
.image-attribution {
    align-self: left;
    max-width: 300px;
    max-height: 100px;
    height: auto; 
    margin-left: 30px;
    margin-right: 30px;

}



.contacts {
  font-size: 15px;
  /* width: 300px; */
  /* display: inline-block; */
  margin-right: 75px;
      align-self: left;
    max-width: 300px;
    max-height: 100px;
    height: auto; 
}

#cdh {
      align-self: left;
    max-width: 300px;
    max-height: 100px;
    height: auto; 
    margin-left: 30px;
    margin-right: 30px;
}

.attribution-row {
  display: flex;
  justify-content: center;
  /* display: inline-block; */
  /* margin: 0 40px 0 40px; */
  /* align-self: center; */
}

a:link {
  color: #e66e89 !important;
}

.foot-container {
  margin-left: 0;
  margin-right: 0;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.foot {
  background-color: rgb(65, 65, 65);
  color: white;
  margin-top: 150px;
  padding: 20px 65px 30px;
  height: auto !important;
  /* min-height: 120px; */
  padding-left: 1.5rem !important;
}

.foot .cdh-logo {
  float: right;
}

@media screen and (max-width: 600px) {
  .foot .cdh-logo {
    display: none;
  }
}
</style>
