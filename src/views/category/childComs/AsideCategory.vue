<template>
  <aside class="aside" v-if="Object.keys(categoryMsg).length !== 0">
    <scroll class="wrapper-container"
            ref="scroll">
      <ul class="category-list">
        <li v-for="(item, index) in categoryMsg"
            :key="index"
            class="category-item"
            :class="{active: currentIndex === index}"
            @click="switchIndex(index)">
          <span>{{ item.title }}</span>
        </li>
      </ul>
    </scroll>
  </aside>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll';
  export default {
    name: 'AsideCategory',
    props: {
      categoryMsg: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    components: {
      Scroll
    },
    methods: {
      switchIndex(index) {
        this.currentIndex = index;
        this.$emit('clickSwitch', index);
      }
    }
  }
</script>

<style lang="less" scoped>
  @import 'assets/css/base.less';
  .aside{
    width: 1rem;
   
    // 该滚动区域必须给定高度  
    > .wrapper-container{
     width: 100%;
     height: 100%;
    }

    // 滚动区域的内容高度不能设置死
    .category-list {
      width: 100%;
      background-color: rgb(241, 241, 241);

      li {
        width: 100%;
        height: .5rem;
        line-height: .5rem;
        border-left: .03rem solid transparent;
        text-align: center;
        font-size: .18rem;
      }

      // 处于激活状态下的li样式
      li.active {
        border-left-color: #ff5777;
        font-weight: 800;
        background-color: #fff;

        > span {
          color: #ff5777;
        }
      }
    }
  }
</style>