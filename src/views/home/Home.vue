<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <h2>工作</h2>
      </template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <home-feature :features="recommends"></home-feature>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
import HomeSwiper from './childComs/HomeSwiper.vue';
import HomeRecommendView from './childComs/HomeRecommedView.vue';
import HomeFeature from './childComs/HomeFeature.vue'
import sHome from 'network/home';

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    HomeFeature
  },
  data(){
    return {
      banners: [],
      dKeywords: [],
      keywords: [],
      recommends: []
    }
  },
  // 发送网络请求
  created() {
    sHome.getHomeMultidata().then(res => {
      // console.log(res)
      this.banners = res.data.banner.list;
      this.dKeywords = res.data.dKeyword.list;
      this.keywords = res.data.keywords.list;
      this.recommends = res.data.recommend.list;
    });
  }
}
</script>

<style lang="less" scoped>
  @import "assets/css/base.less";
  #home{
    position: relative;
    height: 100vh;
    padding-top: .44rem;
  }
  .home-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background-color: @tint-color;
    color: @bgc;
  }
</style>

