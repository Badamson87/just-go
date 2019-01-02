<template>
  <div class="postForm">

    <form @submit.prevent="createPost">
      <div class="form-group">
        <label for="selectedAlbum">Create Post</label>

        <select class="form-control" v-model="selectedAlbum" id="selectedAlbum">
          <option v-for="album in albums" :key="albums._id" v-bind:value="album">{{album.title}}</option>
        </select>

        <input class="form-control" type="text" placeholder="Title" v-model="formData.title">
        <input class="form-control" type="text" placeholder="Location" v-model="formData.location">
        <!-- goelocation?? -->
        <textarea class="form-control" type="text" placeholder="Description" v-model="formData.description"></textarea>
        <!-- change back to type=file and then use base 64 encoding accept="image/*"  -->
        <input class="form-control" type="text" v-model="formData.image" placeholder="Image URL">
        <button type="submit" class="btn mt-1 btn-sm btn-danger">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'PostForm',
    data() {
      return {
        selectedAlbum: {},
        formData: {
          title: '',
          location: '',
          description: '',
          image: ''
        }
      }
    },
    computed: {
      albums() {
        return this.$store.state.albums
      },
      // activeAlbum() {
      //   return this.$store.state.activeAlbum
      // },
      user() {
        return this.$store.state.user
      }

    },
    methods: {
      test() { console.log('working') },
      setActiveAlbum(album) {
        this.$store.commit('setActiveAlbum', album)
      },
      createPost() {
        this.formData.creatorName = this.user.name
        this.formData.albumName = this.selectedAlbum.title
        this.formData.albumId = this.selectedAlbum._id
        this.$store.dispatch('createPost', this.formData)
        event.target.reset()
      },
    }
  }

</script>

<style>


</style>