<template>
  <tar-bar>
    <tar-bar-item path="/home">
      <template v-slot:slot-icon>
        <span class="iconfont icon-zhuye"></span>
      </template>
      <template v-slot:slot-text>
        <span class="text">主页</span>
      </template>
    </tar-bar-item>
    <tar-bar-item path="/category">
      <template v-slot:slot-icon>
        <span class="iconfont icon-fenlei-active"></span>
      </template>
      <template v-slot:slot-text>
        <span class="text">分类</span>
      </template>
    </tar-bar-item>
    <tar-bar-item path="/cart">
      <template v-slot:slot-icon>
        <span class="iconfont icon-gouwuche"></span>
      </template>
      <template v-slot:slot-text>
        <span class="text">购物车</span>
      </template>
    </tar-bar-item>
    <tar-bar-item path="/my">
      <template  v-slot:slot-icon>
        <span class="iconfont icon-Icon_wode"></span>
      </template>
      <template  v-slot:slot-text>
        <span class="text">我的</span>
      </template>
    </tar-bar-item>
  </tar-bar>
</template>

<script>
import TarBar from "../../common/tarbar/TarBar.vue";
import TarBarItem from "../../common/tarbar/TarBarItem.vue";

export default {
  name: 'MainTarBar',
  components: {
    TarBar,
    TarBarItem
  }
}
</script>

<style>

</style>