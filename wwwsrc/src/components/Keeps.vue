<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <input type="url" placeholder="Image Url" v-model="newKeep.img">
        <input type="text" name="description" placeholder="Description" id="description" v-model="newKeep.description">
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
        this.$store.dispatch("createKeep", this.newKeep)
      }

    }
  }

</script>

<style>
</style>