<template>
  <div class="container-fluid Home">
    <div class="nav justify-content-center">
      <h4 class="nav-item">{{curentUser.name}}</h4>
      <button class="btn" @click="logout">logout</button>
    </div>
  </div>
</template>
<script>
  
  import router from '../router'

    export default {
    name: 'Home',
    mounted() {
      if (!this.$store.state.user._id) {
        router.push({ name: 'Login' })
      }
    },
    computed: {
      curentUser() {
        return this.$store.state.user
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