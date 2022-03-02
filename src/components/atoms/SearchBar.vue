<template lang="pug">
    input(type="text" v-model="search" placeholder="Search for any IP address or domain")
</template>
<script>
export default {
  name: 'search-bar',
  data: () => ({ search: '' })
}
</script>
<style lang="scss" scoped>
input {
  padding: 1rem;
  border-radius: 15px;
  border: 0px;
  width: 80%;
  font-size: 1.2rem;
  @media (min-width: 768px) {
    width: 30%;
  }
}
</style>
