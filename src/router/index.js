import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  }
]

export default createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
