<template>
  <div id="detail">
    <!-- <h2>{{ iid }}</h2> -->
    <!-- 头部导航 -->
    <detail-nav-bar />
    <detail-top-swiper :top-images="topImages" />
    <detail-goods-msg :goods-msg="goods" />
  </div>
</template>

<script>
  import DetailNavBar from './childComs/DetailNavBar';
  import DetailTopSwiper from './childComs/DetailTopSwiper';
  import DetailGoodsMsg from './childComs/DetailGoodsMsg';
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
        goods: {}
      }
    },
    components: {
      DetailNavBar,
      DetailTopSwiper,
      DetailGoodsMsg
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
          
          this.goods = new sDetail.GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services);
          // Object.assign(this.goods, new sDetail.GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services));
          console.log(this.goods)
        })
      },


    }
  }
</script>

<style lang="less" scoped>

</style>