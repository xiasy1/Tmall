import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const Cart = () => import('views/Cart.vue');
const List = () => import('views/List.vue');
const Profile = () => import('views/Profile.vue');
const More = () => import('views/More.vue');
const Tone = () => import('views/MoreChildren/Tone');
const Charm = () => import('views/MoreChildren/Charm');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/more',
    name: 'More',
    component: More
  },
  {
    path: '/tone',
    name: 'Tone',
    component: Tone,
  },
  {
    path: '/charm',
    name: 'Charm',
    component: Charm,
  },
  {
    path: '/*',
    rediresct: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router
