<template>
  <li class="tar-bar-item" @click="handleClick">
    <a href="#">
      <div :style="activeStyle">
        <slot name="slot-icon"></slot>
      </div>
      <div :style="activeStyle">
        <slot name="slot-text"></slot>
      </div>
    </a>
  </li>  
</template>

<script>
  export default {
    name: 'TarBarItem',
    // 动态传值
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data(){
      return {
      }
    },
    computed: {
      isActive(){
        // 可以用indexOf() 不等于
        // return this.$route.path.indexOf(this.path)!==-1;
        // includes() 返回true或者false
        return this.$route.path.includes(this.path);
      },
      activeStyle(){
        return this.isActive ? {color: this.activeColor} : {};
      }
    },
    methods: {
      handleClick(){
        // 可以通过修改url实现路由跳转。
        this.$router.push(this.path).catch(err => {
          console.log('错误', err);
        });
      }
    }
  }
</script>

<style scoped>
  .tar-bar-item{
    flex: 1;
    text-align: center;
  }

  .tar-bar-item > a{
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #333;
  }
  span{
    display: inherit;
  }
  .iconfont{
    width: 100%;
    padding-top: .06rem;
    font-size: .24rem;
  }
  .text{
    width: 100%;
    padding-bottom: .03rem;
    font-size: .12rem;
  }
  
</style>