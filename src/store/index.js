// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'

import { mutations } from './mutations';
import { getters } from './getters';
import { actions } from './actions';

// 使用vuex
Vue.use(Vuex)

const state = {
  // 记录购物车里展示的数据
  contentCart: []
}

// 实例化一个store
export default new Vuex.Store({
  // 状态
  state,
  // 改变状态
  mutations,
  // 异步操作
  actions,
  getters
})
