import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from "../router"

var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//monster-keepr.herokuapp.com/' : '//localhost:5000/';

let api = axios.create({
  baseURL: baseUrl + 'api',
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
    keeps: [],
    vaults: [],
    currentKeep: {},
    activeVault: {}
  },
  mutations: {
    setUser(state, user) {
      state.currentUser = user
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
    setActiveVault(state, vaultId) {
      debugger
      state.activeVault = state.vaults.find(v=> v.id == vaultId)
    }
  },

  actions: {
    //Vault Keep -----------------------------------------------------------------
    addToVault({ dispatch, commit, state }, vault) {
      var newvk = {}
      newvk.userId = state.currentUser.id
      newvk.keepId = state.currentKeep.id
      newvk.vaultId = vault.id
      console.log(newvk)
      api.post('/vaultkeeps', newvk)
        .then(res => {
          console.log(res)
          var newKeep = state.currentKeep
          newKeep.saves = state.currentKeep.saves + 1
          dispatch('editKeep', newKeep)
        })
    },
    getVaultKeeps({ dispatch, commit, state }) {
      api.get('/vaultkeeps/vault/' + state.activeVault.id)
        .then(res => {
          console.log('res')
          dispatch('getKeepsFromVault', res.data)
        })
    },
    //Vault -----------------------------------------------------------------
    addNewVault({ dispatch, commit, state }, newVault) {
      newVault.UserId = state.currentUser.id
      newVault.Username = state.currentUser.username
      api.post('/vault', newVault)
        .then(res => {
          //state.currentVault = res.data
          //router.push({name: "ViewVault"})
        })
    },
    getVaults({ dispatch, commit, }){
      api.get('/vault')
      .then(res => {
        commit('setVaults', res.data)
        console.log(res.data)
      })
    },
    setActiveVault({ commit }, vaultId) {
      debugger
      commit('setActiveVault', vaultId)
    },

    //Keeps -----------------------------------------------------------------
    createKeep({commit, dispatch, state}, payload){ 
      payload.userId = state.currentUser.id
      payload.Username = state.currentUser.username
      api.post('/keeps', payload)
      .then(res => {
        dispatch('getAllKeeps')
      })
      
    },
    addNewKeep({ dispatch, commit, state }, newKeep) {
      newKeep.UserId = state.currentUser.id
      newKeep.Username = state.currentUser.username
      api.post('/keeps', newKeep)
        .then(res => {
          //state.currentKeep = res.data
          //router.push({name: "ViewKeep"})
          
        })
    },
    setKeep({ commit }, keep) {
      debugger
      commit("setKeep", keep)
    },
    
    getAllKeeps({ commit, dispatch }) {
      api.get('/keeps')
      .then(res => {
        commit('setKeeps', res.data)
      })
    },
    getKeepId({ commit, dispatch, state }) {
      api.get('/keeps/' + state.currentKeep.Id)
        .then(res => {
          commit('setKeeps', res.data)
        })
    },

    //auth -----------------------------------------------------------------
    login({ commit, dispatch }, payload) {
      auth.post('login', payload)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'Home' })
          dispatch('getVaults', res.data)
        })
        .catch(res => {
          console.log(res)
        })
    },
    logout({dispatch, commit,state}){
      auth.delete('/' + state.currentUser.id)
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
          dispatch('getVaults', res.data)
        })
        .catch(res => {
          console.log(res.data)
        })
    },

    authenticate({ commit, dispatch }) {
      auth.get('/authenticate/', )
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'Home' })
          dispatch('getVaults', res.data)
        })
        .catch(res => {
          console.log(res.data)
        })
    },
  }
})