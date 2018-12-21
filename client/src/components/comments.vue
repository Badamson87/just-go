<template>
  <div class="comment container">
<form @submit="addComment">
    <textarea v-model="newComment" row="10" cols="80" type="text" placeholder="Comment Here"></textarea>
    <button type="submit">Add Comment</button>
</form>
  </div>
</template>

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
        addComment() {
            debugger
            this.$store.dispatch('addComment', this.newComment)
        }

    }
  }


</script>

<style>


</style>

