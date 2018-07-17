<template>
  <div class="Create">
      <div v-for="SeeKeep in Keeps" class="col">
          <div class="card" style="width: 18rem;">
            <h3 class="card-tiltle">{{keep.name}}</h3>
              <img class="card-img-top" src="keep.url" alt="Card image">
              <div class="card-body">
                <p class="card-text">{{keep.description}}</p>
                <p class="card-text">Views:{{keep.views}} Saves: {{keep.saves}}</p>
                <a href="#" @click="setKeep(keep)">View Keep</a>
              </div>
            </div>
      </div>
  </div>
</template>

<script>
  export default {

    name: 'SeeKeep',

    components: {
      getAllKeeps(){
        this.$store.dispatch('getAllKeeps')
      }
    },
    data() {
      return {

      }
    },
    computed: {
      Keeps(){
        return this.$store.state.keeps
      }
    },
    methods: {
      setKeep(){
        this.$store.dispatch('setKeep', keep)
      },
      addNewKeep(){
        this.$store.dispatch('addNewKeep', this.newKeep)
      }
    }
  }

</script>

<style>


</style>
