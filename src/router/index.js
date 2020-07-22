import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Contact from '../views/contact.vue'

const routerHistory = createWebHistory()

export const routers = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/contact',
    component: Contact,
  },
];

export default createRouter({
  history: routerHistory,
  strict: true,
  routes: routers
});