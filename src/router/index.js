import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Contact from '../views/contact.vue'

const routerHistory = createWebHistory()

export default createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/contact',
      component: Contact,
    },
  ]
});