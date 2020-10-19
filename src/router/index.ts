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


// router.beforeEach((to, from, next) => {
//   const userInfo = localStorage.userInfo
//   console.log('userInfo:',userInfo)
//   console.log('to:',to)
//   console.log('from:',from)
//   if(userInfo || to.path === '/login') {
//     console.log(1)
//     next()
//   } else {
//     console.log(2)
//     router.push({
//       name: 'login'
//     })
//     // next({
//     //   name: 'login',
//     //   query: {
//     //     redirect: to.path
//     //   }
//     // })
//   }
// })

export default router
