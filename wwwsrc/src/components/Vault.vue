<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <h2>{{vault.title}}</h2>
        </div>
      </div>
      <div class="keeps row">
        <div v-for="keep in keeps" class="col-4">
          
        </div>
      </div>
    </div>
  </template>
  
  <script>
    
    export default {
      name: 'Vault',
      components: {
      
      },
      data() {
        return {
        }
      },
      computed: {
        
      },
      methods: {}
    }
  </script>
  
  <style>

  </style>
