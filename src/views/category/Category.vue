<template>
  <div id="category">
    <!-- 顶部导航 -->
    <nav-bar class="category-nav">
      <template v-slot:center>
        <span>商品分类</span>
      </template>
    </nav-bar>
    <section class="main">
      <aside-category :category-msg="asideCategory"
                      @clickSwitch="clickSwitch" 
                      class="aside-nav" />
      <scroll class="wrapper-container" ref="scroll">
        <tab-content :sub-categories="categoryData.subCategories"
                      />
        <tar-control :tarList="['流行', '新款', '精选']"
                    ref="tarControl3"
                    @handleSwitch="handleSwitch" />
        <goods-list :goods="showGoodsDetail"
                    class="goods-list-width" />
      </scroll>
    </section>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import Scroll from 'components/common/scroll/Scroll';
  // import TarControl from 'components/conent/tarcontrol/TarControl';
  import GoodsList from 'components/conent/goodslist/GoodsLst';

  import AsideCategory from './childComs/AsideCategory';
  import TabContent from './childComs/TabContent';

  import sCategory from 'network/category';
  import { POP, NEW, SELL } from 'common/untils/constant';
  import { tarControlMixin } from 'common/untils/mixins';
  export default {
    name: 'Category',
    data() {
      return {
        // 侧边分类数据
        asideCategory: [],
        // 内容数据
        categoryData: {
          subCategories: {},
          categoryDetail: {
            'pop': [],
            'new': [],
            'sell': []
          }
        },
        currentIndex: -1,
        // currentType: POP
      }
    },
    mixins: [tarControlMixin],
    computed: {
      // 根据类型传递数据
      showGoodsDetail() {
        return this.categoryData.categoryDetail[this.currentType];
      }
    },
    components: {
      NavBar,
      AsideCategory,
      Scroll,
      TabContent,
      GoodsList
    },
    created() {
      // 调用该方法，在创建组件时请求数据
      this.getCategoryMsg();
    },
    methods: {
      // 该方法用于请求数据
      getCategoryMsg() {
        sCategory.getCategoryMsg().then(res => {
          let data = res.data;

          // 将类型的数据保存到asideCategory中
          this.asideCategory.push(...data.category.list);

          // 初始化请求内容
          this.getContent(0);
        })
      },

      // 获取内容页
      getContent(index) {
        this.currentIndex = index;
        let maitKey = this.asideCategory[index].maitKey;
        sCategory.getSubCategory(maitKey).then(res => {
          // 保存数据
          this.categoryData.subCategories = res.data;
          
          // 传递商品类型，POP,NEW,SELL是常量, 分别指'pop','new','sell'
          this.getDetailContent(POP);
          this.getDetailContent(NEW);
          this.getDetailContent(SELL);
        })
      },

      getDetailContent(type) {
        if(this.currentIndex === -1) return {};

        // this.currentIndex === -1时, miniWallkey将取不到值, 需要加以判断
        let miniWallkey = this.asideCategory[this.currentIndex].miniWallkey;

        // 请求商品详细数据
        sCategory.getCategoryDetail(miniWallkey, type).then(res => {

          // 一次性保存pop new sell的数据
          this.categoryData.categoryDetail[type] = res;
        })
      },
      // 类型切换 在tarControlMixin中
      // handleSwitch(index) {
      //   switch(index) {
      //     case 0:
      //       this.currentType = POP;
      //       break;
      //     case 1:
      //       this.currentType = NEW;
      //       break;
      //     case 2:
      //       this.currentType = SELL;
      //   }
      // },

      // 事件
      clickSwitch(index) {
        this.getContent(index);
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "assets/css/base.less";
  #category {
    position: relative;
    height: 100vh;
    background-color: #fff;

    > .category-nav {
        background-color: @tint-color;
        color: #fff;
      }

    > .main {
      display: flex;
      // justify-content: space-between;

      overflow: hidden;
      position: absolute;
      top: .44rem;
      right: 0;
      bottom: .49rem;
      left: 0;

      > .aside-nav {
        flex-shrink: 0;
      }

      > .wrapper-container {
        flex: 1;
        overflow: hidden;
        height: 100%;

        .goods-detail-list {
          // overflow: hidden;
          // width: 100%;
          height: 100%;
        }
        
      }
    }
   
  }
  
</style>
