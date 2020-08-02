<template>
  <div class="balance">
    <!-- 全选按钮 -->
    <div class="all-select">
      <select-button @click.native="selectItem" 
                      :class="{'btn-color': isSelectAll}" 
                      :is-checked="isSelectAll">
      </select-button>
      <span class="all-btn">全选</span>
    </div>
    <!-- 商品价格汇总 -->
    <div class="total">
      <span>合计：{{ totalPrice }}</span>
    </div>
    <!-- 结算 -->
    <div class="settlement" @click="calcSelect">
      <span>去结算({{ checkedLength }})</span>
    </div>
  </div>
</template>

<script>
  import SelectButton from 'components/conent/selectButton/SelectButton';

  import { mapGetters } from 'vuex'
  export default {
    name: 'SettleAccounts',
    // data() {
    //   return {
    //     // 保存选择状态
    //     isChecked: false
    //   }
    // },
    components: {
      SelectButton
    },
    computed: {
      // store中getters里的属性
      ...mapGetters(['cartList']),
      // 总价格
      totalPrice() {
        return '￥' + this.cartList.filter(item => {
          return item.checked;
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count;
        }, 0);
      },
      // 被选中的商品个数
      checkedLength() {
        return this.cartList.filter(item => item.checked).length;
      },
      isSelectAll() {
        if(this.cartList.length === 0) return false;
        // 1.遍历
        for(let item of this.cartList) {
          if(!item.checked) {
            return false
          } 
        }
        return true;

        // 2. find
        // return !this.cartList.find(item => !item.checked);
      }
    },
    methods: {
      // 切换选择状态
      selectItem() {
        if(this.isSelectAll) {
          this.cartList.forEach(item => item.checked = false);
        }else{
          this.cartList.forEach(item => item.checked = true);
        }
      },

      //  结算 
      calcSelect() {
        if(this.checkedLength === 0) {
          this.$toast.show('没有选择任何商品', 1000)
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import 'assets/css/base.less';
  .balance {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: .4rem;
    font-size: .3rem;
    background-color: #fff;
    box-shadow: 0 0 5px 0 rgba(100, 100, 100, .35);

    // 公共样式
    > div {
      height: 100%;
      line-height: .4rem;

      > span {
        display: block;
        width: 100%;
        height: 100%;
        text-align: center;
      }
    }

    > .all-select {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: .05rem;

      > .btn-color {
        color: #fff;
        background-color: red;
        border-color: red;
        line-height: .1rem;
      }

      > .all-btn {
        flex: 1;
        margin-left: .05rem;
      }
    }

    > .settlement {
      width: 1.4rem;

      > span {
        background-color: @tint-color;
        color: #fff;
      }
    } 
  }
</style>