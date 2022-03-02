<template lang="pug">
  #app
    main-page   
</template>

<script>
import MainPage from './components/pages/MainPage.vue'

export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap');

#app {
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body {
  margin: 0px;
  padding: 0px;
}
</style>
