
import Vue from "vue";
import Vuex from "vuex";
import { mapMutations } from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {

        // Default parameter values
        params: {
            departurePoints: [],
            destinationPoint: null,
            startDate: new Date('2017-05-01').toISOString().substring(0, 10),
            endDate: new Date('2017-05-30').toISOString().substring(0, 10),
            launchInterval: 5,
            journeyLength: 30,
            timestep: 8*3600,
            propulsionType: "sailing",
            vesselType: 1,
            paddlingSpeed: undefined,
            bbox: [],
        }

    },

    methods: {

        ...mapMutations([
            "departurePoints",
            "destinationPoint",
            "startDate",
            "endDate",
            "launchInterval",
            "journeyLength",
            "timestep",
            "propulsionType",
            "vesselType",
            "paddlingSpeed",
            "bbox",
        ]),

    },

    mutations: {

    updateState(state, payload) {
      state.params[payload.which] = payload.value
    }

    }
})
