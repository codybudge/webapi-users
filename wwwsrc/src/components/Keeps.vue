<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <form @submit.prevent="createKeep">
          <input type="url" name="url"placeholder="Image Url" v-model="newKeep.url">
          <input type="text" name="name"placeholder="Title" v-model="newKeep.name">
          <input type="text" name="description" placeholder="Description" id="description" v-model="newKeep.description">
          <button class="btn" type="submit">Submit</button>
          <button class="btn" type=""></button>
        </form>
      </div>
      <div class="col">
          <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="" alt="Card image">
              <div class="card-body">
                <p class="card-text"></p>
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