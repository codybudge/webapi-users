import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from "../router"

var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//monster-keepr.herokuapp.com/' : '//localhost:5000/';

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
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setKeeps(state, keeps) {
      state.keeps = keeps
    },
    setKeep(state, keep) {
      state.currentKeep = keep
    },
    setVaults(state, vaults) {
    state.vaults = vaults
    },
    setVault(state, vault) {
      state.currentVault = vault
    }
  },

  actions: {
    //Vault Keep
    addToVault({dispatch, commit, state}, vault){
      var newvk = {}
      newvk.userId = state.currentUser.id
      newvk.keepId = state.currentKeep.id
      newvk.vaultId = vault.id
      console.log(newvk)
      api.post('/vaultkeeps', newvk)
      .then(res=>{
        console.log(res)
        var newKeep = state.currentKeep
        newKeep.saves = state.currentKeep.saves+1
        dispatch('editKeep', newKeep)
      })
    },
    getVaultKeeps({dispatch, commit, state}) {
      api.get('/vaultkeeps/vault/' + state.currentVault.id)
      .then(res => {
        console.log('res')
        dispatch('getKeepsFromVault', res.data)
      })
    },
    //Vault
    getVaults({dispatch,commit, state}) {
      api.get('/vaults/author/' + currentUser.id)
      .thne(res => {
        commit('setVaults', res.data)
        console.log(res.data)
      })
    },
    setVault({commit}) {
      commit('setVault', vault)
    },
    
    
    
    
    //Keeps
    
    
    
    
    
    //auth
      login({ commit, dispatch }, payload) {
        auth.post('login', payload)
          .then(res => {
            commit('currentUser', res.data)
            router.push({ name: 'Home' })
          })
      },
    logout({ commit, dispatch }) {
      auth.delete('logout', )
        .then(res => {
          console.log(res)
          commit('deleteUser')
          router.push({ name: 'Login' })
        })
        .catch(res => {
          console.log(res.data)
        })
    },

    register({ commit, dispatch }, payload) {
      console.log(payload)
      auth.post('/register/', payload)
        .then(res => {
          commit('currentUser', res.data)
          router.push({ name: 'Home' })
        })
        .catch(res => {
          console.log(res.data)
        })
    },

    authenticate({ commit, dispatch }) {
      auth.get('/authenticate')
          .then(res => {
              commit('currentUser', res.data)
              router.push({ name: 'Home' })
          })
          .catch(res => {
              console.log(res.data)
          })
    },
  }
})

