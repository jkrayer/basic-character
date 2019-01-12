import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CreateCharacter from './views/CreateCharacter.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/basic/',
      name: 'home',
      component: Home
    },
    {
      path: '/basic/create/',
      name: 'create-character',
      component: CreateCharacter
    },
    {
      path: '/basic/characters/',
      name: 'characters',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Characters.vue')
    },
    {
      path: '/basic/equipment/',
      name: 'equipment',
      component: () => import('./views/Equipment.vue')
    }
  ]
})
