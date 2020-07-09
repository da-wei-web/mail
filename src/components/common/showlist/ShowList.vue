<template>
  <div class="list-container">
    <slot name="title"></slot>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ShowList'
  }
</script>

<style lang="less" scoped>
  .list-container{
    width: 100%;
  }
</style>