<template>
  <div class="container-fluid">
    {{activeAlbum}}
  </div>
</template>

<script>
  export default {
    name: 'album',
    data() {
      return {
        
      }
    },
    mounted(){
     return this.$store.dispatch('getPostsByAlbumId', this.albumId)
    },
    computed: {
      activeAlbum() {
        return this.$store.state.activeAlbum
      }

    },
    methods: {

    },
    props: ["albumId"]
  }

</script>

<style>


</style>