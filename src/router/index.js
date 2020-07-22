import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import dataAndMethods from '../views/data-and-methods.vue'
import instanceLifecycleHooks from '../views/instance-lifecycle-hooks.vue'
import watchers from '../views/watchers.vue'

const routerHistory = createWebHistory()

export const routers = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/data-and-methods',
    component: dataAndMethods,
  },
  {
    path: '/instance-lifecycle-hooks',
    component: instanceLifecycleHooks,
  },
  {
    path: '/watchers',
    component: watchers
  }
];

export default createRouter({
  history: routerHistory,
  strict: true,
  routes: routers
});