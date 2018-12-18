<template>
  <div class="albumForm form-group">
   <h5>Create Album</h5>
    <form @submit.prevent="addAlbum">
        <input class="form-control" type="text" placeholder="Album Name">
        <button class="btn btn-danger" type="submit">Create</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'AlbumForm',
    data() {
      return {

      }
    },
    computed: {},
    methods: {
        addAlbum(){
            this.$store.dispatch('addAlbum', this.newAlbum)
        }
    }
  }

</script>

<style>


</style>
