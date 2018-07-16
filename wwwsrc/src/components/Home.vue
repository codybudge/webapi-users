<template>
  <div class="container-fluid Home">
    <div class="nav justify-content-center">
      <Nav></Nav>
      <keeps></keeps>
      <valts></valts>
      
    </div>
  </div>
</template>
<script>
  
  import router from '../router'
  import Keeps from './Keeps'
  import Nav from './Nav'
  import Vault from '/Vaults'

    export default {
    name: 'Home',
    mounted() {
      if (!this.$store.state.currentUser.id) {
        router.push({ name: 'Login' })
      }
    },
    components: {
      Nav,
      Keeps,
      Vault,
    },
    computed: {
      curentUser() {
        return this.$store.state.currentUser
      }
    },
    methods: {
      
    }
  }

</script>

<style scoped>

</style>