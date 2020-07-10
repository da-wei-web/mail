<template>
  <nav-bar>
    <template v-slot:left>
      <span class="iconfont icon-fanhui" @click="backTo"></span>
    </template>
    <template v-slot:center>
      <ul class="detail-nav-bar">
        <li v-for="(item, index) in ['hah', 'b2b', 'c33', 'sss']"
            :key="index"
            :class="{active: currentIndex === index}"
            @click="handleClick(index)">
            <span>{{ item }}</span>
        </li>
      </ul>
    </template>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'; 
  export default {
    name: 'DetailNavBar',
    data() {
      return {
        currentIndex: 0
      }
    },
    components: {
      NavBar
    },
    methods: {
      // 菜单切换
      handleClick(index) {
        this.currentIndex = index;
      },

      // 返回
      backTo() {
        this.$router.push('/home');
      }

    }
  }
</script>

<style lang="less" scoped>
  @import 'assets/css/base.less';
  .detail-nav-bar {
    display: flex;
    width: 100%;
    height: 100%;
    
    > li {
      flex: 1;
    }

    > .active {
      color: @text-high-color;
    }
  }
</style>