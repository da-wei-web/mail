<template>
  <div class="login">
    <button >账号登录</button>
  </div>
</template>

<script>
  export default {
    name: 'Login'
  }
</script>

<style lang="less" scoped>
  @import 'assets/css/base.less';
  .login {
    margin-top: .3rem;
    text-align: center;

    > button {
      width: 50%;
      height: .4rem;
      font-size: .18rem;
      border-radius: .3rem;
      border-color: @tint-color;
      border-style: none;
      color: #fff;
      background-color: @tint-color;
    }
  }
</style>