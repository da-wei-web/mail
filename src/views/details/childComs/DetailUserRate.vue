<template>
  <div class="user-rate" v-if="Object.keys(userRate).length !== 0">
    <!-- 标题 -->
    <div class="rate-title">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="rate-content">
      <!-- 用户的头像和昵称 -->
      <div class="user-msg">
        <img :src="userRate.user.avatar" alt="">
        <span>{{ userRate.user.uname }}</span>
      </div>
      <!-- 评论的内容 -->
      <div class="rate-text">
        <p>{{ userRate.content }}</p>
      </div>
      <!-- 评论发布时间/评论的商品类型 -->
      <div class="create-rate">
        <span>{{ userRate.created | getDate}}</span>
        <span>{{ userRate.style }}</span>
      </div>
      <!-- 图片显示 -->
      <div class="imgs-rate">
        <img :src="item" v-for="(item, index) in userRate.images" :key="index">
      </div>
    </div>
  </div>
</template>

<script>
  import { formaDate } from 'common/untils/untils';

  export default {
    name: 'DetailUserRate',
    props: {
      userRate: {
        type: Object
      }
    },
    // 过滤器
    filters: {
      getDate(value) {
        // 实例化Date对象
        let date = new Date(value * 1000);

        // 日期格式化
        return formaDate(date, 'yyyy-MM-dd');
      }
    }
  }
</script>

<style lang="less" scoped>
  .user-rate {
    padding: .1rem;
    border-bottom: .05rem solid rgba(100, 100, 100, .1);
    > .rate-title {
      display: flex;
      justify-content: space-between;
      height: .4rem;
      line-height: .4rem;
      padding-bottom: .1rem;
      border-bottom: 1px solid rgba(100, 100, 100, .1);
    }

    > .rate-content {
      > .user-msg {
        padding: .2rem 0 .3rem;
        > img {
          width: .4rem;
          height: .4rem;
          border-radius: 50%;
          vertical-align: middle;
        }
        > span {
          margin-left: .1rem;
          font-size: .24rem;
        }
      }

      > .rate-text {
        margin-top: .1rem;
        > p {
          text-align: justify;
          font-size: .14rem;
        }
      }
      > .create-rate {
        margin-top: .1rem;
        color: #ccc;
      }
      > .imgs-rate {
        margin-top: .1rem;

        > img {
          width: .7rem;
          height: .7rem;
          margin-right: .1rem;
        }
      }
    }
  }
</style>