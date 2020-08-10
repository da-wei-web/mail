<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style lang="less" scoped>
  .nav-bar {
    display: flex;
    height: .44rem;
    line-height: .44rem;
    text-align: center;
    box-shadow: 0 1px 1px 0 rgba(100, 100, 100, .1);

    > .left, .right {
      width: .6rem;
      // background-color: red;
      line-height: .44rem;
      text-align: center;

      > span {
        display: inherit;
      }
    }
    

    > .center {
      flex: 1;
      // background-color: green;
    }
  }
</style>
