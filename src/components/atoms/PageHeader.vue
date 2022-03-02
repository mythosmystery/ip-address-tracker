<template lang="pug">
    h1.page-header
        slot
</template>
<script>
export default {
  name: 'page-header'
}
</script>
<style lang="scss" scoped>
.page-header {
  font-size: 2rem;
  color: white;
  position: fixed;
  width: 100vw;
}
</style>
