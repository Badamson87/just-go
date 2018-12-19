<template>
  <div class="albumForm form-group">
   <h5>Create Album</h5>
    <form @submit.prevent="addAlbum">
        <input class="form-control" type="text" placeholder="Album Name" v-model="newAlbum.title">
        <button class="btn btn-danger" type="submit">Create</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'AlbumForm',
    data() {
      return {
       newAlbum: {
         title: ''

       } 
      }
    },
    computed: {},
    methods: {
        addAlbum(){
            this.$store.dispatch('addAlbum', this.newAlbum)
            event.target.reset()
        }
    }
  }

</script>

<style>


</style>
