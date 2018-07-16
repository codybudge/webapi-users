<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <form @submit.prevent="createKeep">
          <input type="url" placeholder="Image Url" v-model="newKeep.img">
          <input type="text" name="description" placeholder="Description" id="description" v-model="newKeep.description">
          <button class="btn" type="submit">Submit</button>
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