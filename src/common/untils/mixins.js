import BackTop from 'components/conent/backtop/BackTop';
import TarControl from 'components/conent/tarcontrol/TarControl';

import { debance } from './untils';
import { POP, NEW, SELL } from './constant';


// backTopMixin
export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBT: false
    }
  },
  methods: {
    // 返回顶部
    backToTop() {
      // console.log(this.$refs.scroll)
      this.$refs.scroll.scrollTo(0, 0, 500);
      // 我是返回顶部的混入
    },

    // 实时检测滚动的位置, 大于1000时显示一件置顶功能图标
    showBackTop(position) {
      this.isShowBT = Math.abs( position.y ) > 1000;
    }
  }
}

// listenImgLoadMixin
export const listenImgLoadMixin = {
  data() {
    return {
      listenImgLoad: null
    }
  },
  mounted() {
    // 防抖减少刷新频率
    const refresh = debance(this.$refs.scroll.refresh, 300);

    // 监听图片是否加载完成
    this.listenImgLoad = () => {
      refresh();
      // console.log('________')
    }
    this.$bus.$on('detailItemImgLoad', this.listenImgLoad);
    console.log("我是监听图片加载的混入")
  }
}

// 商品选项卡的混入
export const tarControlMixin = {
  components: {
    TarControl
  },
  data() {
    return {
      currentType: POP
    }
  },
  methods: {
    handleSwitch(index) {
      switch(index) {
        case 0:
          this.currentType = POP;
          console.log('我是混入'+ POP);
          break;
        case 1:
          this.currentType = NEW;
          console.log('我是混入'+ NEW);
          break;
        case 2:
          this.currentType = SELL;
          console.log('我是混入'+ SELL);
          break;
      }
    }
  }
}