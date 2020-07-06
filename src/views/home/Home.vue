<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <h2>主页</h2>
      </template>
    </nav-bar>
    <scroll class="wrapper-container" 
            ref="scroll"
            :probe-type="3"
            @scroll="scrollPosition">
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <home-feature :features="recommends"></home-feature>
      <tar-control :tarList="['流行', '新款', '精选']" 
                @handleSwitch="handleSwitch"
                class="tar-control-top">
                </tar-control>
      <goods-list :goods="goods[currentType].list" ></goods-list>
    </scroll>
    <back-top @click.native="backToTop"></back-top>
  </div>
</template>

<script>
// 公共组件
import NavBar from 'components/common/navbar/NavBar'; // 顶部导航组件
import Scroll from 'components/common/scroll/Scroll'; // 滚动组件
import TarControl from 'components/conent/tarcontrol/TarControl'; // 选项卡切换组件
import GoodsList from 'components/conent/goodslist/GoodsLst'; // 商品列表组件
import BackTop from 'components/conent/backtop/BackTop'; // 返回顶部组件

// 页面子组件
import HomeSwiper from './childComs/HomeSwiper.vue'; // 轮播图组件
import HomeRecommendView from './childComs/HomeRecommedView.vue'; // 推荐信息组件
import HomeFeature from './childComs/HomeFeature.vue'; // 特点信息组件

// 路由方法
import sHome from 'network/home';

console.log(sHome)
export default {
  name: 'Home',
  components: {
    NavBar,
    Scroll,
    HomeSwiper,
    HomeRecommendView,
    HomeFeature,
    TarControl,
    GoodsList,
    BackTop
  },
  data(){
    return {
      banners: [],
      dKeywords: [],
      keywords: [],
      recommends: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] },
      },
      currentType: 'pop'
    }
  },
  // 发送网络请求
  created() {
    // 获取轮播图以及推荐列表信息
    this.getHomeMultidata();

    // 商品列表信息
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
    
  },
  methods: {
    /*
      事件处理
     */
    // 选项卡切换
    handleSwitch(index) {
      switch(index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
    },
    // 返回顶部
    backToTop() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    // 实时检测滚动位置
    scrollPosition(position) {
      console.log( position )
    },

    /*
      网路请求数据处理
    */
    getHomeMultidata(){
      sHome.getHomeMultidata().then(res => {
        // console.log(res)
        this.banners = res.data.banner.list;
        this.dKeywords = res.data.dKeyword.list;
        this.keywords = res.data.keywords.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1;
      sHome.getHomeGoods(type, page).then(res => {
        console.log(res); // data
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    }
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

  .tar-control-top{
    position: sticky;
    top: .44rem;
    z-index: 10;
  }

  .wrapper-container{
    // calc() CSS3中动态计算元素宽度和高度
    // height: calc(100% - .92rem);

    // // overflow: hidden;
    overflow: hidden;
		position: absolute;
		left: 0;
		right: 0;
		top: .44rem;
		bottom: .49rem;
  }
</style>

