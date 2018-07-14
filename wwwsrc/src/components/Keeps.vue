<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <input type="url" placeholder="Image Url" v-model="newKeep.img" >
        <input type="text" name="description" placeholder="Description" id="description" v-model="newKeep.description">
      </div>
    </div>
    

  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        newKeep:{
          img: '',
          description: ''
        },
        vault: {}
      }
    },
    computed: {
      keeps() {
        //go to store to get keeps
      },
      vaults() {
        //go to store to get vaults
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
