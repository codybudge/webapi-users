<template>
    <div class="Nav container-fluid">
      <nav class="navbar sticky-top navbar-light bg-light">
        <h2>Keepr</h2>
        <div v-if="User.id">
          <h3>Welcome {{User.username}}</h3>
          <button class="btn" @click="logout">Logout</button>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
    export default {
      name: 'Nav',
      data() {
        return {
        }
      },
      computed: {
        User() {
          return this.$store.state.currentUser
        }
      },
      methods: {
        logout() {
          this.$store.dispatch('logout')
        }
      }
    }
  </script>
  
  <style>
  </style>