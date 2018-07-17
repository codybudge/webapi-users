<template>
  <div class="vaults">
    <div class="row">
      <div class="col">
          <div v-if="!currentUser.id">
              <h1>Login to Create Vaults</h1>
            </div>
            <div v-if="currentUser.id">
        <form @submit.prevent="addNewVault">
          <input type="text" placeholder="description" v-model="newVault.Description">
          <button type="submit">Submit</button>
        </form>
        <div v-for="vault in vaults">
          <router-link :to="{name: 'ViewVault'}">
            <button @click="setVault(vault)">Go to Vault</button>
          </router-link>
        </div>
      </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Nav from './Nav'
  export default {
    name: 'Vault',
    data() {
      return {
      }
    },
    // created() {
    //   this.$store.dispatch('getVaults')
    // },
    computed: {
      vaults() {
        return this.$store.state.vaults
      },
      currentUser() {
        return this.$store.state.currentUser
      }
    },
    methods: {
      addNewVault() {
        this.$store.dispatch('addNewVault', this.newVault)
      },
      setVault() {
        this.$store.dispatch('setVault', vault)
      }
    }
  }
</script>

<style>
</style>