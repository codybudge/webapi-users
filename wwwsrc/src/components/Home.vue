<template>
  <div class="container-fluid Home">
    <div class="nav justify-content-center">
      <h1>This is the home page</h1>
      <!-- <keeps></keeps> -->
      
    </div>
  </div>
</template>
<script>
  
  import router from '../router'
  import Keeps from './Keeps'

    export default {
    name: 'Home',
    mounted() {
      if (!this.$store.state.currentUser.id) {
        router.push({ name: 'Login' })
      }
    },
    computed: {
      curentUser() {
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

<style scoped>

</style>