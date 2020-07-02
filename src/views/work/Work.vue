<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <h2>工作</h2>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
import home from 'network/home';

export default {
  name: 'Work',
  components: {
    NavBar
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
    home.getHomeMultidata().then(res => {
      console.log(res)
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
  .home-nav {
    background-color: @tint-color;
    color: @bgc;
  }
</style>>

</style>