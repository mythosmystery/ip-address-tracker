<template lang="pug">
    img(alt='Background image' src='../../assets/pattern-bg.png')    
</template>

<script>
export default {
  name: 'background-image'
}
</script>

<style scoped>
img {
  height: 35vh;
  width: 100vw;
  object-fit: cover;
  position: fixed;
  z-index: 0;
}
</style>
