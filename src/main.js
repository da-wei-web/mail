import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick';

import toast from 'components/common/toast';
import vueLazyLoad from 'vue-lazyload';

Vue.config.productionTip = false;

// 注册事件总线
Vue.prototype.$bus = new Vue();

// 解决移动端300ms延迟问题
FastClick.attach(document.body);

// 安装插件
Vue.use(toast);
Vue.use(vueLazyLoad);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
