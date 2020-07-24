<template>
  <div class="shopping-cart">
    <div class="select-box">
      <label for="check" class="check-box">
        <input type="checkbox" id="check">
      </label>
    </div>
    <div class="goods-img">
      <img>
    </div>
    <div class="goods-msg">
      <ul class="goods-msg-list">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ShopCart',
  }
</script>

<style lang="less" scoped>
  .shopping-cart {
    display: flex;
    > .select-box {

      > .check-box {
        display: block;
        width: .13rem;
        height: .13rem;
        border: 1px solid #000;
        border-radius: 50%;
        background-color: initial;
        cursor: default;

        > #check {
          // 不符合规范,不同浏览器效果不同
          // -webkit-appearance: radio;
          opacity: 0;
        }
      }

      
    }
  }
</style>