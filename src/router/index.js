import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home.vue');
const Company = () => import('views/company/Company.vue');
const My = () => import('views/my/My.vue');
const News = () => import('views/news/News.vue');
const Detail = () => import('views/details/Detail.vue');

// 解决重复点击路由报错问题
const originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originPush.call(this, location).catch(err => err);
}


// 使用路由
Vue.use(VueRouter)

// 配置路由映射关系
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/company',
    name: 'Company',
    component: Company
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/my',
    name: 'My',
    component: My
  },
  {
    path: '/detail/:iid',
    name: 'Detail',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
