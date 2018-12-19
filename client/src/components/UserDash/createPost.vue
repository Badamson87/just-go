<template>
  <div class="postForm">
    <h5>Create Post</h5>
        <form @submit.prevent="createPost">
          <div class="form-group">
            <label for="exampleFormControlSelect1" placeholder="Album Name"></label>
            <select class="form-control" id="exampleFormControlSelect1" >
              <option v-for="album in albums">{{album.title}}</option>
            </select>
            <!-- see task vue comp from kanban -->
            <input class="form-control" type="text" placeholder="Title" v-model="formData.title">
            <input class="form-control" type="text" placeholder="Location" v-model="formData.location">
            <!-- goelocation?? -->
            <input class="form-control" type="text" placeholder="Description" v-model="formData.description">
            <input class="form-control" type="file" id="avatar" name="avatar" accept="image/*" v-on="formData.image">
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
          title:'',
          location:'',
          description: '',
          image: ''
      }
    }
    },
    computed: {
      albums(){
        
        return this.$store.state.albums
      }
    },
    methods: {
      createPost(){
        this.$store.dispatch('createPost', this.formData)
      }
    }
  }

</script>

<style>


</style>
