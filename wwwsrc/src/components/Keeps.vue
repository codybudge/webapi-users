<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
<<<<<<< HEAD
        <input type="url" placeholder="Image Url" v-model="newKeep.img">
        <input type="text" name="description" placeholder="Description" id="description" v-model="newKeep.description">
        <button class="btn" type="submit">Submit</button>
=======
        <div v-if="currentUser.id">
          <form @submit.prevent="addNewKeep">
            <input type="text" v-model="newKeep.description" placeholder="description">
            <input type="url" v-model="newKeep.img" placeholder="Image Url">
            <button type="submit">submit</button>
          </form>
        </div>
>>>>>>> 0671d063cbede46f86d1c0fe6f1ec762bcef77a7
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