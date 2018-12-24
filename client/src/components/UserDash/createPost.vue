<template>
  <div class="postForm">

    <form @submit.prevent="createPost">
      <div class="form-group">
        <label for="selectedAlbum">Create Post</label>

        <select class="form-control" v-model="formData.albumId" id="selectedAlbum">
          <option v-for="album in albums" :key="albums._id" v-bind:value="album._id">{{album.title}}</option>
        </select>

        <input class="form-control" type="text" placeholder="Title" v-model="formData.title">
        <input class="form-control" type="text" placeholder="Location" v-model="formData.location">
        <!-- goelocation?? -->
        <textarea class="form-control" type="text" placeholder="Description" v-model="formData.description"></textarea>
        <!-- change back to type=file and then use base 64 encoding accept="image/*"  -->
        <input class="form-control" type="text" v-model="formData.image" placeholder="Image URL">
        <button type="submit" class="btn btn-danger">Create</button>
      </div>
    </form>

  </div>
</template>

<script>
  export default {
    name: 'PostForm',
    data() {
      return {
        formData: {
          title: '',
          location: '',
          description: '',
          image: '',
          albumId: ''
        }
      }
    },
    computed: {
      albums() {

        return this.$store.state.albums
      }
    },
    methods: {
      createPost() {
        this.$store.dispatch('createPost', this.formData)
        event.target.reset()
      }
    }
  }

</script>

<style>


</style>