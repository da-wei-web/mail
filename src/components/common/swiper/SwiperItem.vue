<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Slide'
  }
</script>

<style lang="less" scoped>
  .slide {
    width: 100%;
    flex-shrink: 0;
    background-color: orange;
  }
</style>