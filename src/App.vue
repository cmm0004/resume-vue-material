<template>
  <div class="page-container">
    <md-app md-mode="reveal" class="app">
      <md-app-toolbar class="md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <a href="/">
              <h3 class="md-title" style="flex: 1">Candice McCollough</h3>
            </a>
          </div>

          <div class="md-toolbar-section-end">
            <md-tabs class="md-primary">
              <md-tab @click="currentView = 0" id="tab-home" md-label="Home"></md-tab>
              <md-tab @click="currentView = 1" id="tab-expierence" md-label="Experience"></md-tab>
              <md-tab @click="currentView = 2" id="tab-skills" md-label="Skills"></md-tab>
            </md-tabs>
          </div>
        </div>
      </md-app-toolbar>

      <md-app-content>
        <home-page v-if="currentView === 0"/>
         <skill-finder v-if="currentView === 2"/>
      </md-app-content>
    </md-app>
    <external-links/>
  </div>
</template>

<script>
import HomePage from "@/components/tabs/HomePage";
import ExternalLinks from "@/components/ExternalLinks";
import SkillFinder from "@/components/tabs/SkillFinder";
const views = {
  home: 0,
  experience: 1,
  skills: 2
};
export default {
  name: "Reveal",
  components: {
    HomePage,
    SkillFinder,
    ExternalLinks

  },
  data: () => ({
    menuVisible: false,
    currentView: views.home
  })
};
</script>

<style lang="scss" scoped>
.app {
  min-height: 100vh;
}
</style>
