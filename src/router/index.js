import Vue from 'vue'
import VueRouter from 'vue-router'

const Work = () => import('../views/work/Work.vue')
const Company = () => import('../views/company/Company.vue')
const My = () => import('../views/my/My.vue')
const News = () => import('../views/news/News.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/work'
  },
  {
    path: '/work',
    name: 'Work',
    component: Work
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
