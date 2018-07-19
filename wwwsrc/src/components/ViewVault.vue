<template>
  <div class="">
    {{activeVault}}
  </div>
</template>

<script>
  export default {
    name: '',
    props: ["vaultId"],
    mounted(){
      this.$store.dispatch('setActiveVault', this.vaultId)
    },
    data() {
      return {

      }
    },
    computed: {
      activeVault(){
        return this.$store.state.activeVault
      }
    },
    methods: {}
  }

</script>

<style>


</style>
