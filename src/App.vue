<template>
  <div id="app">
    <contact-info/>
  </div>
</template>

<script>
import ContactInfo from "@/components/ContactInfo";
export default {
  name: 'app',
  components: {
    ContactInfo
  },
  data () {
    return {
      thingy: 0
    }
  },
  methods: {
    increment: function () {
      this.thingy = this.thingy + 1;
      this.$emit("hello", 123);
    }
  }
}
</script>
