<template>
  <div class="postForm form-group">
    <h5>Create Post</h5>
        <form @submit.prevent="">
            <input class="form-control" type="text" placeholder="Album Name">
            <!-- see task vue comp from kanban -->
            <input class="form-control" type="text" placeholder="Title">
            <input class="form-control" type="text" placeholder="Location">
            <!-- goelocation?? -->
            <input class="form-control" type="text" placeholder="Description">
            <input class="form-control" type="file" id="avatar" name="avatar" accept="image/*">
            <button class="btn btn-danger">Create</button>

        </form>
  </div>
</template>

<script>
  export default {
    name: 'PostForm',
    data() {
      return {

      }
    },
    computed: {},
    methods: {}
  }

</script>

<style>


</style>
