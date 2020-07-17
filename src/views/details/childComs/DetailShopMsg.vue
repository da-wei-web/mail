<template>
  <div class="shop-info">
    <div class="title-info">
      <img :src="shopMsg.shopLogo" alt="">
      <span>{{ shopMsg.name }}</span>
    </div>
    <div class="base-info">
      <div class="content">
        <div class="total-sales">
          <span>{{ shopMsg.cSells + '万' }}</span>
          <span>总销量</span>
        </div>
        <div class="all-products">
          <span>{{ shopMsg.cGoods }}</span>
          <span>全部宝贝</span>
        </div>
        <div class="shop-score">
          <ul class="shop-score-list">
            <li v-for="item in shopMsg.score" :key="item.name" class="shop-score-item">
              <span>{{ item.name }}</span>
              <span :class="{'red-text': item.isBetter}" class="green-text">{{ item.score }}</span>
              <span class="grade" :class="{'red-bgc': item.isBetter === true, 'green-bgc': item.isBetter === false}">{{ item.isBetter ? '高' : '低' }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="shop-link">
        <button class="btn" @click="entrance">进店逛逛</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailShopMsg',
    props: {
      shopMsg: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    created() {
      console.log(this.shopMsg)
    },
    methods: {
      entrance() {
        // window.location.href = this.shopMsg.shopUrl;
        this.$router.push(this.shopMsg.shopUrl);
      }
    }
  }
</script>

<style lang="less" scoped>
  .shop-info {
    padding: .1rem .1rem .6rem;
    > .title-info {
      > img {
        width: .4rem;
        height: .4rem;
        margin-right: .1rem;
        border: .01rem solid #000;
        border-radius: 50%;
        vertical-align: middle;
      }

      > span {
        font-weight: bold;
      }
    }

    > .base-info {
      > .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: .1rem;

        > .total-sales, .all-products {
          text-align: center;
          font-size: .24rem;
          
          > span {
            display: block;
            font-weight: 600;
            padding-top: .135rem;
          }
        }

        > .all-products {
          padding-right: .35rem;
          border-right: .01rem solid #ccc;
        } 

        > .shop-score {
          > .shop-score-list {
            > .shop-score-item {
              display: flex;
              justify-content: space-between;
              align-items: center;

              > span {
                margin-top: .1rem;
                ~span {
                  margin-left: .2rem;
                }
              }

              // 动态绑定class样式
              > .green-text {
                color: #5ea732;
              }
              > .red-text {
                color: #f13e3a;
              }

              > .green-bgc {
                color: #fff;
                background-color: #5ea732;
              }
              > .red-bgc {
                color: #fff;
                background-color: #f13e3a;
              }
            }
          }
        }
      }
      > .shop-link {
        margin-top: .3rem;
        text-align: center;

        > .btn {
          outline: none;
          margin: 0;
          padding: .09rem .45rem;
          border: .01rem solid transparent;
          border-radius: .07rem;
          background-color: #eee;
        }
      }
    }
  }
</style>