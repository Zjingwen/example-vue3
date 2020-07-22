import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import dataAndMethods from '../views/data-and-methods.vue'
import instanceLifecycleHooks from '../views/instance-lifecycle-hooks.vue'
import watchers from '../views/watchers.vue'
import mappingAnArrayToElementsWithVfor from '../views/mapping-an-array-to-elements-with-v-for.vue'
import listeningToEvents from '../views/listening-to-events.vue';
import baseExample from '../views/base-example.vue';

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
  },
  {
    path: '/mapping-an-array-to-elements-with-v-for',
    component: mappingAnArrayToElementsWithVfor,
  },
  {
    path: '/listening-to-events',
    component: listeningToEvents
  },
  {
    path: '/base-example',
    component: baseExample,
  }
];

export default createRouter({
  history: routerHistory,
  strict: true,
  routes: routers
});