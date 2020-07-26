<template>
  <div class="select-btn">
    <i class="iconfont icon-duihao" v-show="isChecked"></i>
  </div> 
</template>

<script>
  export default {
    name: 'SelectButton',
    props: {
      isChecked: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="less" scoped>
  .select-btn {
    width: .14rem;
    height: .14rem;
    line-height: .14rem;
    border-radius: 50%;
    border: 2px solid #000;
    text-align: center;
  }
</style>