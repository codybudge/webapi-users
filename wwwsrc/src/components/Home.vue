<template>
    <div class="container-fluid Home">
      <div class="nav justify-content-center">
        <Nav></Nav>
        <Keeps></Keeps>
        <Vault></Vault>
        
        
      </div>
    </div>
  </template>
  <script>
    
    import router from '../router'
    import Keeps from './Keeps'
    import Nav from './Nav'
    import SeeKeep from './SeeKeep'
    import Vault from './Vault'
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
        SeeKeep,
        Vault,
      },
      computed: {
        currentUser() {
          return this.$store.state.currentUser
        }
      },
      methods: {
        
      }
    }
  </script>
  
  <style scoped>
  </style>