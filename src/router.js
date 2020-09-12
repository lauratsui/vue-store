import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import store from './store'

const authGuard = (to, from, next) => {
  // console.log('route', to.matched[0].path, store)
  if (store.state.token) { // has user && otp is verified
    return next()
  } else {
    store.commit('setToken', '') // need user.token only
    // store.commit('setLayout', 'layout-admin')
    return next('/')
  }
}

const Products = () => import('./pages/Products.vue')
const Carts = () => import('./pages/Carts.vue')
const Login = () => import('./pages/Login.vue')

const router = new VueRouter({
  mode: 'history',
  hash: false,
  routes: [
    { path: '/', component: Login  },
    { path: '/products', component: Products, beforeEnter: authGuard },
    { path: '/carts', component: Carts, beforeEnter: authGuard }
  ]
})

export default router