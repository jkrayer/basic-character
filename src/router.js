import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import CreateCharacter from './views/CreateCharacter.vue';
import Equipment from './views/Equipment.vue';
import Lifecycle from './views/Lifecycle.vue';


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
      path: '/basic/equipment/',
      name: 'equipment',
      component: Equipment
    },
    {
      path: '/basic/lifecycle/',
      name: 'lifecycle',
      component: Lifecycle
    }
  ]
})
