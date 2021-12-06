import Vue from 'vue'
import VueRouter from 'vue-router'
import Logo from '../components/Logo.vue'
import Case from '../components/Case.vue'
import Talk from '../components/Talk.vue'
import Menu from '../components/Menu.vue'
import Eridan from '../components/Eridan.vue'
import Solution from '../components/Solution.vue'
import Visual from '../components/Visual.vue'
import Identity from '../components/Identity.vue'
import Strategy from '../components/Strategy.vue'
import Works from '../components/Works.vue'
import Industries from '../components/Industries.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Logo',
    component: Logo
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../components/About.vue')
    }
  },
  {
    path: '/Case',
    name: 'Case',
    component: Case
  },
  {
    path: '/Talk',
    name: 'Talk',
    component: Talk
  },
  {
    path: '/Menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/Eridan',
    name: 'Eridan',
    component: Eridan
  },
  {
    path: '/Solution',
    name: 'Solution',
    component: Solution
  },
  {
    path: '/Visual',
    name: 'Visual',
    component: Visual
  },
  {
    path: '/Identity',
    name: 'Identity',
    component: Identity
  },
  {
    path: '/Strategy',
    name: 'Strategy',
    component: Strategy
  },
  {
    path: '/Works',
    name: 'Works',
    component: Works
  },
  {
    path: '/Industries',
    name: 'Industries',
    component: Industries
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
