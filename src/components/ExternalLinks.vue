<template>
  <v-speed-dial direction="top"  v-model="fab" fixed bottom right>
    <v-btn slot="activator"  v-model="fab" transition dark fab color="pink">
      <v-icon>send</v-icon>
      <v-icon>close</v-icon>
    </v-btn>
    <v-btn fab small dark target="_blank" href="https://github.com/cmm0004" >
      <v-icon>mdi-github-face</v-icon>
    </v-btn>
    <v-btn fab small dark target="_blank" href="https://www.linkedin.com/in/candice-mccollough">
      <v-icon>mdi-linkedin</v-icon>
    </v-btn>
    <v-btn fab small dark href="mailto:cmm0004@gmail.com">
      <v-icon>mdi-gmail</v-icon>
    </v-btn>
  </v-speed-dial>
</template>

<script>
import { VIcon, VBtn, VSpeedDial } from "vuetify/lib";
export default {
  name: "ExternalLinks",
  components: {
    VIcon,
    VBtn,
    VSpeedDial
  },
  data() {
    return {
      fab: false
    }
  }
};
</script>
