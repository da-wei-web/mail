<template>
  <swiper>
		<slide v-for="(item, index) in banners" :key="index" class="slide">
			<a :href="item.link">
				<img :src="item.image" alt="">
			</a>
		</slide>
	</swiper>
</template>

<script>
  import { Swiper, Slide } from 'components/common/swiper';
  
  export default {
    name: 'HomeSwiper',
    props: {
      banners: {
        type: Array,
        default() {
          return []
        } 
      }
    },
    components: {
      Swiper,
      Slide
    },
    methods:{
      getData(){
        console.log(banners);
      }
    }
  }
</script>

<style lang="less" scoped>
  .slide {
    // 解决div的高度大于img高度的问题
    font-size: 0;

    > a {
      display: block;
      width: 100%;
      height: 100%;
      
      > img {
        width: 100%;
      }
    }
  }
</style>