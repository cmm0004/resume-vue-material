<template>
  <v-flex xs12>
    
    
 <v-card color="blue-grey darken-2" class="white--text mt-2">
   
      <v-card-title primary-title v-show="show">
        <div>
          <div class="headline">{{name}}</div>
          <span>{{desc}}</span>
        </div>
      </v-card-title>
      <v-card-actions v-show="show">
        <v-chip 
        class="mx-1 black--text"
        flat disabled light v-for="(tag, index) in tags" :key="index">{{ tag }}</v-chip>
      </v-card-actions>
    </v-card>
    
  </v-flex>
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
  VSlideXTransition,
  VIcon,
  VDivider,
  VChip
} from "vuetify/lib";
export default {
  name: "SkilldDescription",
  components: {
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
    VSlideXTransition,
    VIcon,
    VDivider,
    VChip
  },
  props: {
    skill: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  watch: {
    skill: function () {
      this.show = false;
      this.show = true;
    }
  },
  data (){
    return {
      show:false
    }
  },
  computed: {
    desc: function() {
      return this.skill.desc || "";
    },
    tags: function() {
      return this.skill.tags || [];
    },
    name: function() {
      return this.skill.name || "";
    }
  }
};
</script>

<style>
</style>
