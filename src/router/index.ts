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
    path: '/index',
    name: 'index',
    component: () => import(/* webpackChunkName: "about" */ '../views/Index.vue')
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
  },
  {
    path: '/music',
    name: 'music',
    component: () => import(/* webpackChunkName: "about" */ '../views/Music.vue')
  }, 
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/fullpage',
    name: 'fullpage',
    component: () => import(/* webpackChunkName: "about" */ '../views/fullpage.vue')
  }  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
