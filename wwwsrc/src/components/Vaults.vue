<template>
    <div class="container-fluid">
      <div class="vault">
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
          Create Vault
        </button>
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Create Vault</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form v-on:submit.prevent="createVault">
                  <input class="input" type="text" name="title" placeholder="Title" id="title" v-model="newVault.title">
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn" data-dismiss="modal">Close</button>
                <button class="btn btn-primary btn-primary" @click="createVault" data-dismiss="modal">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="vaults row">
        <div class="col-4" v-for="vault in vaults">
          <div class="card text-center">
            <a @click="selectVault(vault)">
              <h2 class="card-title">{{vault.title}}</h2>
            </a>
            <div>
              <button class="btn" @click="deleteVault(vault)">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    export default {
      name: 'Vaults',
      mounted() {
        this.$store.dispatch("getVaults")
      },
      data() {
        return {
          newVault: {
            title: ''
          }
        }
      },
      computed: {
        vaults() {
          return this.$store.state.vaultModule.vaults
        }
      },
      methods: {
        createVault() {
          this.$store.dispatch("createVault", this.newVault)
        },
        selectVault(vault) {
          this.$store.dispatch("selectVault", vault)
        }
      }
    }
  </script>
  
  <style>
  </style>