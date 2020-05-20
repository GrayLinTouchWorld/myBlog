import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Artical from '@/pages/Artical'
import Login from '@/pages/Login'
import Edit from '@/pages/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/artical/:id',
      name: 'Artical',
      component: Artical
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    }
  ]
})
