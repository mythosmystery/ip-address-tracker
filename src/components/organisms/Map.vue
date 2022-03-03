<template lang="pug">
    l-map#map-container(:zoom="zoom" :center="center")
      l-tile-layer(:url="url" :attribution="attribution" )
      l-marker(v-if="showMarker" :lat-lng="center")
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
import { MAP_URL, MAP_ATTR } from '../../utils/constants'

export default {
  name: 'map-leaflet',
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      zoomOffset: -1,
      tileSize: 512,
      url: MAP_URL,
      attribution: MAP_ATTR
    }
  },
  computed: {
    showMarker() {
      return this.$store.state.data.showMarker
    },
    center() {
      //if theres no data default to bay area
      return this.showMarker ? this.$store.state.data.coords : [37.77, -122.41]
    },
    zoom() {
      return this.showMarker ? 15 : 12
    }
  }
}
</script>

<style lang="scss" scoped>
#map-container {
  width: 100vw;
  height: 75vh;
  z-index: 0;
}
</style>
