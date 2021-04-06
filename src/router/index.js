import Vue from 'vue'
import VueRouter from 'vue-router'
import VueGtag from 'vue-gtag'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

if (process.env.NODE_ENV === 'production') {
  Vue.use(VueGtag, {
    config: {
      id: process.env.GAID
    }
  })
}

export default router
