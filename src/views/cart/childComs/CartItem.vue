<template>
  <div class="cart-item">
    <!-- 选择按钮 -->
    <div class="select-box">
      <select-button @click.native="selectItem" 
                      :class="{'btn-color': itemInfo.checked}" 
                      :is-checked="itemInfo.checked">
      </select-button>
    </div>
    <!-- 图片信息 -->
    <div class="goods-img">
      <img :src="itemInfo.image" alt="">
    </div>
    <!-- 商品信息 -->
    <div class="goods-msg">
      <ul class="goods-msg-list">
        <li>
          <p>{{ itemInfo.title }}</p>
        </li>
        <li>
          <p>{{ itemInfo.desc }}</p>
        </li>
        <li class="price-count">
          <span>{{ '￥' + itemInfo.price }}</span>
          <span>{{ 'X' + itemInfo.count }}</span>  
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import SelectButton from 'components/conent/selectButton/SelectButton';

  // import { mapGetters } from 'vuex';
  export default {
    name: 'CartItem',
    props: {
      itemInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    components: {
      SelectButton
    },
    methods: {
      selectItem() {
        this.itemInfo.checked = !this.itemInfo.checked;
      }
    }
  }
</script>

<style lang="less" scoped>
  .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .1rem;
    border-radius: 7px;
    box-shadow: 0 0 5px 0 rgba(100, 100, 100, .35);

    > .select-box {
      margin-left: .05rem;

      > .btn-color {
        color: #fff;
        background-color: red;
        border-color: red;
      }
    }

    > .goods-img {
      flex: 1;
      height: 1.2rem;
      padding: .1rem;
      > img {
        width: 100%;
        height: 100%;
      }
    }

    > .goods-msg {
      flex: 1;
      width: 2rem;
      margin: .1rem;
      > .goods-msg-list {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        justify-items: center;
        width: 100%;
        height: 100%;
        > li {
          flex: 1;
          line-height: .36rem;
          font-size: .16rem;
          > p {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        > .price-count {
          display: flex;
          justify-content: space-between;
          padding-right: .2rem;
        }
      }
    }
  }
</style>