<template>
    <div class="vaults">
      <div class="row">
        <div class="col">
         <form @submit.prevent="addNewVault">
            <input type="text" placeholder="description" v-model="newVault.Description">
            <button type="submit">Submit</button>
         </form>
         <div v-for="vault in vaults">
          <router-link :to="{name: 'ViewVault'}">
              <button @click="setVault(vault)">{{vault.description}}</button>
          </router-link>
         </div>
        </div>
      </div>
  
    </div>
  </template>
  
  <script>
    export default {
      name: 'Vault',
      data() {
        return {
        }
      },
      computed: {
        vault(){
          return this.$store.state.vaults
        },
        currentUser(){
          return this.$store.state.currentUser
        }
      },
      methods: {
        addNewVault(){
          this.$store.dispatch('addNewVault', this.newVault)
        },
        setVault(){
          this.$store.dispatch('setVault', vault)
        }
      }
    }
  </script>
  
  <style>
  </style>