<template>
  <div id="detail">
    <!-- <h2>{{ iid }}</h2> -->
    <!-- 头部导航 -->
    <detail-nav-bar />
  </div>
</template>

<script>
  import DetailNavBar from './detailnavbar/DetailNavBar';

  // 网络请求
  import sHome from 'network/home';
  export default {
    name: 'Detail',
    data() {
      return {
        // 要和后端要求的字段名一致
        iid: null
      }
    },
    components: {
      DetailNavBar
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
        sHome.toGoodsDetail(id).then(res => {
          console.log(res)
        })
      }
    }
  }
</script>

<style lang="less" scoped>

</style>