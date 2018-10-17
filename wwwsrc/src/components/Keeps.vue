<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <form @submit.prevent="createKeep">
          <h1>Create a Keep</h1>
          <input type="url" name="url" placeholder="Image Url" v-model="newKeep.url">
          <h1>Create a Vault</h1>
          <input type="text" name="name" placeholder="Title" v-model="newKeep.name">
          <input type="text" name="description" placeholder="Description" id="description" v-model="newKeep.description">
          <button class="btn" type="submit">Submit</button>
        </form>
        <div>
          <div v-for="keep in keeps">
            <div class="card" style="width: 18rem;">
              <h3 class="card-title">{{keep.name}}</h3>
              <img class="card-img-top" :src="keep.url" alt="Card image">
              <div class="card-body">
                <p class="card-text">{{keep.description}}</p>
                <p class="card-text">Views:{{keep.views}}</p>
                <p class="card-text">Saves: {{keep.saves}}</p>
                <button @click="makePrivate(keep)">
                  Make Private
                </button>
                <button @click="makePublic(keep)">
                  Make Public
                </button>
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
          url: '',
          name: '',
          description: ''
        }
      }
    },
    mounted() {
      this.$store.dispatch('getMyKeeps')
    },
    computed: {
      keeps() {
        return this.$store.state.myKeeps
      },
      currentUser() {
        return this.$store.state.currentUser
      }
    },
    methods: {
      createKeep() {
        return this.$store.dispatch("createKeep", this.newKeep)
      },
      makePrivate(keep) {
        keep.public = false
        this.$store.dispatch('setKeep', keep)
      },
      makePublic(keep) {
        keep.public = true
        this.$store.dispatch('setKeep', keep)
      }
    }
  }

</script>

<style scoped>
  .card-body {
    background: rgb(89, 148, 195);
  }
</style>
