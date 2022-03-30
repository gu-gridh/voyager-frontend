<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
      <v-row>
        <v-col>
          <Header/>
          
          <v-card color="" style="font-weight:600; pointer-events:auto; border-radius:0 0 20px 20px; box-shadow: 0rem 1rem 1rem rgba(0, 0, 0, 0.2); background-color:rgba(255,255,255,0.7);   backdrop-filter: blur(10px);">
            <v-card-title></v-card-title>

            <v-window v-model="step" style="padding:3px 0 0 0;">
              <v-window-item :value="1" >  

<div style="width:100%">
  <div style="width:50%; float:left;">
                <date-range-input 
                  name="start" 
                  color="primary" 
                  label="Start date"
                  v-model="form.params.startDate"/>
                      </div>

 <div style="width:50%; float:left;">
                <date-range-input 
                  name="end" 
                  color="primary" 
                  label="End date"
                  v-model="form.params.endDate"/>
    </div>
                  </div>

                <v-select
                  v-model="form.params.propulsionType"
                  :items="propulsionTypes"
                  :rules="rules.propulsionTypes"
                  label="Propulsion type"
                  outlined
                  required
                  class="px-8"
                  @change="fetchVesselTypes"
                ></v-select>

                <v-select
                  v-model="form.params.vesselType"
                  :items="vesselTypes"
                  :rules="rules.vesselTypes"
                  label="Vessel type"
                  outlined
                  required
                  class="px-8"
                ></v-select>

                <v-text-field
                  v-model="form.params.paddlingSpeed"
                  :rules="isPaddling ? rules.paddlingSpeed : []"
                  label="Paddling speed"
                  type="number"
                  suffix="m/s"
                  outlined
                  :disabled="!isPaddling"
                  class="px-8"
                ></v-text-field>
              </v-window-item>

              <v-window-item :value="2">
                <v-text-field
                  v-model="form.params.launchInterval"
                  :rules="rules.launchInterval"
                  label="Launch interval"
                  type="number"
                  suffix="days"
                  outlined
                  required
                  class="px-8 pt-2"
                ></v-text-field>

                <v-text-field
                  v-model="form.params.journeyLength"
                  :rules="rules.journeyLength"
                  label="Max journey length"
                  type="number"
                  suffix="days"
                  outlined
                  required
                  class="px-8"
                ></v-text-field>

                <v-text-field
                  v-model="form.params.timestep"
                  :rules="rules.timestep"
                  label="Timestep"
                  type="number"
                  suffix="hours"
                  outlined
                  required
                  class="px-8"
                ></v-text-field>
              </v-window-item>
            </v-window>

            <v-card-actions>
              <v-btn
                v-show="step != 1"
                :disabled="step === 1"
                text
                @click="step--"
                style="font-size:18px; font-weight:300; left:10px; margin-bottom:20px;"
              >
                Back
              </v-btn>
              <v-btn
                text
                v-show="step != 2"
                :disabled="step === 2"
                color="black"
                 style="font-size:18px; font-weight:400; left:10px; margin-bottom:20px;"
                @click="step++"
              >
                Advanced
              </v-btn>
              <v-btn text @click="clearForm"  style="font-size:18px; font-weight:400; left:10px; margin-bottom:20px;"> Clear form</v-btn>
              <v-spacer></v-spacer>
              <v-btn id="submit" color="primary" style="font-size:22px; padding:25px; font-weight:600; right:10px; margin-bottom:20px;" @click="submit"> <b>Run</b> </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row>

      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import config from "../assets/config";
import rules from "../assets/rules";
import vesselsAPI from "./api/vessels.api";

import DateRangeInput from './inputs/DateRangeInput.vue'
import Header from './Header.vue'

export default {

  components: {
    DateRangeInput,
    Header
  },

  data() {
    // A default form with data from the store
    const defaultForm = Object.freeze({
      params: {
        startDate: this.$store.state.params.startDate,
        endDate: this.$store.state.params.endDate,
        launchInterval: this.$store.state.params.launchInterval,
        journeyLength: this.$store.state.params.journeyLength,
        timestep: this.$store.state.params.timestep / 3600,
        propulsionType: this.$store.state.params.propulsionType,
        vesselType: this.$store.state.params.vesselType,
        paddlingSpeed: this.$store.state.params.paddlingSpeed,
      },
    });

    return {
      form: Object.assign({}, defaultForm),

      // Rules from config
      rules: rules.rules,
      propulsionTypes: ["sailing", "paddling", "drifting"],
      vesselTypes: [],
      valid: false,
      defaultForm,

      // Controls the advanced settings tab
      step: 1,

      startMenu: false,
      endMenu: false,
      instructionsDialog: false,
      aboutDialog: false,

      // Text from the config
      about: config.about,
      instructions: config.instructions,
      header: config.header,
    };
  },

  computed: {

    isPaddling() {
      return this.form.params.propulsionType === "paddling";
    },

  },

  mounted: function () {
    this.fetchVesselTypes();
  },

  methods: {
    clearForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },

    submit() {
      // TODO: Call the backend and get data
      if (!this.valid) {
        this.$refs.form.resetValidation();
      }

      this.valid = this.$refs.form.validate();

      if (this.valid) {
        const SECONDS_PER_HOUR = 3600;

        const { timestep, ...ps } = this.form.params;

        this.update({ timestep: timestep * SECONDS_PER_HOUR, ...ps });
        this.$root.$emit("form", this.$store.state.params);
      }
    },

    update(params) {
      for (let key in params) {
        this.$store.commit("updateState", {
          which: key,
          value: params[key],
        });
      }
    },

    fetchVesselTypes() {
      vesselsAPI
        .get({ mode: this.form.params.propulsionType })
        .then((response) => {
          this.vesselTypes = response.map((x) => {
            return { text: x.name, value: x.id };
          });
        });
    },
  },
};
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
  height: 100%;
}

#submit {
  margin-right: 0.5em;
  margin-bottom: 0.5em;
}

.image-text {
  display: flex;
  align-items: center;
}
.image-text__image {
  flex: 0 0 auto;
  padding: 16px;
}
.image-text__image img {
  display: block;
}
.image-text__text {
  flex: 1 1 auto;
  padding: 1em;
}

.form-text{
  font-size:30px;
}

.v-card {
  font-size: 20px;
  font-weight:300;
}


.v-input input {
  font-size: 20px;
  font-weight:300;
}

.v-select__selection{
  font-size: 20px;
  font-weight:300;
  line-height:1.2;
}

.v-messages__message {
  font-size: 15px;
  font-weight:400;
}

.v-list-item__content{
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 15px;
  font-weight:400;
  line-height:1.2;
}

.v-label{
  font-size: 18px;
  font-weight:600;
  line-height:1.2;
}



</style>