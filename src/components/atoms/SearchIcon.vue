<template lang="pug">
    button#icon-container(type="submit")
      svg(xmlns="http://www.w3.org/2000/svg" width="11" height="14")
        path(fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6")
</template>

<script>
export default {
  name: 'search-icon'
}
</script>
<style lang="scss" scoped>
button {
  border: none;
}

#icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  color: white;
  padding: 1rem 1.25rem;
  border-radius: 0 15px 15px 0;
}
</style>
