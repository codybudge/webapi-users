<template>
  <div class="container-fluid">
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#createKeepModal">
          Create Keep
        </button>
    <div class="row">
      <div class="col">
        <div class="modal fade" id="createKeepModal" tabindex="-1" role="dialog" aria-labelledby="createKeepModalTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Create Keep</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form v-on:submit.prevent="createKeep">
                  <input type="url" placeholder="Image Url" v-model="newKeep.img">
                  <input class="input" type="text" name="description" placeholder="Description" id="description" v-model="newKeep.description">
                  </form>
                  <div class="mt-3">
                    <div class="modal-footer">
                      <select v-model="vault">
                        <option disabled value=''>Select a Vault</option>
                        <option v-for="vault in vaults" :key="vault.id" :value="vault">{{vault.title}}</option>
                      </select>
                      <button type="button" class="btn" data-dismiss="modal">Close</button>
                      <button v-if="vault.title" class="btn" @click="createKeep" data-dismiss="modal">Submit</button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import router from '../router'

  export default {
    name: 'Keeps',
    data() {
      return {
        newKeep: {
          img: '',
          description: ''
        },
        vault: {}
      }
    },
    computed: {
      keeps() {
        this.$store.state.keeps
      },
    },
    methods: {
      createKeep() {
        if (!this.vault.id) {
          this.error("Please select a vault")
        }
        this.newKeep.vaultId = this.vault.id
        this.$store.dispatch("createKeep", this.newKeep)
      },

    }
  }

</script>

<style>
</style>