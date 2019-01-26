<template>
  <v-container class="mt-5">
    <v-layout wrap >
      <v-flex xs12 md5 class="text-xs-center text-md-left">
        <v-layout wrap>
          <v-flex xs12>
            <span
              :class="{'display-4' : $vuetify.breakpoint.mdAndUp, 'display-3' :$vuetify.breakpoint.smAndDown}"
              class="blue--text text--lighten-5"
            >Full Stack. Agile. Radically Candid.</span>
          </v-flex>
          <v-flex xs12 class=" mt-4 mb-2 text-xs-center text-md-left">
            <v-btn
              large
              color="info"
              target="_blank"
              href="https://docs.google.com/document/d/1M1DSWx2UOaRRmu5c_d3WsUwEeYq338Os5mXuSjPnIvw/edit"
            >Resume</v-btn>
            <v-btn large outline href="mailto:cmm0004@gmail.com">Contact</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex xs12 md6 offset-md1>
        
          <skills-section/>
         
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {
  VContainer,
  VLayout,
  VFlex,
  VCard,
  VCardText,
  VBtn,
  VSheet,
  VSheetFooter,
  VImg,
  VCardTitle,
  VCardActions,
  VSpacer,
  VSlideYTransition,
  VIcon,
  VDivider,
  VChip
} from "vuetify/lib";
import SkillsSection from "@/components/SkillsSection";
export default {
  name: "FrontPage",
  components: {
    VLayout,
    VFlex,
    VCard,
    VCardText,
    VBtn,
    VContainer,
    VSheet,
    VSheetFooter,
    VImg,
    VCardTitle,
    VCardActions,
    VSpacer,
    VSlideYTransition,
    VIcon,
    VDivider,
    SkillsSection,
    VChip
  },
  data() {
    return {
      show: false
    };
  }
  
};
</script>
