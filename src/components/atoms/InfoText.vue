<template lang="pug">
    #info-text-container
        p {{caption}}
        h2 {{info}}   
</template>

<script>
export default {
  name: 'info-text',
  props: {
    caption: String,
    info: String
  }
}
</script>

<style lang="scss" scoped>
#info-text-container {
  display: flex;
  flex-direction: column;
  text-align: start;
}
p {
  color: lightgrey;
  margin: 0;
}
h2 {
  margin: 0.5rem 0;
  word-break: break-all;
}
</style>
