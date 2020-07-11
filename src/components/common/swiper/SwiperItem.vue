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
    flex-shrink: 0;
    width: 100%;
    // 解决div的高度大于img高度的问题
    font-size: 0;
    background-color: orange;
  }
</style>