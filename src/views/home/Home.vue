<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <h2>主页</h2>
      </template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <home-feature :features="recommends"></home-feature>
    <tar-control :tarList="['流行', '新款', '精选']"></tar-control>
  </div>
</template>

<script>
// 公共组件
import NavBar from 'components/common/navbar/NavBar.vue'; // 顶部导航组件
import TarControl from 'components/conent/tarcontrol/TarControl.vue'; // 选项卡切换组件

// 页面子组件
import HomeSwiper from './childComs/HomeSwiper.vue'; // 轮播图组件
import HomeRecommendView from './childComs/HomeRecommedView.vue'; // 推荐信息组件
import HomeFeature from './childComs/HomeFeature.vue'; // 特点信息组件

// 路由方法
import sHome from 'network/home';

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    HomeFeature,
    TarControl
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
    // 固定顶部导航位置
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background-color: @tint-color;
    color: @bgc;
  }
</style>

