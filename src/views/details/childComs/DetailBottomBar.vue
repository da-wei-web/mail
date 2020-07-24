<template>
  <div class="bottom-bar">
    <div class="bar-container">
      <ul class="bar-left bar-item">
        <li>
          <i class="icon-service"></i>
          <span>客服</span>
        </li>
        <li>
          <i class="icon-shop"></i>
          <span>商铺</span>
        </li>
        <li>
          <i class="icon-select"></i>
          <span>收藏</span>
        </li>
      </ul>
      <div class="bar-right bar-item">
        <div class="cart" @click="addCart"><span>加入购物车</span></div>
        <div class="buy"><span>购买</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBottomBar',
    methods: {
      addCart() {
        this.$emit('addCartGoods');
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "assets/css/base.less";
  .bottom-bar {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: .49rem;
    background-color:#fff;
    z-index: 10;

    > .bar-container {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 100%;

      > .bar-item {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
      } 

      > .bar-left {
        padding: .07rem .1rem 0;
        > li {
          > i {
            display: block; 
            width: .25rem;
            height: .25rem;
            margin: auto;
          }

          > .icon-service {
            background: url("~assets/img/detail/icon01.png") no-repeat center center / cover;
          }

          > .icon-shop {
            background: url("~assets/img/detail/icon02.png") no-repeat center center / cover;
          }

          > .icon-select {
            background: url("~assets/img/detail/icon03.png") no-repeat center center / cover;
          }
        }
      }

      > .bar-right {
        
        > div {
          flex: 1;
          width: 100%;
          height: 100%;

          > span {
            display: block;
            width: 100%;
            height: 100%;
            line-height: 49px;
            text-align: center;
          }
        }

        > .cart {
          > span {
            background-color: rgb(248, 244, 11);
          }
        }

        > .buy {
          > span {
            background-color: @tint-color;
            color: #fff;
          }
        }
      }
    }
  }
</style>