<template>
  <div class="recommend">
    <ul class="recommend-list">
      <li v-for="(item, index) in recommends" :key="index" class="recommend-list-item">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <p>{{ item.title }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommendView',
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .recommend{
    width: 100%;
    padding: 10px 0 20px;
    border-bottom: .08rem solid #eee;

    > .recommend-list{
      display: flex;
      width: 100%;
      text-align: center;

      > .recommend-list-item {
        flex: 1;

        > a {
          display: block;
          width: 100%;
          height: 100%;

          > img{
            width: .65rem;
            height: .65rem;
            margin-bottom: .1rem;
          }

          > p{
            font-size: .12rem;
          }
        }
        
      }
    }
  }
</style>>

</style>