<template>
  <div class="cart-list">
    <scroll class="wrapper-container" ref="scroll">
      <ul>
        <li v-for="item in cartList" :key="item.iid">
          <cart-item :item-info="item" />
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll';

  import CartItem from './CartItem';

  import { mapGetters } from 'vuex';
  export default {
    name: 'CartList',
    components: {
      CartItem,
      Scroll
    },
    computed: {
      ...mapGetters(['cartList'])
    },
    activated() {
      this.$refs.scroll.refresh();
    }
  }
</script>

<style lang="less" scoped>
  .cart-list {
    > .wrapper-container {
      overflow: hidden;
      position: absolute;
      top: .44rem;
      right: 0;
      bottom: .49rem;
      left: 0;
    }
  }
</style>