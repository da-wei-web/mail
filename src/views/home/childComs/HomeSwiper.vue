<template>
  <swiper>
		<slide v-for="(item, index) in banners" :key="index" class="slide">
			<a :href="item.link">
				<img :src="item.image" alt="" @load="imageLoad">
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
    data() {
      return {
        isLoad: false
      }
    },
    components: {
      Swiper,
      Slide
    },
    methods:{
      getData(){
        console.log(banners);
      },

      imageLoad() {
        // isload为false时, 发射自定义数据
        if(!this.isLoad){
          // console.log("-------")
          this.$emit('swiperImageLoad');
          this.isLoad = true;
        }
        // isload变为true, 保证数据仅被发送一次
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