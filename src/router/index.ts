import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/One',
    name: 'One',
    component: () => import(/* webpackChunkName: "about" */ '../components/Childone.vue')
  },
  // {
  //   path: '/One',
  //   redirect: '/'
  // },  
  {
    path: '/two',
    name: 'Two',
    component: () => import(/* webpackChunkName: "about" */ '../components/Childtwo.vue')
  },
  {
    path: '/three',
    name: 'Three',
    component: () => import(/* webpackChunkName: "about" */ '../components/Childthree.vue')
  }  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
