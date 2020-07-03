<template>
  <tar-bar>
    <tar-bar-item path="/home" activeColor="green">
      <template v-slot:slot-icon>
        <span class="iconfont icon-wodezhiwei"></span>
      </template>
      <template v-slot:slot-text>
        <span class="text">职位</span>
      </template>
    </tar-bar-item>
    <tar-bar-item path="/company">
      <template v-slot:slot-icon>
        <span class="iconfont icon-gongsimingcheng"></span>
      </template>
      <template v-slot:slot-text>
        <span class="text">公司</span>
      </template>
    </tar-bar-item>
    <tar-bar-item path="/news">
      <template v-slot:slot-icon>
        <span class="iconfont icon-xiaoxi"></span>
      </template>
      <template v-slot:slot-text>
        <span class="text">消息</span>
      </template>
    </tar-bar-item>
    <tar-bar-item path="/my">
      <template  v-slot:slot-icon>
        <span class="iconfont icon-wode"></span>
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