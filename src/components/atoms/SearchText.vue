<template lang="pug">
    input(type="text" v-model="search" placeholder="Search for any IP address or domain")
</template>
<script>
export default {
  name: 'search-text',
  data: () => ({ search: '' })
}
</script>
<style lang="scss" scoped>
input {
  font-size: 1.2rem;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 15px 0 0 15px;
  padding: 1rem;
}
</style>
