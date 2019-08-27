import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/jwt-auth',
      name: 'jwtAuth',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "auth" */ './views/Auth.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

// Routerによって画面遷移する際に毎回呼ばれる
router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters['isLoggedIn']
  const token = localStorage.getItem('token')
  console.log('to.path=', to.path)
  console.log('isLoggedIn=', isLoggedIn)

  // ログインが必要な画面に遷移しようとした場合
  if (to.matched.some(record => record.meta.requiresAuth)) {
    //ログインしている場合
    if (isLoggedIn && token != null) {
      console.log('ユーザはログイン済み')
      next()
    //ログインしていない場合
    } else {
      console.log('認証情報が足りません')
      forceToLoginPage(to, from, next)
    }
  } else {
    next()
  }
})

// ログイン画面に強制送還
function forceToLoginPage (to, from, next) {
  console.log('fource user to login page.')

  next({
    path: '/jwt-auth',
    query: { next: to.fullPath }
  })
}

export default router
