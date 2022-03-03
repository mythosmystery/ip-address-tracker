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
  @media (max-width: 980px) {
    text-align: center;
  }
}
p {
  color: hsl(0, 0%, 59%);
  margin: 0;
  font-weight: 400;
  font-size: 0.8rem;
}
h2 {
  margin: 0.75rem 0;
  font-weight: 700;
  color: hsl(0, 0%, 17%);
  @media (max-height: 720px) {
    font-size: 1rem;
    margin: 0.2rem 0 1rem;
  }
}
</style>
