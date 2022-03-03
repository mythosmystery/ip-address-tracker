<template lang="pug">
    #column-container
      search-header
      background-image  
      map-leaflet 
</template>

<script>
import MapLeaflet from '../organisms/Map.vue'
import BackgroundImage from '../atoms/BackgroundImage.vue'
import SearchHeader from '../organisms/SearchHeader.vue'

export default {
  name: 'main-page',
  components: {
    MapLeaflet,
    BackgroundImage,
    SearchHeader
  }
}
</script>

<style lang="scss" scoped>
#column-container {
  display: flex;
  flex-direction: column;
}
</style>
