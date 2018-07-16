import axios from 'axios'
import router from '../router'
var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//monster-keepr.herokuapp.com/api' : '//localhost:5000/api';

var server = axios.create({
  baseURL: baseUrl,
  timeout: 3000,
  withCredentials: true
})

export default {
  state: {
    keeps: [],
    userKeeps: [],
    activeKeep: {}
  },
  mutations: {
    setKeeps(state, keeps) {
      state.keeps = keeps
    },
    setNewKeep(state, keep) {
      state.userKeeps.unshift(keep)
    },
    removeKeep(state, id) {
      var i = state.userKeeps.findIndex(keep => {
        return keep.id == id
      })
      state.userKeeps.splice(i, 1)
    },
    setKeep(state, keep) {
      var i = state.userKeeps.findIndex(k => {
        return keep.id == k.id
      })
      if (i > -1) {
        state.userKeeps.splice(i, 1, keep)
      }
      state.keep = keep
    },
    setActiveKeep(state, keep) {
      state.activeKeep = keep
    }
  },
  actions: {
    getKeeps({ commit, dispatch }) {
      api.get('/keep')
        .then(res => {
          commit("setKeeps", res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getVaultKeeps({ commit, dispatch }, id) {
      api.get('/keep/vault/' + id)
        .then(res => {
          commit("setUserKeeps", res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    createKeep({ commit, dispatch, state }, keep) {
      keep.author = state.currentUser.username
      api.post('/keep/' + keep.vaultId, keep)
        .then(res => {
          commit("setNewKeep", res.data)
            .catch(err => {
              console.log(err)
            })
        })
        .catch(err => {
          console.log(err)
        })
    },
    editKeep({ commit, dispatch }, keep) {
      api.put('/keep/' + keep.id, keep)
        .then(res => {
          commit("setKeep", res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    selectKeep({ commit, dispatch }, keep) {
      api.get('/keep/' + keep.id)
        .then(res => {
          commit("setKeep", res.data)
          router.push({ name: "Keep", params: { keepId: res.data.id } })
        })
        .catch(err => {
          console.log(err)
        })
    },
    activeKeep({ dispatch, commit }, keep) {
      commit("setActiveKeep", keep)
    }
  }
}