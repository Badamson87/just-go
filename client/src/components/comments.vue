<template>
  <div class="comment container">
    <form @submit="addComment">
      <div class="row">
        <h5>Add Comment</h5>
      </div>
      <span class="row form-group d-block">
        <textarea class="col-12 form-control d-block" v-model="commentData.description" type="text" placeholder="Comment Here"></textarea>
      </span>
      <div class="row">
        <button class="btn btn-info" type="submit">Add Comment</button>
      </div>
    </form>
    <div class="row mt-3">
      <h5>Comments</h5>
    </div>
    <div v-for="comment in comments">
      <div class="commentStyle row">
        <h6 class="col-12 commentSpacing mt-3">{{comment.creatorName}}</h6>
        <!-- need to change creatorId to user-> userName -->
        <p class="col-12 commentSpacing">{{comment.description}}</p>
        <button v-if="activePost.creatorId == user._id" class="icon" @click="deleteComment(comment)"><i class="far fa-trash-alt"></i></button>
        <button v-else-if="comment.creatorId == user._id" class="icon" @click="deleteComment(comment)"><i class="far fa-trash-alt"></i></button>
      </div>
    </div>
  </div>
</template>
<!-- Need to pull in post info into the computed?? -->
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
      // console.log("active post data: ", this.postId._id)
      this.$store.dispatch('getComments', this.postId)
    },
    // created() {
    //   this.$store.dispatch('getComments', this.postId._id)
    // },
    computed: {
      activePost() {
        return this.$store.state.activePost
      },
      comments() {
        return this.$store.state.comments
      },
      user() {
        return this.$store.state.user
      }
    },
    watch: {
      postId(val) {
        this.$store.dispatch('getComments', this.postId)
      }
    },
    methods: {
      addComment() {
        let payload = {
          title: this.commentData.title,
          description: this.commentData.description,
          postId: this.activePost._id,
          creatorName: this.user.name
        }
        this.$store.dispatch('addComment', payload)
        event.target.reset()
        // addComment() {
        // this.newComment.postId = this.postId
        // this.$store.dispatch('addComment', this.newComment);
        // this.newComment = { title: "", authorId: "", postId: "", description: "", userName: "" }
      },
      deleteComment(commentData) {
        this.$store.dispatch('deleteComment', commentData)
      }

    },
    props: ['postId']
  }


</script>

<style>
  .commentStyle {
    background-color: #ffffff;
    border: solid 1px rgb(227, 227, 227)
  }

  .commentSpacing {
    display: flex;
    justify-content: flex-start;
  }

  .comborder {
    border: solid 1px rgb(208, 207, 207)
  }
</style>