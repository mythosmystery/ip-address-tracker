<template lang="pug">
    #header-container
        text-heading IP Address Checker
        search-bar
</template>
<script>
import TextHeading from '../atoms/TextHeading.vue'
import SearchBar from '../atoms/SearchBar.vue'

export default {
  name: 'search-header',
  components: {
    TextHeading,
    SearchBar
  }
}
</script>
<style lang="scss" scoped>
#header-container {
  position: relative;
  z-index: 10;
  height: 34vh;
}
</style>
