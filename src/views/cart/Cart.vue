<template>
  <div id="cart">
    <!-- 顶部导航 -->
    <nav-bar class="nav-bar-title">
      <template v-slot:center>
        <h2>购物车({{contentCartLength}})</h2>
      </template>
    </nav-bar>
    <!-- 滚动区域 -->
    <cart-list />
    <!-- 底部汇总 -->
    <settle-accounts class="settle-position" />
  </div>
</template>

<script>
  // 公共组件 
  import NavBar from 'components/common/navbar/NavBar';
  import SettleAccounts from './childComs/SettleAccounts';

  // 页面子组件
  import CartList from './childComs/CartList';

  // 工具
  import { mapGetters } from 'vuex';

  export default {
    name: 'Cart',
    components: {
      NavBar,
      CartList,
      SettleAccounts
    },
    computed: {
      // 一般性做法
      // contentCartLength() {
      //   return this.$store.state.contentCart.length;
      // }

      // 在vuex的getters中完成
      // contentCartLength() {
      //   return this.$store.getters.contentCartLength;
      // }

      // 通过mapGetters从getters中映射其中的属性
      ...mapGetters(['contentCartLength'])
    }
  }
</script>

<style lang="less" scoped>
  @import 'assets/css/base.less';
  #cart {
    height: 100vh;
    > .nav-bar-title {
      color: @bgc;
      background-color: @tint-color;
    }

    > .settle-position {
      position: fixed;
      bottom: .49rem;
    }
  }
</style>