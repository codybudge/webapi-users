<template>
    <div class="Nav container-fluid">
      <nav class="navbar sticky-top navbar-light bg-light">
        <h2>Keepr</h2>
        <h3>Hello {{User.username}}</h3>
        <router-link :to="{name:'Home'}">
          Home
        </router-link>
        <router-link :to="{name:'SeeKeep'}">
          All Posts
        </router-link>
        <div v-if="User.id">
        </div>
        <button class="btn" @click="logout">Logout</button>
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
    .navbar{
      background-color: rgb(119, 119, 119);
    }
  </style>