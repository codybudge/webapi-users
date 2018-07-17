import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Keeps from '@/components/Keeps'
import SeeKeep from '@/components/SeeKeep'
import Vault from '@/components/Vault'
// import ViewVault from '/components/ViewVault'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Keeps',
      name: 'Keeps',
      component: Keeps
    },
    {
    path: '/SeeKeep',
    name: 'SeeKeep',
    component: SeeKeep
    },
    {
      path:'/Vault',
      name: 'Vault',
      component: Vault
    },
    // {
      // path: '/ViewVault',
      // name: 'ViewVault',
      // component: ViewVault
    // },

    
  ]
})
