<template>
  <div>
    <md-content class="md-layout md-alignment-center-center">
      <h2 class="md-display-3">Full Stack. Agile. Radically Candid.</h2>
    </md-content>
    <md-content class="md-layout md-alignment-center-center">
      <p class="md-subheading">
        I'm a software developer living in Atlanta. Software is
        about constantly learning, adapting to new technologies and
        taking risks on something new.
      </p>
    </md-content>
    <md-content class="md-layout md-alignment-center-center">
      <md-button class="md-primary md-raised">Download Resume</md-button>
      <md-button class="md-raised">Contact me</md-button>
    </md-content>
    <md-content class="md-layout">
      <div class="md-layout-item md-small-size-100">
        <md-card>
          <md-card-header>
            <div class="md-title">What I'm Looking For</div>
          </md-card-header>

          <md-card-content>
            I love talking about my work, and I want to work on something I want to talk about.
            I want to be somewhere I can be learning every day. I want to work on an agile team where I can learn from and teach others.
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-small-size-100">
        <md-card>
          <md-card-header>
            <div class="md-title">What I Bring</div>
          </md-card-header>

          <md-card-content>
            I am a focused, high-growth individual that believes code is a craft. I am an expert in C#, a variety of web frameworks, a certified aws solutions
            architect, and am an advocate for better software.
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-small-size-100">
        <md-card>
          <md-card-header>
            <div class="md-title">What Else?</div>
          </md-card-header>

          <md-card-content>Life's not all about work. I'm an avid rock climber and calligrapher. I like to hike in Blue Ridge in the summer, travel in the winter, and I think material design is the bomb.</md-card-content>
        </md-card>
      </div>
    </md-content>
  </div>
</template>

<script>
export default {
  name: "HomePage"
};
</script>
<style lang="scss" scoped>

.md-layout,
.md-layout-item {
  margin-bottom: 1em;
}

.md-card.md-theme-default {
  background-color: #353535;
}
</style>

