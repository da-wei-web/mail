<template>
  <div class="tar-control">
    <ul class="tar-control-list">
      <li v-for="(item, index) in tarList" 
          :key="index" 
          :class="{active: currentIndex === index}" 
          class="tar-control-item"
          @click='handleClick(index)'>
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'TarControl',
    props: {
      tarList: {
        type: Array,
        default(){
          return []
        }
      }
    },
    data() {
      return {
        // 标识符,默认为第一个
        currentIndex: 0
      }
    },
    methods: {
      // 点击切换选项卡状态
      handleClick(index) {
        this.currentIndex = index;
      }
    }
  }
</script>

<style lang="less" scoped>
  @import 'assets/css/base.less';
  .tar-control {
    width: 100%;
    height: .4rem;
    line-height: .4rem;

    > .tar-control-list {
      display: flex;
      width: 100%;

      > .tar-control-item {
        flex: 1;
        text-align: center;
        font-size: .18rem;

        > span {
          padding: .07rem;
        }
      }

      // 激活状态时的样式
      > .active {
        color: @text-high-color;

        > span {
          border-bottom: .03rem solid @tint-color;
        }
      }
    }
  }


</style>