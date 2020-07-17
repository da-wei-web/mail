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
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll';

  // 页面子组件
  import DetailNavBar from './childComs/DetailNavBar';
  import DetailTopSwiper from './childComs/DetailTopSwiper';
  import DetailGoodsMsg from './childComs/DetailGoodsMsg';
  import DetailShopMsg from './childComs/DetailShopMsg';
  import DetailInfo from './childComs/DetailInfo';

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
        // 商品详细信息
        detailInfo: {}
      }
    },
    components: {
      DetailNavBar,
      Scroll,
      DetailTopSwiper,
      DetailGoodsMsg,
      DetailShopMsg,
      DetailInfo
    },
    created() {
      // 获取该个体的iid, 并保存起来
      this.iid = this.$route.params.iid;
      // console.log(this.iid)
      // 调用toGoodsDetail方法发送网络请求
      this.toGoodsDetail(this.iid);
    },
    methods: {
      /*
       * 网络请求详情页数据
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

        }).catch(err => {
          console.log(err);
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