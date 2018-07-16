<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div v-if="currentUser.id">
          <form @submit.prevent="addNewKeep">
            <input type="text" v-model="newKeep.description" placeholder="description">
            <input type="url" v-model="newKeep.img" placeholder="Image Url">
            <button type="submit">submit</button>
          </form>
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
        }
      }
    },
    computed: {
      keeps() {
        this.$store.state.keeps
      },
      currentUser(){
        this.$store.state.currentUser
      }
    },
    methods: {
      createKeep() {
        this.$store.dispatch("createKeep", this.newKeep)
      }
    }
  }
</script>

<style>
</style>