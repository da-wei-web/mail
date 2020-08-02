<template>
  <div class="toast" v-show="isShow">
    <span>{{ message }}</span>
  </div>
</template>

<script>
  export default {
    name: 'Toast',
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(message='默认文字', duration=700) {
        this.message = message;
        this.isShow = true;

        setTimeout(() => {
          this.isShow = false;
          this.message = ''
        }, duration);
      }
    }
  }
</script>

<style lang="less" scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    border-radius: .05rem;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, .6);
    z-index: 9999;

    > span {
      display: block;
      padding: .08rem .1rem; 
      font-size: .18rem;
      color: #fff;
    }
  }
</style>