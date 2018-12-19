<template>
  <div class="container-fluid">

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
    computed: {},
    methods: {},
    props: ["albumId"]
  }

</script>

<style>


</style>