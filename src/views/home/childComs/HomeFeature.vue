<template>
  <show-list class="feature">
    <template v-slot:title>
      <h2>本周流行</h2>
    </template>
    <ul class="feature-list">
      <li v-for="(item, index) in features" :key="index" class="feature-list-item">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <p>{{ item.title }}</p>
        </a>
      </li>
    </ul>
     <ul class="feature-list">
      <li v-for="(item, index) in features" :key="index" class="feature-list-item">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <p>{{ item.title }}</p>
        </a>
      </li>
    </ul>
  </show-list>
</template>

<script>
  import ShowList from 'components/common/showlist/ShowList.vue';
  export default {
    name: 'HomeFeature',
    props: {
      features: {
        type: Array,
        default(){
          return []
        }
      }
    },
    data() {
      return {
        isLoad: false
      }
    },
    components: {
      ShowList
    },
    // methods: {
    //   imageLoad() {
    //     if(!this.isLoad) {
    //       console.log('**********')
    //       this.$emit('swiperImageLoad2');
    //       this.isLoad = true;
    //     }
    //   }
    // }
  }
</script>

<style lang="less" scoped>
  .feature{
    width: 100%;
    padding: .1rem 0 .2rem;
    text-align: center;

    > h2 {
      font-size: .24rem;
    }

    > .feature-list{
      display: flex;
      width: 100%;
      padding-top: .1rem;
      text-align: center;

      > .feature-list-item {
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
</style>