<template>
  <div id="my">
    <nav-bar class="my-nav">
      <template v-slot:center>
        <h2>个人中心</h2>
      </template>
    </nav-bar>
    <avatar />
    <login />
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  import Avatar from './childComs/Avatar';
  import Login from './childComs/Login';
  export default {
    name: 'My',
    components: {
      NavBar,
      Avatar,
      Login 
    }
  }
</script>

<style lang="less" scoped>
  @import 'assets/css/base.less';
  #my {
    height: 100vh;

    > .my-nav {
      color: #fff;
      background-color: @tint-color;
    }
  }
</style>