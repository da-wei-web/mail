<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';

  export default {
    name: 'Scroll',
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
				type: Boolean,
				default: false
			}
    },
    data(){
      return {
        scroll: null
      }
    },
    mounted() {
      // 创建BScroll的实例对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      });

      // 实时监听滚动的位置
      this.scroll.on('scroll', position => {
        
        this.$emit('scroll', position)
      });
      
      // 上拉加载更多
			this.scroll.on('pullingUp', ()=> {
        
        this.$emit('pullingUp')
        console.log('加载更多')
			});
    },
    methods: {
      // 一键置顶
      scrollTo(x, y, time=300) {
        // && 从左向右依次检验, 条件为真继续执行, 条件为假不再执行其右侧的代码
				this.scroll && this.scroll.scrollTo(x, y, time);
      },
      // 加载更多结束
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp();
      },
      // 刷新
      refresh() {
        // console.log('111111')
        this.scroll && this.scroll.refresh();
      }
    }
  }
</script>

<style> 

</style>