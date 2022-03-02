<template lang="pug">
    l-map#map-container(:zoom="zoom" :center="center")
      l-tile-layer(:url="url" :attribution="attribution" )
      l-marker(v-if="showMarker" :lat-lng="center")
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'

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
      url: 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=sk.eyJ1IjoibXl0aG9zbXlzdGVyeSIsImEiOiJjbDA4cWFjMGYwNXU2M2N0YWp4MnBnanBkIn0.692s15pzx6hFK27DPlzbTQ',
      attribution:
        'Map data (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>'
    }
  },
  computed: {
    showMarker() {
      return this.$store.state.data.showMarker
    },
    center() {
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
