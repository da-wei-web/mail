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
    height: .49rem;
    background-color:#fff;
    box-shadow: 0 -0.01rem .01rem 0 rgba(100, 100, 100, .1);
    z-index: 9;
  }

  #tar-bar-items{
    display: flex;
    width: 100%;
    height: 100%;
  }
</style>