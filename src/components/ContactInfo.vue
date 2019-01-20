<template>
  <div class="md-layout">
    <h1 class="md-display-3 md-layout-item md-size-75">Candice McCollough</h1>
    <div class="md-layout">
      <div class="md-layout-item">
        <icon name="github" scale="1"/>
        </div>
        </div>
    </div>
</template>

<script>
import 'vue-material/dist/vue-material.min.css'
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/github'
import 'vue-awesome/icons/linkedin'
export default {
name: "ContactInfo",
components: {
  Icon
},
data () {
  return {
    type: "",

  }
}
}
</script>

<style lang="scss" scoped>
input {
  text-align: center;
}
</style>

