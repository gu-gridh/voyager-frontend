<template>
 <v-menu
          :ref="name"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              class="px-8"
              v-model="selected"
              v-on:input="$emit('input', $event)"
              v-on="on"
              value
              :label="label"
              :color="color"
              outlined
              required
            />
          </template>
          <v-date-picker
            v-model="selected"
            @input="menu = false"
            no-title
            :color="color"
            scrollable
            >
            <v-spacer></v-spacer>
            <v-btn text :color="color" @click="menu = false"> Cancel </v-btn>
            <v-btn text :color="color" @click="$refs[name].save(localValue)"> OK </v-btn>
          </v-date-picker>
        </v-menu>

</template>

<script>


export default {
  name: "DateRangeInput",

  props: {
    name: String,
    value: String,
    color: String,
    label: String,
  },

data () {
      return {
        menu: null,
        date: null
      }
    },

    computed: {
      selected: {
        get() {
          return this.value
        },
        set(value) {
          this.$emit('input', value)
        }
      },
    },

};
</script>