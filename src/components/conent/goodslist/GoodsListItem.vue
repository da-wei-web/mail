<template>
  <div class="goods-list-item" @click="jumpDetail">
    <a href="#" class="goods-list-link">
      <img v-lazy="showImage" 
          alt="" 
          class="goods-list-img"
          @load="itemImgLoad">
      <div class="goods-list-text">
        <p>{{ goodsItem.title }}</p>
        
        <div class="goods-list-info">
          <div class="goods-price-container">
            <span class="goods-list-price">{{ goodsItem.price }}</span>
          </div>
          <div class="goods-cfav-container">
            <i class="collect-icon"></i>
            <span class="goods-list-cfav">{{ goodsItem.cfav}}</span>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'GoodsListItem',
    props: {
      goodsItem: {
        type: Object,
        default(){
          return {
          }
        }
      }
    },
    computed: {
      showImage() {
        return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img;
      }
    },
    methods: {
      // 两个页面级组件会同时监听该属性
      itemImgLoad() {
        /*
         * 1. 监听不同路由实现
         */ 
        // if(this.$route.path.indexOf('/home')) {
        //   this.$bus.$emit('itemImgLoad');
        // }else if(this.$route.path.indexOf('/detail')) {
        //   this.$bus.$emit('detailItemImgLoad');
        // }

        /*
         * 2. mixin混入,解决组件中重复代码
         */  
        this.$bus.$emit('itemImageLoad');
      },
      jumpDetail() {
        this.$router.push('/detail/' + this.goodsItem.iid);
      }
    }
  }
</script>

<style lang="less" scoped>
  .goods-list-item {
    width: 49%;
		height: auto;
		padding-top: .06rem;
    
    > .goods-list-link{
      display: block;
      width: 100%;
      height: 100%;

      > .goods-list-img{
        width: 100%;
        height: auto;
      }

      > .goods-list-text {
        font-size: .14rem;

        > p {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-bottom: .03rem;
        }

        > .goods-list-info{
          display: flex;
          justify-content: space-between;
          align-items: center;
          
          > .goods-price-container{
            height: .2rem;
            line-height: .2rem;

            > .goods-list-price {
              color: red;
            }
          }

          > .goods-cfav-container{
            display: flex;
            align-items: center;

            > .collect-icon{
              width: .2rem;
              height: .2rem;
              background: url(~assets/img/home/collect_icon.png) no-repeat;
              background-size: cover;
				      vertical-align: bottom;
            }
          }
        }
      }
    }
  }
</style>