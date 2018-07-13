import axios from 'axios'
import router from '../router'
var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//monster-keepr.herokuapp.com/' : '//localhost:5000/api';

var server = axios.create({
  baseURL: baseUrl,
  timeout: 3000,
  withCredentials: true
})

export default {
  state: {
    user: {}
  },
  actions: {
    register({ dispatch, commit }, payload) {
      server.post('/account/register', payload)
        .then(newUser => {
          router.push({ name: 'Home' })
          commit('setUser', newUser)
        })
        .catch(err => {
          console.log(err)
        })
    },
    login({ dispatch, commit }, payload) {
      server.post('/account/login', user)
        .then(newUser => {
          router.push({ name: 'Home' })
          commit('setUser', newUser)
        })
        .catch(err => {
          console.log(err)
        })
    },
    authenticate({ dispatch, commit }, bool) {
      server.get('account/authenticate')
        .then(res => {
          commit('setUser', res.data)
          if (res.data.id) {
            router.push({ name: 'Home' })
          } else {
            router.push({ name: 'Login' })
          }
        })
        .catch(res => {
          console.log(res)
        })
    },
    signOut({ commit, dispatch, state }) {
      server.delete('account/' + state.user.id)
        .then(res => {
          commit("setUser", {})
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  }
}