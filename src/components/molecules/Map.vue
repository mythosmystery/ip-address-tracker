<template lang="pug">
    #map-container
</template>
<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

export default {
  name: 'map-leaflet',
  data() {
    return {
      center: [37.77, -122.41]
    }
  },
  methods: {
    setupLeafletMap: function () {
      const mapDiv = L.map('map-container').setView(this.center, 13)
      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution:
          'Map data (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        accessToken:
          'sk.eyJ1IjoibXl0aG9zbXlzdGVyeSIsImEiOiJjbDA4cWFjMGYwNXU2M2N0YWp4MnBnanBkIn0.692s15pzx6hFK27DPlzbTQ',
        tileSize: 512,
        zoomOffset: -1
      }).addTo(mapDiv)
    }
  },
  mounted() {
    this.setupLeafletMap()
  }
}
</script>

<style scoped>
#map-container {
  height: 66vh;
  width: 100vw;
}
</style>
