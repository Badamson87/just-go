<template>
  <div class="comment container">
<form @submit="addComment(post)">
    <textarea v-model="newComment" row="10" cols="80" type="text" placeholder="Comment Here"></textarea>
    <button type="submit">Add Comment</button>
</form>
  </div>
</template>
<!-- Need to pull in post info into the computed?? -->
<script>
  export default {
    name: 'comment',
    data() {
      return {
          newComment: ''

      }
    },
    computed: {},
    methods: {
        addComment(post) {
            debugger
            this.$store.dispatch('addComment', {description: this.newComment, postId: post.postId})
        }

    }
  }


</script>

<style>


</style>

