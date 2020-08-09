<template>
  <grid-view :cols="3" :line-space="15" :h-margin="30" :item-space="0" v-if="subCategories.list">
    <div class="item" v-for="(item, index) in subCategories.list" :key="index">
      <a :href="item.link">
        <img class="item-img" :src="item.image" alt="">
        <div class="item-text">{{item.title}}</div>
      </a>
    </div>
  </grid-view>
</template>

<script>
  import GridView from 'components/common/gridView/GridView';
  export default {
    name: 'TabContent',
    props: {
      subCategories: {
        type: Object,
        default() {
          return []
        }
      }
    },
    components: {
      GridView
    }
  }
</script>

<style lang="less" scoped>
  // .panel img {
  //   width: 100%;
  // }

  .item {
    text-align: center;
    font-size: 12px;
  }

  .item-img {
    width: 60%;
  }

  .item-text {
    margin-top: 15px;
  }
</style>