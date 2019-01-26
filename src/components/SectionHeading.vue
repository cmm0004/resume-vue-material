<template>
    <v-toolbar dense>
      <span class="display-1 font-weight-thin">Skills</span>
      <v-spacer/>
       <v-divider
     class="mr-2"
      vertical
    ></v-divider>
    
    <v-btn-toggle @change="onChange"
      class="transparent"
      exclusive
    >
      <v-btn :value="1" flat>
       Frontend
      </v-btn>

      <v-btn :value="2" flat>
       Backend
      </v-btn>

      <v-btn :value="3" flat>
       People
      </v-btn>
    </v-btn-toggle>
  </v-toolbar>
</template>

<script>
const skillTypes = {
  1: 'frontend',
  2: 'backend', 
  3: 'people'
};
import { VDivider, VBtn, VBtnToggle, VToolbar, VSpacer } from "vuetify/lib";
export default {
  name: "SectionHeading",
  components: {
    VDivider,
    VBtn,
    VBtnToggle,
    VToolbar,
    VSpacer
  },
  props: {
    headingTitle: {
      type: String,
      required: true
    }
  },
  methods:{
    onChange(value){
      this.$emit("skillselect", skillTypes[value]);
    }
  }
};
</script>
