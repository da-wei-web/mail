<template>
  <div id="detail">
    <!-- <h2>{{ iid }}</h2> -->
    <!-- 头部导航 -->
    <detail-nav-bar />
    <!-- 主体滚动区域 -->
    <scroll class="wrapper-container" ref="scroll">
      <detail-top-swiper :top-images="topImages" />
      <detail-goods-msg :goods-msg="goods" />
      <detail-shop-msg :shop-msg="shop"/>
      <detail-info :goods-info="detailInfo" @imgLoad="imgLoad" />
      <detail-goods-params :goods-params="goodsParams" />
      <detail-user-rate :user-rate="userRate" />
      <goods-list :goods="recommends" />
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
        recommends: []
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
    },
    methods: {
      /*
       * 网络请求数据
       */
      toGoodsDetail(id) {
        sDetail.toGoodsDetail(id).then(res => {
          console.log(res)
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
          console.log(this.goods)

          // 获取店铺的数据
          this.shop = new sDetail.ShopInfo(data.shopInfo);
          console.log(this.shop)

          // 获取商品具体信息
          this.detailInfo = data.detailInfo;
          console.log(this.detailInfo);

          // 获取商品参数
          this.goodsParams = new sDetail.GoodsParams(data.itemParams.info, data.itemParams.rule);
          console.log(this.goodsParams);

          // 获取用户评价
          this.userRate = data.rate.list[0];
          console.log(this.userRate);
        }).catch(err => {
          console.log(err);
        })
      },
      // 获取推荐数据
      getRecommends() {
        sDetail.getRecommends().then(res => {
          // console.log(res);
          this.recommends = res.data.list;
          console.log(this.recommends);
        })
      },

      /*
       * 事件处理
       */ 
      imgLoad() {
        this.$refs.scroll.refresh();
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