<template>
  <div class="goods-info" v-if="Object.keys(goodsMsg).length !== 0">
    <div class="title-info">
      <p>{{ goodsMsg.title }}</p>
    </div>
    <div class="price-info">
      <span class="now-price">{{ goodsMsg.price }}</span>
      <span class="old-price">{{ goodsMsg.oldPrice }}</span>
      <span class="discount">{{ goodsMsg.discountDesc }}</span>
    </div>
    <ul class="hot-info">
      <li class="sell">
        <span>{{ goodsMsg.columns[0] }}</span>
      </li>
      <li class="collect">
        <span>{{ goodsMsg.columns[1] }}</span>
      </li>
      <li class="mail">
        <span>{{ goodsMsg.services[goodsMsg.services.length -1].name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'DetailGoodsMsg',
    props: {
      goodsMsg: {
        type: Object,
        default() {
          return {}
        }
      }

    },
    mounted() {
      console.log(this.goodsMsg)
      // console.log(Object.keys(this.goodsMsg))
    }
  }
</script>

<style lang="less" scoped>
  @import 'assets/css/base.less';
  .goods-info {
    padding: 10px;
    box-shadow: 0 1px 1px 0 rgba(100, 100, 100, .1);

    .title-info {
      p {
        font-size: .18rem;
        text-align: justify;
      }
    }

    .price-info {
      span {
        ~span {
          margin-left: .05rem;
        }
      }
      .now-price {
        color: @tint-color;
      }
      .old-price {
        color: @text-color;
        font-size: .12rem;
        text-decoration: line-through;
      }
      .discount {
        display: inline-block;
        padding: .01rem .1rem;
        line-height: .2rem;
        border-radius: .05rem;
        font-size: .12rem;
        color: @bgc;
        vertical-align: middle;
        text-align: center;
        background-color: @text-high-color;
      }     
    }

    .hot-info {
      display: flex;
      justify-content: space-between;
      padding-top: .3rem;
      font-size: .18rem;
      color: @text-color
    }
  }
</style>