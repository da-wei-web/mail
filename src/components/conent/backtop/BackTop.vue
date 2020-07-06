<template>
  <div class="back-top">
    <img src="~assets/img/back-top.png">
  </div>
</template>

<script>
  export default {
    name: 'BackTop',
  }
</script>

<style lang="less" scoped>
  .back-top {
    position: fixed;
    right: .1rem;
    bottom: .60rem;

    img {
      border-radius: 50%;
    }
  }
</style>