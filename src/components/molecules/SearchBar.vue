<template lang="pug">
        form#search-container(@submit.prevent="onSubmit")
            search-text
            search-icon
</template>

<script>
import SearchIcon from '../atoms/SearchIcon.vue'
import SearchText from '../atoms/SearchText.vue'

export default {
  name: 'search-bar',
  components: {
    SearchIcon,
    SearchText
  },
  methods: {
    onSubmit() {
      console.log(this.$store.state.searchText)
    }
  }
}
</script>

<style lang="scss" scoped>
#search-container {
  display: flex;
  margin: 0 auto;
  width: 40%;
  @media (max-width: 980px) {
    width: 85%;
  }
}
</style>
