<template lang="pug">
    #info-container(v-if="showMarker")
        info-text(caption="IP ADDRESS" :info="ip")
        #break
        info-text(caption="LOCATION" :info="location")
        #break
        info-text(caption="TIMEZONE" :info="timezone")
        #break
        info-text(caption="ISP" :info="isp")
</template>

<script>
import { mapState } from 'vuex'
import InfoText from '../atoms/InfoText.vue'

export default {
  name: 'info-container',
  components: {
    InfoText
  },
  computed: {
    ...mapState('data', ['ip', 'location', 'timezone', 'isp', 'showMarker'])
  }
}
</script>

<style lang="scss" scoped>
#break {
  height: 5rem;
  margin: 0 1rem;
  border-right: 1px solid lightgray;

  @media (max-width: 980px) {
    border: none;
  }
}
#info-container {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 12rem;
  width: 70%;
  padding: 0 2rem;
  margin: 5vh auto;
  border-radius: 20px;
  background: white;

  @media (max-width: 980px) {
    flex-direction: column;
    width: 85%;
    height: 100%;
    padding: 2rem 0;
    margin: 3vh auto;
  }
}
</style>
