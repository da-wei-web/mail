// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'

// 使用vuex
Vue.use(Vuex)

// 实例化一个store
export default new Vuex.Store({
  // 状态
  state: {
    // 记录购物车里展示的数据
    contentCart: [],
    
  },
  // 改变状态
  mutations: {
    addCart(state, payload) {
      // 方法 1:
      // let oldProduct = null;
      // for(let item of state.contentCart) {
      //   if(item.iid === payload.iid) oldProduct = item;
      // }

      // 方法2:
      let oldProduct = state.contentCart.find(item => item.iid === payload.iid);

      if(oldProduct) {
        oldProduct.count += 1;
      }else {
        payload.count = 1;
        state.contentCart.push(payload);
      }
    }
  },
  // 异步操作
  actions: {
  },
  // 分仓库
  modules: {
  }
})
