<template>
  <swiper class="swiper-item">
    <slide v-for="(item, index) in topImages" :key="index">
      <a href="#">
        <img :src="item" alt="">
      </a>
    </slide>
  </swiper>
</template>

<script>
  import { Swiper, Slide } from 'components/common/swiper/index'
  export default {
    name: 'DetailTopSwiper',
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper, 
      Slide
    }
  }
</script>

<style lang="less" scoped>
  .swiper-item {
    height: 3rem;
    overflow: hidden;

    a {
      display: block;
      width: 100%;
      height: 100%;

      > img {
        width: 100%;
      }
    }
  }
</style>