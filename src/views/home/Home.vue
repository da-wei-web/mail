<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <h2>主页</h2>
      </template>
    </nav-bar>
    <tar-control :tarList="['流行', '新款', '精选']" 
              @handleSwitch="handleSwitch"
              ref="tarControl1"
              class="tar-control-top" 
              v-show="isFixed" />
    <scroll class="wrapper-container" 
            ref="scroll"
            :probe-type="3"
            @scroll="scrollPosition"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <home-feature :features="recommends"></home-feature>
      <tar-control :tarList="['流行', '新款', '精选']" 
                    @handleSwitch="handleSwitch"
                    ref="tarControl2" />
      <goods-list :goods="goods[currentType].list" ></goods-list>
    </scroll>
    <back-top @click.native="backToTop" v-show="isShowBT"></back-top>
  </div>
</template>

<script>
// 公共组件
import NavBar from 'components/common/navbar/NavBar'; // 顶部导航组件
import Scroll from 'components/common/scroll/Scroll'; // 滚动组件
import TarControl from 'components/conent/tarcontrol/TarControl'; // 选项卡切换组件
import GoodsList from 'components/conent/goodslist/GoodsLst'; // 商品列表组件

// 页面子组件
import HomeSwiper from './childComs/HomeSwiper.vue'; // 轮播图组件
import HomeRecommendView from './childComs/HomeRecommedView.vue'; // 推荐信息组件
import HomeFeature from './childComs/HomeFeature.vue'; // 特点信息组件

// 路由方法
import sHome from 'network/home';
import { debance, listenImgLoadMixin, backTopMixin } from 'common/untils/untils';

export default {
  name: 'Home',
  components: {
    NavBar,
    Scroll,
    HomeSwiper,
    HomeRecommendView,
    HomeFeature,
    TarControl,
    GoodsList
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
      currentType: 'pop',
      fixedPosition: 0,
      isFixed: false,
      saveY: 0
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
  // 混入
  mixins: [listenImgLoadMixin, backTopMixin],
  mounted() {
    this.handleSwitch(0)
  },
  // 进入时
  activated() {
    // console.log('activated')
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  // 退出时
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
    // console.log('deactivated')
    this.$bus.$off(this.listenImgLoad);
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

      // 保持两个tarbar选项的标识是一致的 
      this.$refs.tarControl1.currentIndex = index;
      this.$refs.tarControl2.currentIndex = index;
    }, 

    // 实时检测滚动位置
    scrollPosition(position) {
      // 实时检测滚动的位置, 大于1000时显示一件置顶功能图标
      this.showBackTop(position);

      // 吸停效果
      this.isFixed = Math.abs( position.y ) > this.fixedPosition; 
      // console.log(this.isFixed)
    },

    // 获取标识为tarControl2的DOM元素到顶部的高度offsetTop, 用于确定tarbar吸停的位置
    swiperImageLoad() {
      this.fixedPosition = this.$refs.tarControl2.$el.offsetTop;
      // console.log(this.fixedPosition) // 578
    },

    // 加载更多内容
    loadMore() {
      this.getHomeGoods(this.currentType);
      // 解决异步加载图片时,高度计算失误问题
      this.$refs.scroll.refresh();
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
        // console.log(res); // data
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        // 下拉加载更多完成时执行
        this.$refs.scroll.finishPullUp();
      });
    },
  } 
}
</script>

<style lang="less" scoped>
  @import "assets/css/base.less";
  #home{
    position: relative;
    height: 100vh;
  }
  .home-nav {
    color: @bgc;
    background-color: @tint-color;
  }

  .tar-control-top{
    position: relative;
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
    background-color: #fff;
  }
</style>

