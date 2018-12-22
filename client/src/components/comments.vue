<template>
  <div class="comment container">
    <form @submit="addComment">
      <div class="row">
        <h5>Add Comment</h5>
      </div>
      <div class="row">
        <input class="col-12 form-control" v-model="commentData.title" type="text" placeholder="Comment Title">
      </div>
      <div class="row form-group">
        <textarea class="col-12 form-control" v-model="commentData.description" type="text" placeholder="Comment Here"></textarea>
      </div>
      <div class="row">
        <button class="btn btn-info" type="submit">Add Comment</button>
      </div>
    </form>
    <div class="row mt-3">
      <h5>Comments</h5>
    </div>
    <div v-for="comment in comments">
      <div class="commentStyle row">
        <h6 class="col-12 commentSpacing">{{comment.title}}</h6>
        <p class="col-12 commentSpacing">{{comment.creatorId}}</p>
        <!-- need to change creatorId to user-> userName -->
        <p class="col-12 commentSpacing">{{comment.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'comment',
    data() {
      return {
        commentData: {
          title: '',
          description: ''
        }
      }
    },
    mounted() {
      this.$store.dispatch('getComments', this.activePost._id)
    },
    computed: {
      activePost() {
        return this.$store.state.activePost
      },
      comments() {
        return this.$store.state.comments
      }
    },
    methods: {
      addComment() {
        debugger
        let payload = {
          title: this.commentData.title,
          description: this.commentData.description,
          postId: this.activePost._id
        }
        this.$store.dispatch('addComment', payload)

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
  .commentStyle {
    background-color: #CAEBF2
  }

  .commentSpacing {
    display: flex;
    justify-content: flex-start;
  }
</style>