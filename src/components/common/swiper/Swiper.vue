<template>
  <div id="swiper-container">
    <div class="swiper">
      <slot></slot>
    </div>
    <slot name="pagination"></slot>
    <div class="pagination">
      <slot name="pagination" v-if="showPagination && slideCount > 1">
        <div v-for="(item, index) in slideCount" class="pagination-item" :class="{active: index === currentIndex-1}" :key="index"></div>
      </slot>
    </div>
  </div>
</template>
<script>
  /*
    图片/文字/时间/分页器
    数据在Work里,因此用到props传值
    传过来的数据渲染成轮播图,实现录播
  */ 
  export default {
    name: 'Swiper',
    props: {
      // 间隔时间,默认3秒
      interval: {
        type: Number,
        default: 3000
      },
      // 切换一张图片所经历的时间
      animDuration: {
        type: Number,
        default: 300
      },
      // 显示分页器
      showPagination: {
        type: Boolean,
        default: true
      },
      moveRatio: {
        type: Number,
        default: .25
      }
    },
    data(){
      return {
        slideCount: 0, // 元素个数
        totalWidth: 0, // swiper的宽度
        swiperStyle: {}, // swiper样式
        currentIndex: 1, // 当前的index
        scrolling: false, // 是否正在滚动
      }
    },
    // mounted是vue中的一个钩子函数，一般在初始化页面完成后，再对dom节点进行相关操作。
    mounted(){
      // 1.操作DOM, 在前后添加Slide
      setTimeout(() => {
        this.handleDom();

        // 2.开启定时器
        this.startTimer();
      }, 100)
    },
    methods: {
      /**
       * 操作DOM, 在DOM前后添加Slide
       */
      handleDom(){
        // 获取dom元素
        let swiperE = document.querySelector('.swiper'),
            slideEs = swiperE.getElementsByClassName('slide'); // array
        
        // 个数
        this.slideCount = slideEs.length;

        // 3.如果大于1个, 那么在前后分别添加一个slide
        if(this.slideCount > 1){
          // 当前元素的前一个
          let cloneFirst = slideEs[0].cloneNode(true);
          // 当前元素的下一个
          let cloneLast = slideEs[this.slideCount - 1].cloneNode(true);
          swiperE.insertBefore(cloneLast, slideEs[0]);
          swiperE.appendChild(cloneFirst);
          // 轮播图的总长度
          this.totalWidth = swiperE.offsetWidth;
          // 轮播图样式
          this.swiperStyle = swiperE.style;
        }

        // 4.让swiper元素, 显示第一个(目前是显示前面添加的最后一个元素)
        this.setTransform(-this.totalWidth);
      },

      /**
       * 定时器操作
       */
      startTimer: function () {
        this.playTimer = window.setInterval(() => {
          this.currentIndex++;
          this.scrollContent(-this.currentIndex * this.totalWidth);
        }, this.interval)
      },
      stopTimer: function () {
        window.clearInterval(this.playTimer);
      },

       /**
       * 滚动到正确的位置
       */
      scrollContent(currentPosition) {
        // 0.设置正在滚动
        this.scrolling = true;

        // 1.开始滚动动画
        this.swiperStyle.transition ='transform '+ this.animDuration + 'ms';
        this.setTransform(currentPosition);

        // 2.判断滚动到的位置
        this.checkPosition();

        // 4.滚动完成
        this.scrolling = false
      },

      /**
       * 校验正确的位置
       */
      checkPosition: function () {
        window.setTimeout(() => {
          // 1.校验正确的位置
          this.swiperStyle.transition = '0ms';
          if (this.currentIndex >= this.slideCount + 1) {
            this.currentIndex = 1;
            this.setTransform(-this.currentIndex * this.totalWidth);
          } else if (this.currentIndex <= 0) {
            this.currentIndex = this.slideCount;
            this.setTransform(-this.currentIndex * this.totalWidth);
          }

          // 2.结束移动后的回调
          this.$emit('transitionEnd', this.currentIndex-1);
        }, this.animDuration)
      },

      /**
       * 设置滚动的位置
       */
      setTransform(position) {
        this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
        this.swiperStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`;
        this.swiperStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`;
      },

      /**
       * 拖动事件的处理
       */
      touchStart(e) {
        // 如果正在滚动, 不可以拖动
        if( this.scrolling ) return;

        // 停止计时
        this.stopTimer();

        // 记录开始滚动的位置
        this.startX = e.touches[0].pageX;
      },

      // 拖动中
      touchMove(e) {
        // 1.计算出用户拖动的距离
        this.currentX = e.touches[0].pageX;
        this.distance = this.currentX - this.startX;
        let currentPosition = -this.currentIndex * this.totalWidth;
        let moveDistance = this.distance + currentPosition;

        // 2.设置当前的位置
        this.setTransform(moveDistance);
      },

      // 离开时
      touchEnd: function (e) {
        // 1.获取移动的距离
        let currentMove = Math.abs(this.distance);

        // 2.判断最终的距离
        if (this.distance === 0) {
          return
        } else if (this.distance > 0 && currentMove > this.totalWidth * this.moveRatio) { // 右边移动超过0.5
          this.currentIndex--
        } else if (this.distance < 0 && currentMove > this.totalWidth * this.moveRatio) { // 向左移动超过0.5
          this.currentIndex++
        }

        // 3.移动到正确的位置
        this.scrollContent(-this.currentIndex * this.totalWidth);

        // 4.移动完成后重新开启定时器
        this.startTimer();
      },

      /**
       * 控制上一个, 下一个
       */
      previous() {
        this.changeItem(-1);
      },

      next() {
        this.changeItem(1);
      },

      changeItem(num) {
        // 1.移除定时器
        this.stopTimer();

        // 2.修改index和位置
        this.currentIndex += num;
        this.scrollContent(-this.currentIndex * this.totalWidth);

        // 3.添加定时器
        this.startTimer();
      }
    }
  }
</script>

<style lang="less" scoped>
  #swiper-container {
    overflow: hidden;
    position: relative;

    > .swiper {
      display: flex;
    }

    > .pagination {
      display: flex;
      justify-content: center;
      position: absolute;
      width: 100%;
      bottom: 8px;

      > .pagination-item {
        box-sizing: border-box;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background-color: #fff;
        line-height: 8px;
        text-align: center;
        font-size: 12px;
        margin: 0 5px;
      }

      > .pagination-item.active {
          background-color: rgba(212,62,46,1.0);
      }
    }
  }
</style>