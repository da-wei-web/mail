<template>
  <div id="tar-bar">
    <ul id="tar-bar-items">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'TarBar',
  }
</script>

<style scoped>
  #tar-bar{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: .48rem;
    background-color:orange;
  }

  #tar-bar-items{
    display: flex;
    width: 100%;
    height: 100%;
  }
</style>