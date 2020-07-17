<template>
  <div class="goods-info" v-if="Object.keys(goodsInfo).length !== 0">
    <div class="desc-info clearfix">
      <div class="start"></div>
      <div class="desc">{{ goodsInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="key-info">{{ goodsInfo.detailImage[0].key }}</div>
    <ul class="img-list-info">
      <li v-for="(value, index) in goodsInfo.detailImage[0].list" :key="index">
        <img :src="value" alt="" @load="imgLoad">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'DetailInfo',
    props: {
      goodsInfo: {
        type: Object
      }
    },
    data() {
      return {
        counter: 0,
        imgLength: 0
      }
    },
    created() {
      console.log(this.goodsInfo);
    },
    methods: {
      imgLoad() {
        if(++this.counter === this.imgLength)
        this.$emit('goodsImgLoad');
      }
    },
    watch: {
      goodsInfo() {
        this.imgLength = this.goodsInfo.detailImage[0].list.length;
      }
    }
  }
</script>

<style lang="less" scoped>
  @import 'assets/css/base.less';
  .goods-info {
    padding: 10px;

    > .desc-info {
      // 开始样式
      > .start {
        width: 50%;
        margin-bottom: 20px;
        border-bottom: 1px solid #000;

        &::after {
          content: "";
          display: block;
          width: 2px;
          height: 2px;
          border: 2px solid #000;
        }
      }
      // 结束样式
      > .end {
        float: right;
        width: 50%;
        margin-top: 20px;
        border-bottom: 1px solid #000;

        &::after {
          content: "";
          display: block;
          float: right;
          width: 2px;
          height: 2px;
          border: 2px solid #000;
        }
      }
    }

    > .key-info {
      padding: 10px 0;
    }
  }
</style>