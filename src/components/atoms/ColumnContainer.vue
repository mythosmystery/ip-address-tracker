<template lang="pug">
    #column-container
        slot
</template>
<script>
export default {
  name: 'column-container'
}
</script>
<style lang="scss" scoped>
#column-container {
  display: flex;
  flex-direction: column;
}
</style>
