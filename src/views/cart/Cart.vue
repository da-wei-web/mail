<template>
  <div id="shop-cart">
    <nav-bar class="nav-bar-title">
      <template v-slot:center>
        <h2>购物车({{contentCartLength}})</h2>
      </template>
    </nav-bar>
    <shop-cart />
  </div>
</template>

<script>
  // 公共组件 
  import NavBar from 'components/common/navbar/NavBar';

  // 页面子组件
  import ShopCart from './childComs/ShopCart';

  // 工具
  import { mapGetters } from 'vuex';

  export default {
    name: 'News',
    components: {
      NavBar,
      ShopCart
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
  #shop-cart {
    > .nav-bar-title {
      color: @bgc;
      background-color: @tint-color;
    }
  }
</style>