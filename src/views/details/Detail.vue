<template>
  <div id="detail">
    <!-- <h2>{{ iid }}</h2> -->
    <!-- 头部导航 -->
    <detail-nav-bar />
    <detail-top-swiper :top-images="topImages" />
  </div>
</template>

<script>
  import DetailNavBar from './childComs/DetailNavBar';
  import DetailTopSwiper from './childComs/DetailTopSwiper';
  // 网络请求
  import sHome from 'network/home';
  export default {
    name: 'DetailDetail',
    data() {
      return {
        // 要和后端要求的字段名一致
        iid: null,
        // 顶部图片数据
        topImages: []
      }
    },
    components: {
      DetailNavBar,
      DetailTopSwiper
    },
    created() {
      // 获取该个体的iid, 并保存起来
      this.iid = this.$route.params.iid;
      // console.log(this.iid)
      // 调用toGoodsDetail方法发送网络请求
      this.toGoodsDetail(this.iid);
      this.$
    },
    methods: {
      /*
       * 网络请求详情页数据
       */
      toGoodsDetail(id) {
        sHome.toGoodsDetail(id).then(res => {
          // console.log(res)
          // 获取顶部图片数据
          this.topImages = res.result.itemInfo.topImages;
          // this.topImages.push(...res.result.itemInfo.topImages);
          // console.log(this.topImages)
        })
      }
    }
  }
</script>

<style lang="less" scoped>

</style>