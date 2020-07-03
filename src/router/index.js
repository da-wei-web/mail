import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home.vue')
const Company = () => import('views/company/Company.vue')
const My = () => import('views/my/My.vue')
const News = () => import('views/news/News.vue')

Vue.use(VueRouter)

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
