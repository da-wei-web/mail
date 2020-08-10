<template>
  <div class="avatar-container">
    <img :src="avatar" alt="">
    <span>{{ userName }}</span>
  </div>
</template>

<script>
  export default {
    name: 'Avatar',
    props: {
      avatar: {
        type: String,
        default: 'https://s10.mogucdn.com/mlcdn/c45406/180926_7d5c521e0aa3h38786lkakebkjlh8_750x390.jpg'
      },
      userName: {
        type: String,
        default: '用户名'
      }
    }
  }
</script>

<style lang="less" scoped>
  @import 'assets/css/base.less';
  .avatar-container {
    width: 100%;
    height: 2rem;
    text-align: center;
    background-color: #fff;

    > img {
      width: 1rem;
      height: 1rem;
      margin: .3rem 0 .1rem;
      border: 1px solid @text-high-color;
      border-radius: 50%;
      background-color: #fff;
    }

    > span {
      display: block;
      padding: .1rem .08rem;
      font-size: .14rem;
      color: @tint-color;
    }
  }
</style>