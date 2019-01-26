<template>
<v-layout wrap>
  <v-flex xs12>
    <section-heading class="mb-2" @skillselect="onSkillselect" heading-title="Skills"/>

    <v-chip
      @click="onClick"
      small
      round
      v-for="(item, index) in list"
      :class="{'info': item.tags.includes(selected) }"
      v-bind:key="item.id"
      v-bind:data-index="index"
    >{{ item.name }}</v-chip>
  </v-flex>
  <skills-description :skill="selectedSkill" />
</v-layout>
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
  VChip,
  VBtnToggle
} from "vuetify/lib";
import skillsList from "@/data/skillslist.json";
import SectionHeading from "@/components/SectionHeading";
import SkillsDescription from "@/components/SkillsDescription";
export default {
  name: "SkillsSection",
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
    SectionHeading,
    VChip,
    VBtnToggle,
    SkillsDescription
  },
  data() {
    return {
      list: skillsList,
      selected: "",
      selectedSkill: {}
    };
  },
  methods: {
    onSkillselect(value) {
      this.selected = value || "";
    },
    onClick(value) {
      console.log(value.target.textContent);
      this.selectedSkill = this.list.find((element) => {
        return element.name === value.target.textContent;
      });
    }
  }
};
</script>