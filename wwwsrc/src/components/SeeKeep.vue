<template>
  <div class="Create container d-flex justify-content-center">
    <div class="row">
      <Nav></Nav>
      <div v-for="SeeKeep in Keeps" class="col">
          <div class="card" style="width: 18rem;">
            <h3 class="card-tiltle">{{SeeKeep.name}}</h3>
              <img class="card-img-top" src="SeeKeep.url" alt="Card image">
              <div class="card-body">
                <p class="card-text">{{SeeKeep.description}}</p>
                <p class="card-text">Views:{{SeeKeep.views}}</p>
                <p class="card-text">Saves: {{SeeKeep.saves}}</p>
                <a href="#" @click="setKeep(keep)">View Keep</a>
              </div>
              </div>
              </div>
            
      </div>
  </div>
</template>

<script>
  import Nav from './Nav'
  export default {
    created(){
      this.$store.dispatch('getAllKeeps')
    },
    name: 'SeeKeep',

    components: {
      Nav,
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
