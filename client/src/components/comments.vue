<template>
  <div class="comment container">
    <form @submit="addComment">
      <input v-model="title" type="text" placeholder="Comment Title">
      <textarea v-model="newComment" row="10" cols="80" type="text" placeholder="Comment Here"></textarea>
      <button class="btn btn-info" type="submit">Add Comment</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'comment',
    data() {
      return {
        title: '',
        newComment: ''
      }
    },
    computed: {
      posts() {
        return this.$store.state.posts
      }
    },
    methods: {
      addComment() {
        debugger
        this.$store.dispatch('addComment', { description: this.newComment, title: this.title, postId: this.postId })

        // addComment() {
        // this.newComment.postId = this.postId
        // this.$store.dispatch('addComment', this.newComment);
        // this.newComment = { title: "", authorId: "", postId: "", description: "", userName: "" }
      }

    },
    props: ['postId']
  }


</script>

<style>


</style>