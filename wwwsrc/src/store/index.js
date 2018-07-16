import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from "../router"
import keepsModule from './keeps'
import vaultModule from './vault'

var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//monster-keepr.herokuapp.com/' : '//localhost:5000/api';

let api = axios.create({
  baseURL: baseUrl,
  timeout: 3000,
  withCredentials: true
})

let auth = axios.create({
  baseURL: baseUrl + 'account/',
  timeout: 3000,
  withCredentials: true
})

vue.use(vuex)

export default new vuex.Store({
  state: {
    currentUser: {},
    keeps: {},
    vaults: {},
    currentKeep: {},
    currentVault: {}
  },
  modules: {
    keepsModule,
    vaultModule
  },
  mutations: {
    setUser(state, user) {
      state.currentUser = user
    }
  },

  actions: {

    //auth
    login({ commit, dispatch }, payload) {
      auth.post('login', payload)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'Home' })
        })
    },
    logout({dispatch, commit,state}){
      auth.delete('/'+state.currentUser.id)
      .then(res =>{
        console.log(res)
      })
    },

    register({ commit, dispatch }, payload) {
      console.log(payload)
      auth.post('/register/', payload)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'Home' })
        })
        .catch(res => {
          console.log(res.data)
        })
    },

    authenticate({ commit, dispatch }, ) {
      auth.get('/authenticate/', )
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'Home' })
        })
        .catch(res => {
          console.log(res.data)
        })
    },
  }
})

