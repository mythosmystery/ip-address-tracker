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
  font-size: 3vh;
  color: white;
  width: 100vw;
}
</style>
