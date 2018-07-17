<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <form @submit.prevent="createKeep">
          <h1>Create a Keep</h1>
          <input type="url" name="url"placeholder="Image Url" v-model="newKeep.url">
          <input type="text" name="name"placeholder="Title" v-model="newKeep.name">
          <input type="text" name="description" placeholder="Description" id="description" v-model="newKeep.description">
          <button class="btn" type="submit">Submit</button>
          <!-- <button class="btn" type=""></button> -->
        </form>
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
          url: '',
          name: '',
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