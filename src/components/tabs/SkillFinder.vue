<template>
  <md-card>
    <md-card-header>
      <div class="md-headline">Skills Finder</div>
      <div class="md-subheading">
        Being a full stack developer means I wear a lot of hats and have had the oppurtunity to use a huge variety of
        interesting technologies. My current day-to-day can see me deploying new infrastructure, writing js, c#, sql, and unit tests to deliver a new feature.
        Use the buttons to filter on categories, and the search box for specific skills.
      </div>
    </md-card-header>

    <md-card-content>
      <md-content class="md-layout">
        <div class="md-layout-item md-medium-size-50 md-small-size-100">
          <md-field>
            <label>Search</label>
            <md-input v-model="query"></md-input>
            <span class="md-helper-text"></span>
          </md-field>
          <md-checkbox v-model="selectedFilter" value="current">Current</md-checkbox>
          <md-checkbox v-model="selectedFilter" value="frontend">Frontend</md-checkbox>
          <md-checkbox v-model="selectedFilter" value="backend">Backend</md-checkbox>
          <md-checkbox v-model="selectedFilter" value="database">Databases</md-checkbox>
          <md-checkbox v-model="selectedFilter" value="architecture">Architecture</md-checkbox>
          <md-checkbox v-model="selectedFilter" value="people">People</md-checkbox>
          <md-checkbox v-model="selectedFilter" value="practices">Practices</md-checkbox>
        </div>
        <div class="md-layout-item md-medium-size-50 md-small-size-100">
          <div id="staggered-list-demo">
            <transition-group
              name="staggered-fade"
              tag="ul"
              v-bind:css="false"
              @before-enter="beforeEnter"
              @enter="enter"
              @leave="leave"
            >
              <md-chip
                v-for="(item, index) in filteredList"
                v-bind:key="item.name"
                v-bind:data-index="index"
              >{{ item.name }}</md-chip>
            </transition-group>
          </div>
        </div>
      </md-content>
    </md-card-content>
  </md-card>
</template>

<script>
import skillsList from "@/components/tabs/skillslist.json";
export default {
  name: "SkillFinder",
  data() {
    return {
      query: "",
      selectedFilter: [],
      list: skillsList
    };
  },
  computed: {
    computedList: function() {
      var vm = this;
      if (vm.list === undefined) return;
      return this.list.filter(function(item) {
        if (item.name === undefined || vm.query === "") return item;
        if (item.name.toLowerCase().includes(vm.query.toLowerCase())) {
          return item;
        }
      });
    },
    filteredList: function() {
      var vm = this;
      if (vm.selectedFilter.length === 0) return vm.computedList;
      return this.computedList.filter(function(item) {
        return item.tags.some(tag =>
          vm.selectedFilter.includes(tag.toLowerCase())
        );
      });
    }
  },
  methods: {
    beforeEnter: function(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter: function(el, done) {
        Velocity(el, { opacity: 1, height: "32px" }, { complete: done });
    },
    leave: function(el, done) {
        Velocity(el, { opacity: 0, height: 0 }, { complete: done });

    }
  }
};
</script>
<style lang="scss" scoped>
ul {
  padding-left: 10px;
  
}
.md-chip {
    margin-bottom: .5em;
  }
</style>
