<template lang="pug">
    #header-container
        text-heading IP Address Checker
        search-bar
        p#error-message(v-if="error") Invalid domain or IP Address
        info-container
</template>

<script>
import TextHeading from '../atoms/TextHeading.vue'
import SearchBar from '../molecules/SearchBar.vue'
import InfoContainer from '../molecules/InfoContainer.vue'

export default {
  name: 'search-header',
  components: {
    TextHeading,
    SearchBar,
    InfoContainer
  },
  computed: {
    error() {
      return this.$store.state.data.isError
    }
  }
}
</script>

<style lang="scss" scoped>
#header-container {
  position: relative;
  z-index: 10;
  height: 25vh;
}
#error-message {
  color: red;
  font-style: italic;
}
</style>
