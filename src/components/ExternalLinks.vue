<template>
  <md-speed-dial md-event="click" class="md-bottom-right md-fixed">
    <md-speed-dial-target>
      <md-icon class="md-morph-initial">send</md-icon>
      <md-icon class="md-morph-final">close</md-icon>
    </md-speed-dial-target>

    <md-speed-dial-content>
      <md-button class="md-icon-button">
        <md-icon>person_add</md-icon>
        <md-tooltip md-direction="left">LinkedIn</md-tooltip>
      </md-button>

      <md-button class="md-icon-button">
        <md-icon>code</md-icon>
        <md-tooltip md-direction="left">Github</md-tooltip>
      </md-button>
      <md-button class="md-icon-button">
        <md-icon>mail</md-icon>
        <md-tooltip md-direction="left">Email</md-tooltip>
      </md-button>
    </md-speed-dial-content>
  </md-speed-dial>
</template>

<script>
export default {
  name: "ExternalLinks"
};
</script>
