<template>
  <div class="Nav">
    <nav class="navbar sticky-top navbar-light bg-light">
      <h2>Keepr</h2>
      <div v-if="User.id">
        Welcome: {{User.username}}
        <button @click="logout">Logout</button>
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