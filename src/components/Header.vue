<template>
  <v-card color="#F2EFE9" class="my-3">
    <v-card-title>{{ header.title }}</v-card-title>
    <v-card-subtitle>{{ header.subtitle }}</v-card-subtitle>
    <v-card-text>
      <span v-html="header.blurb"></span>
    </v-card-text>
    <v-card-actions>
      <v-dialog v-model="instructionsDialog" scrollable max-width="800px">
        <template v-slot:activator="{ on }">
          <v-btn
            v-on="on"
            text
            color="#E66E89"
            @click="instructionsDialog = true"
          >
            Instructions
          </v-btn>
        </template>
        <v-card>
          <v-card-text>
            <v-card-title>{{ instructions.title }}</v-card-title>
            <v-card-subtitle
              ><h3 class="pt-2">
                {{ instructions.subtitlePurpose }}
              </h3></v-card-subtitle
            >
            <span v-html="instructions.textPurpose"></span>
            <v-card-subtitle
              ><h3 class="pt-2">
                {{ instructions.subtitleInstructions }}
              </h3></v-card-subtitle
            >
            <div
              v-for="step in instructions.steps"
              v-bind:key="step.id"
              class="image-text"
            >
              <div class="image-text">
                <img :src="step.image" align="left" width="300px" />
              </div>
              <div class="image-text__text">
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
          <v-btn v-on="on" text color="#E66E89" @click="aboutDialog = true">
            About
          </v-btn>
        </template>
        <v-card>
          <v-card-title> {{ about.title }} </v-card-title>
          <v-card-text>
            <span v-html="about.text"></span>
          </v-card-text>
          <v-card-actions>
            <v-btn text @click="aboutDialog = false"> Close </v-btn>
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