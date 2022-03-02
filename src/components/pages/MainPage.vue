<template lang="pug">
    column-container
      search-header
      background-image  
      map-leaflet 
</template>
<script>
import MapLeaflet from '../molecules/Map.vue'
import BackgroundImage from '../atoms/BackgroundImage.vue'
import ColumnContainer from '../atoms/ColumnContainer.vue'
import SearchHeader from '../organisms/SearchHeader.vue'

export default {
  name: 'main-page',
  components: {
    MapLeaflet,
    BackgroundImage,
    ColumnContainer,
    SearchHeader
  }
}
</script>
