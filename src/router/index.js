import { createRouter, createWebHistory } from 'vue-router'
import HomeBank from '../views/HomeBank.vue';
import Account from '../views/Account.vue';
import Settings from '../views/Settings.vue';
import Cards from '../views/Cards.vue';
import Send from '../views/Send.vue';
import Receive from '../views/Receive.vue';
import Swap from '../views/Swap.vue';

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
  {
    path: '/cards',
    name: 'Cards',
    component: Cards,
  },
  {
    path: '/send',
    name: 'Send',
    component: Send,
  },
  {
    path: '/receive',
    name: 'Receive',
    component: Receive,
  },
  {
    path: '/swap',
    name: 'Swap',
    component: Swap,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
