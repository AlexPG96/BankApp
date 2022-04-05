import { createRouter, createWebHistory } from 'vue-router'
import HomeBank from '../views/HomeBank.vue';
import Account from '../views/Account.vue';

const routes = [
  {
    path: '/',
    name: 'Overview',
    component: HomeBank,
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
