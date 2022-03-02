<template lang="pug">
        form#search-container(@submit.prevent="onSubmit")
            search-text
            search-icon
</template>

<script>
import SearchIcon from '../atoms/SearchIcon.vue'
import SearchText from '../atoms/SearchText.vue'
import axios from 'axios'

export default {
  name: 'search-bar',
  components: {
    SearchIcon,
    SearchText
  },
  methods: {
    onSubmit() {
      axios
        .get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.VUE_APP_APIKEY}&ipAddress=${this.$store.state.searchText}&domain=${this.$store.state.searchText}`
        )
        .then(({ data }) => {
          this.$store.dispatch('data/setData', { data })
          console.log({ ...this.$store.state.data })
        })
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
