<template>
    <div class="vaults">
      <div class="row">
        <div class="col">
         <form @submit.prevent="addNewVault">
            <input type="text" placeholder="description" v-model="newVault.Description">
            <button type="submit">Submit</button>
         </form>
         <div v-for="vault in vaults">

         </div>
        </div>
      </div>
  
    </div>
  </template>
  
  <script>
    export default {
      name: '',
      data() {
        return {
        }
      },
      computed: {},
      methods: {}
    }
  </script>
  
  <style>
  </style>