import { createRouter, createWebHistory } from 'vue-router'
import HomeBank from '../views/HomeBank.vue';
import Account from '../views/Account.vue';
import Settings from '../views/Settings.vue';

const routes = [
  {
    path: '/account',
    name: 'Account',
    component: Account,
  },
  {
    path: '/overview',
    name: 'Overview',
    component: HomeBank,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
