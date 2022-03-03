<template lang="pug">
    #header-container
        text-heading IP Address Checker
        search-bar
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
  }
}
</script>

<style lang="scss" scoped>
#header-container {
  position: relative;
  z-index: 10;
  height: 25vh;
}
</style>
