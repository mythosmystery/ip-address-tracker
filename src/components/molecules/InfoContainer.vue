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
  border-right: 1px solid lightgray;
}
#info-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem 0 2rem;
  position: relative;
  background: white;
  border-radius: 20px;
  width: 70%;
  z-index: 10;
  height: 12rem;
  margin: 5rem auto;
  @media (max-width: 980px) {
    flex-direction: column;
    width: 85%;
  }
}
</style>
