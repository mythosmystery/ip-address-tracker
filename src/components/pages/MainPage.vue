<template lang="pug">
    column-container
      page-header IP Address Checker
      background-image  
      map-leaflet 
</template>
<script>
import MapLeaflet from '../molecules/Map.vue'
import BackgroundImage from '../atoms/BackgroundImage.vue'
import ColumnContainer from '../atoms/ColumnContainer.vue'
import PageHeader from '../atoms/PageHeader.vue'

export default {
  name: 'main-page',
  components: {
    MapLeaflet,
    BackgroundImage,
    ColumnContainer,
    PageHeader
  }
}
</script>
