<template lang="pug">
      input(type="text" v-model="search" placeholder="Search for any IP address or domain")
</template>

<script>
export default {
  name: 'search-text',
  computed: {
    search: {
      get() {
        return this.$store.state.searchText
      },
      set(newValue) {
        this.$store.dispatch('setSearch', { text: newValue })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  font-size: 18px;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 15px 0 0 15px;
  padding: 1rem;
}
</style>
