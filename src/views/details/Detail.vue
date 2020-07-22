<template>
  <div id="detail">
    <!-- <h2>{{ iid }}</h2> -->
    <!-- 头部导航 -->
    <detail-nav-bar @listenItemIndex="getItemIndex" ref="nav" />
    <!-- 主体滚动区域 -->
    <scroll class="wrapper-container" 
            ref="scroll" 
            @scroll="scrollPosition"
            :probe-type="3">
      <detail-top-swiper :top-images="topImages" />
      <detail-goods-msg :goods-msg="goods" />
      <detail-shop-msg :shop-msg="shop" />
      <detail-info :goods-info="detailInfo" @goodsImgLoad="imgLoad" />
      <detail-goods-params ref="params" :goods-params="goodsParams" />
      <detail-user-rate ref="rate" :user-rate="userRate" />
      <goods-list ref="recommend" :goods="recommends" />
    </scroll>
  </div>
</template>

<script>
  // 公共组件
  import Scroll from 'components/common/scroll/Scroll';
  import GoodsList from 'components/conent/goodslist/GoodsLst';

  // 页面子组件
  import DetailNavBar from './childComs/DetailNavBar';
  import DetailTopSwiper from './childComs/DetailTopSwiper';
  import DetailGoodsMsg from './childComs/DetailGoodsMsg';
  import DetailShopMsg from './childComs/DetailShopMsg';
  import DetailInfo from './childComs/DetailInfo';
  import DetailGoodsParams from './childComs/DetailGoodsParams';
  import DetailUserRate from './childComs/DetailUserRate';


  // 网络请求
  import sDetail from 'network/details';

  // 工具模块
  import { listenImgLoadMixin, debance } from 'common/untils/untils';

  export default {
    name: 'Detail',
    data() {
      return {
        // 要和后端要求的字段名一致
        iid: null,
        // 顶部图片数据
        topImages: [],
        // 商品数据
        goods: {},
        // 商铺数据
        shop: {},
        // 商品详细信息数据
        detailInfo: {},
        // 商品参数数据
        goodsParams: {},
        // 用户评论数据
        userRate: {},
        // 推荐数据
        recommends: [],
        // 保存指定组件的offsetTop值
        offsetTopY: [],
        // 获取指定组件内容的offsetTop值
        getOffsetTopY: null,
        // detailnavbar的标识
        currentIndex: 0
      }
    },
    components: {
      DetailNavBar,
      Scroll,
      DetailTopSwiper,
      DetailGoodsMsg,
      DetailShopMsg,
      DetailInfo,
      DetailGoodsParams,
      DetailUserRate,
      GoodsList
    },
    created() {
      // 获取该个体的iid, 并保存起来
      this.iid = this.$route.params.iid;
      // console.log(this.iid)
      // 调用toGoodsDetail方法发送网络请求
      this.toGoodsDetail(this.iid);
      this.getRecommends();

      this.getOffsetTopY = debance(() => {
        this.offsetTopY = [];
        this.offsetTopY.push(0);
        this.offsetTopY.push(this.$refs.params.$el.offsetTop);
        this.offsetTopY.push(this.$refs.rate.$el.offsetTop);
        this.offsetTopY.push(this.$refs.recommend.$el.offsetTop);
        this.offsetTopY.push(Number.MAX_VALUE);
      }, 300)
    },
    mixins: [listenImgLoadMixin],
    mounted() {
    },
    destroyed() {
      this.$bus.$off(this.listenImgLoad);
    },
    methods: {
      /*
       * 网络请求数据
       */
      toGoodsDetail(id) {
        sDetail.toGoodsDetail(id).then(res => {
          // console.log(res)
          const data = res.result;
          // 获取顶部图片数据
          this.topImages = data.itemInfo.topImages;
          // this.topImages.push(...res.result.itemInfo.topImages);
          // console.log(this.topImages)
          
          // 获取商品数据
          let goodsMsg = new sDetail.GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services);
          // Object.assign(this.goods, new sDetail.GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services));
          // console.log(goodsMsg);
          goodsMsg.newServices = goodsMsg.services.filter(item => {
            if(item.icon) {
              return item;
            }
          });
          this.goods = goodsMsg;
          // console.log(this.goods)

          // 获取店铺的数据
          this.shop = new sDetail.ShopInfo(data.shopInfo);
          // console.log(this.shop)

          // 获取商品具体信息
          this.detailInfo = data.detailInfo;
          // console.log(this.detailInfo);

          // 获取商品参数
          this.goodsParams = new sDetail.GoodsParams(data.itemParams.info, data.itemParams.rule);
          // console.log(this.goodsParams);

          // 获取用户评价
          this.userRate = data.rate.list[0];
          // console.log(this.userRate);


        }).catch(err => {
          console.log(err);
        })
      },
      // 获取推荐数据
      getRecommends() {
        sDetail.getRecommends().then(res => {
          // console.log(res);
          this.recommends = res.data.list;
          // console.log(this.recommends);
        })
      },

      /*
       * 事件处理
       */ 
      imgLoad() {
        this.$refs.scroll.refresh();
        this.getOffsetTopY();
      },
      
      // 联动
      getItemIndex(index) {
        this.$refs.scroll.scrollTo(0, -this.offsetTopY[index], 1000);
      },

      // 滚动位置
      scrollPosition(position) {
        // console.log(this.offsetTopY); // [0, 5845, 6628, 6875, __ob__: Observer]
        let positionY = -position.y;
        
        this.offsetTopY.forEach((item, index, array) => {
          /** 区间内
            * 0<positionY<5845 -> 0
            * 5845<positionY<6628 ->1
            * 6628<positionY<6875 ->
            * 
            * 区间外
            * 6875<positionY ->3
            */ 
          // console.log(typeof item);
          // if(this.currentIndex !== index && ((index < array.length - 1 && positionY >= array[index] && positionY < array[index + 1]) || (index === array.length -1 && positionY >= array[index]))) {
          //   // console.log(index);
          //   this.currentIndex = index;
          //   // console.log(this.currentIndex)
          //   this.$refs.nav.currentIndex = this.currentIndex;
          // }

          // 技巧 原理在数组中最后面添加一项, 
          /** 区间内
            * 0<positionY<5845 -> 0
            * 5845<positionY<6628 ->1
            * 6628<positionY<6875 ->2
            * 6875<positionY<最大数 ->3
            */ 
          if(this.currentIndex !== index && ( positionY >= array[index] && positionY < array[index + 1] )) {
            this.currentIndex = index;
            console.log(index)
            this.$refs.nav.currentIndex = this.currentIndex;
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  // 在详情页遮盖tarbar
  #detail {
    position: relative;
    z-index: 10;
    height: 100vh;
    background-color: #fff;

    > .wrapper-container {
      // calc() CSS3中动态计算元素宽度和高度
      // height: calc(100% - .44rem);

      overflow: hidden;
      position: absolute;
      left: 0;
      right: 0;
      top: .44rem;
      bottom: .49rem;
      background-color: #fff;
    }
  }
</style>