<template lang="pug">
    h1.text-heading
        slot
</template>
<script>
export default {
  name: 'text-heading'
}
</script>
<style lang="scss" scoped>
.text-heading {
  font-size: 2rem;
  color: white;
  width: 100vw;
}
</style>
