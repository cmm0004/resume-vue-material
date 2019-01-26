
 <template>
  <v-app id="inspire" dark>
    <v-toolbar app fixed>
      <v-toolbar-title>Candice McCollough</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-avatar>
        <img
          src="https://lh3.googleusercontent.com/-oqGixGxOGJQ/AAAAAAAAAAI/AAAAAAAAX1w/ZOivWY02fRQ/s60-p-rw-no-il/photo.jpg"
          alt="Candito"
        >
      </v-avatar>
    </v-toolbar>
    <v-content>
      <front-page/>
    </v-content>
    <external-links/>
  </v-app>
</template>

<script>
import {
  VApp,
  VContent,
  VLayout,
  VContainer,
  VToolbar,
  VToolbarTitle,
  VToolbarSideIcon,
  VAvatar,
  VSpacer
} from "vuetify/lib";
import ExternalLinks from "@/components/ExternalLinks";
import FrontPage from "@/components/FrontPage";
export default {
  name: "App",
  components: {
    VApp,
    VContent,
    VLayout,
    VContainer,
    VToolbar,
    VToolbarTitle,
    ExternalLinks,
    FrontPage,
    VToolbarSideIcon,
    VAvatar,
    VSpacer
  },
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  }
};
</script>