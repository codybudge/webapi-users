import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from "../router"

var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//monster-keepr.herokuapp.com/' : '//localhost:3000/';

let api = axios.create({
  baseURL: baseUrl,
  timeout: 3000,
  withCredentials: true
})

let auth = axios.create({
  baseURL: baseUrl + 'auth/',
  timeout: 3000,
  withCredentials: true
})

vue.use(vuex)

export default new vuex.Store({
  state: {
    user: {},
  },
  mutation: {
    setUser(state, user) {
      state.user = user
    },
    deleteUser(state) {
      state.user = {}
    },

    actions: {
      login({ commit, dispatch }, loginCredentials) {
        auth.post('login', loginCredentials)
          .then(res => {
            commit('setUser', res.data)
            router.push({ name: 'Home' })
          })
      }
    }
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

  register({ commit, dispatch }, userData) {
    console.log(userData)
    auth.post('/register/', userData)
      .then(res => {
        commit('setUser', res.data)
        router.push({ name: 'Home' })
      })
      .catch(res => {
        console.log(res.data)
      })
  },

  authenticate({ commit, dispatch }) {
    api.get('/authenticate')
      .then(res => {
        commit('setUser', res.data)
        router.push({ name: 'Home' })
      })
      .catch(res => {
        console.log(res.data)
      })
  },
})
