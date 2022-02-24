<template>
  <v-container id="foot" class="foot py-12" fluid>
    <v-row>
      <v-col>
        <div id="contacts" class="contacts">
          <b>CONTACT US:</b><br />
          Professor Johan Ling <br />
          <a href="mailto:johan.ling@gu.se">johan.ling@gu.se</a><br />
          Centre for Digital Humanities<br />
          <a href="mailto:cdh@lir.gu.se">cdh@lir.gu.se</a>
        </div>
      </v-col>
      <v-col>
        <div class="attribution-row" id="osu">
          <img class="image-attribution" src="/assets/images/osu_long.png" />
        </div>
      </v-col>
      <v-col>
        <div class="attribution-row" id="shfa">
          <img class="image-attribution" src="/assets/images/shfa_logo.png" />
        </div>
      </v-col>
      <v-col>
        <div class="attribution-row" id="rj">
          <img
            class="image-attribution"
            src="/assets/images/RJ_logo_white.png"
          /></div
      ></v-col>
      <v-col>
        <div class="attribution-row">
          <CdhLogo id="cdh" />
        </div>
      </v-col>
    </v-row>
  </v-container>
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
  padding-bottom: 0.875rem;
  /* display: inline-block; */
  /* margin: 0 40px 0 40px; */
  /* align-self: center; */
}

a:link {
  color: #e66e89 !important;
}

.foot-container {
  margin-left: 0 !important;
  margin-right: 0 !important;
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
  margin: 0 0 0 0 !important;
}

.cdh-logo {
  text-align: left;
  font-weight: 100;
  font-style: normal;
  font-size: 270%;
  line-height: 0.8;
  font-family: "Barlow Condensed", sans-serif;
}

.cdh-logo .cdh-logo-cursive {
  font-family: "Clicker Script", cursive;
  font-size: 100%;
  vertical-align: 40%;
}

.foot .cdh-logo {
  float: right;
}

@media screen and (max-width: 600px) {
  .contacts {
    margin: auto auto;
  }

  .foot .cdh-logo {
    /* display: none; */
  }

}


@media screen and (max-width: 1500px) {
  .foot .cdh-logo {
    /* display: none; */
  }

}
</style>
