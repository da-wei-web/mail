<template>
  <div class="goods-params" v-if="Object.keys(goodsParams).length !== 0">
    <table v-for="(table, index) in goodsParams.sizes" 
          :key="index" 
          class="goods-size">
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
      </tr>
    </table>
    <table class="goods-info">
      <tr v-for="(info, index) in goodsParams.infos" :key="index">
        <td class="goods-info-key">{{ info.key }}</td>
        <td class="goods-info-value">{{ info.value }}</td>
      </tr>
    </table>
    <div class="goods-img" v-if="goodsParams.image.length !== 0">
      <img :src="goodsParams.image" alt="">
    </div>
  </div>  
</template>

<script>
  export default {
    name: 'DetailGoodsParams',
    props: {
      goodsParams: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .goods-params {
    padding: .1rem .15rem;
    font-size: .14rem;
    border-bottom: .05rem solid #f2f5f8;

    > table {
      width: 100%;
      border-collapse: collapse;

      > tr {
        height: .42rem;

        > td {
          border-bottom: 1px solid rgba(100, 100, 100, .1);
          vertical-align: middle; // 单元格里内容居中
        }
      }
    }

    > .goods-info {
      border-top: 1px solid rgba(0, 0, 0, .1);

      > tr {
        > .goods-info-key {
          width: .95rem;
        }

        > .goods-info-value {
          color: #eb4868;
        }
      }
    }

    > .goods-img {
      width: 100%;
    }
  }
</style>